'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11422<T> = T extends (infer U)[]
  ? DeepReadonlyArray11422<U>
  : T extends object
  ? DeepReadonlyObject11422<T>
  : T;

interface DeepReadonlyArray11422<T> extends ReadonlyArray<DeepReadonly11422<T>> {}

type DeepReadonlyObject11422<T> = {
  readonly [P in keyof T]: DeepReadonly11422<T[P]>;
};

type UnionToIntersection11422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11422<T> = UnionToIntersection11422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11422<T extends unknown[], V> = [...T, V];

type TuplifyUnion11422<T, L = LastOf11422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11422<TuplifyUnion11422<Exclude<T, L>>, L>;

type DeepPartial11422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11422<T[P]> }
  : T;

type Paths11422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11422<K, Paths11422<T[K], Prev11422[D]>> : never }[keyof T]
  : never;

type Prev11422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11422 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11422 = Paths11422<NestedConfig11422>;

interface HeavyProps11422 {
  config: DeepPartial11422<NestedConfig11422>;
  path?: ConfigPaths11422;
}

const HeavyComponent11422 = memo(function HeavyComponent11422({ config }: HeavyProps11422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11422.displayName = 'HeavyComponent11422';
export default HeavyComponent11422;

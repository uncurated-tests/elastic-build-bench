'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11097<T> = T extends (infer U)[]
  ? DeepReadonlyArray11097<U>
  : T extends object
  ? DeepReadonlyObject11097<T>
  : T;

interface DeepReadonlyArray11097<T> extends ReadonlyArray<DeepReadonly11097<T>> {}

type DeepReadonlyObject11097<T> = {
  readonly [P in keyof T]: DeepReadonly11097<T[P]>;
};

type UnionToIntersection11097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11097<T> = UnionToIntersection11097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11097<T extends unknown[], V> = [...T, V];

type TuplifyUnion11097<T, L = LastOf11097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11097<TuplifyUnion11097<Exclude<T, L>>, L>;

type DeepPartial11097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11097<T[P]> }
  : T;

type Paths11097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11097<K, Paths11097<T[K], Prev11097[D]>> : never }[keyof T]
  : never;

type Prev11097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11097 {
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

type ConfigPaths11097 = Paths11097<NestedConfig11097>;

interface HeavyProps11097 {
  config: DeepPartial11097<NestedConfig11097>;
  path?: ConfigPaths11097;
}

const HeavyComponent11097 = memo(function HeavyComponent11097({ config }: HeavyProps11097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11097.displayName = 'HeavyComponent11097';
export default HeavyComponent11097;

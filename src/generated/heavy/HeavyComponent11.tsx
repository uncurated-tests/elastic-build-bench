'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11<T> = T extends (infer U)[]
  ? DeepReadonlyArray11<U>
  : T extends object
  ? DeepReadonlyObject11<T>
  : T;

interface DeepReadonlyArray11<T> extends ReadonlyArray<DeepReadonly11<T>> {}

type DeepReadonlyObject11<T> = {
  readonly [P in keyof T]: DeepReadonly11<T[P]>;
};

type UnionToIntersection11<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11<T> = UnionToIntersection11<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11<T extends unknown[], V> = [...T, V];

type TuplifyUnion11<T, L = LastOf11<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11<TuplifyUnion11<Exclude<T, L>>, L>;

type DeepPartial11<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11<T[P]> }
  : T;

type Paths11<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11<K, Paths11<T[K], Prev11[D]>> : never }[keyof T]
  : never;

type Prev11 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11 {
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

type ConfigPaths11 = Paths11<NestedConfig11>;

interface HeavyProps11 {
  config: DeepPartial11<NestedConfig11>;
  path?: ConfigPaths11;
}

const HeavyComponent11 = memo(function HeavyComponent11({ config }: HeavyProps11) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11.displayName = 'HeavyComponent11';
export default HeavyComponent11;

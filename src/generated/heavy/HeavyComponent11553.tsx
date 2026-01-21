'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11553<T> = T extends (infer U)[]
  ? DeepReadonlyArray11553<U>
  : T extends object
  ? DeepReadonlyObject11553<T>
  : T;

interface DeepReadonlyArray11553<T> extends ReadonlyArray<DeepReadonly11553<T>> {}

type DeepReadonlyObject11553<T> = {
  readonly [P in keyof T]: DeepReadonly11553<T[P]>;
};

type UnionToIntersection11553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11553<T> = UnionToIntersection11553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11553<T extends unknown[], V> = [...T, V];

type TuplifyUnion11553<T, L = LastOf11553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11553<TuplifyUnion11553<Exclude<T, L>>, L>;

type DeepPartial11553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11553<T[P]> }
  : T;

type Paths11553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11553<K, Paths11553<T[K], Prev11553[D]>> : never }[keyof T]
  : never;

type Prev11553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11553 {
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

type ConfigPaths11553 = Paths11553<NestedConfig11553>;

interface HeavyProps11553 {
  config: DeepPartial11553<NestedConfig11553>;
  path?: ConfigPaths11553;
}

const HeavyComponent11553 = memo(function HeavyComponent11553({ config }: HeavyProps11553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11553.displayName = 'HeavyComponent11553';
export default HeavyComponent11553;

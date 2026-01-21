'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13957<T> = T extends (infer U)[]
  ? DeepReadonlyArray13957<U>
  : T extends object
  ? DeepReadonlyObject13957<T>
  : T;

interface DeepReadonlyArray13957<T> extends ReadonlyArray<DeepReadonly13957<T>> {}

type DeepReadonlyObject13957<T> = {
  readonly [P in keyof T]: DeepReadonly13957<T[P]>;
};

type UnionToIntersection13957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13957<T> = UnionToIntersection13957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13957<T extends unknown[], V> = [...T, V];

type TuplifyUnion13957<T, L = LastOf13957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13957<TuplifyUnion13957<Exclude<T, L>>, L>;

type DeepPartial13957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13957<T[P]> }
  : T;

type Paths13957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13957<K, Paths13957<T[K], Prev13957[D]>> : never }[keyof T]
  : never;

type Prev13957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13957 {
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

type ConfigPaths13957 = Paths13957<NestedConfig13957>;

interface HeavyProps13957 {
  config: DeepPartial13957<NestedConfig13957>;
  path?: ConfigPaths13957;
}

const HeavyComponent13957 = memo(function HeavyComponent13957({ config }: HeavyProps13957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13957.displayName = 'HeavyComponent13957';
export default HeavyComponent13957;

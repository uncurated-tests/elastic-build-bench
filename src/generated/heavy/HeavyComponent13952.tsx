'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13952<T> = T extends (infer U)[]
  ? DeepReadonlyArray13952<U>
  : T extends object
  ? DeepReadonlyObject13952<T>
  : T;

interface DeepReadonlyArray13952<T> extends ReadonlyArray<DeepReadonly13952<T>> {}

type DeepReadonlyObject13952<T> = {
  readonly [P in keyof T]: DeepReadonly13952<T[P]>;
};

type UnionToIntersection13952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13952<T> = UnionToIntersection13952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13952<T extends unknown[], V> = [...T, V];

type TuplifyUnion13952<T, L = LastOf13952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13952<TuplifyUnion13952<Exclude<T, L>>, L>;

type DeepPartial13952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13952<T[P]> }
  : T;

type Paths13952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13952<K, Paths13952<T[K], Prev13952[D]>> : never }[keyof T]
  : never;

type Prev13952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13952 {
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

type ConfigPaths13952 = Paths13952<NestedConfig13952>;

interface HeavyProps13952 {
  config: DeepPartial13952<NestedConfig13952>;
  path?: ConfigPaths13952;
}

const HeavyComponent13952 = memo(function HeavyComponent13952({ config }: HeavyProps13952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13952.displayName = 'HeavyComponent13952';
export default HeavyComponent13952;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13913<T> = T extends (infer U)[]
  ? DeepReadonlyArray13913<U>
  : T extends object
  ? DeepReadonlyObject13913<T>
  : T;

interface DeepReadonlyArray13913<T> extends ReadonlyArray<DeepReadonly13913<T>> {}

type DeepReadonlyObject13913<T> = {
  readonly [P in keyof T]: DeepReadonly13913<T[P]>;
};

type UnionToIntersection13913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13913<T> = UnionToIntersection13913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13913<T extends unknown[], V> = [...T, V];

type TuplifyUnion13913<T, L = LastOf13913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13913<TuplifyUnion13913<Exclude<T, L>>, L>;

type DeepPartial13913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13913<T[P]> }
  : T;

type Paths13913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13913<K, Paths13913<T[K], Prev13913[D]>> : never }[keyof T]
  : never;

type Prev13913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13913 {
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

type ConfigPaths13913 = Paths13913<NestedConfig13913>;

interface HeavyProps13913 {
  config: DeepPartial13913<NestedConfig13913>;
  path?: ConfigPaths13913;
}

const HeavyComponent13913 = memo(function HeavyComponent13913({ config }: HeavyProps13913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13913.displayName = 'HeavyComponent13913';
export default HeavyComponent13913;

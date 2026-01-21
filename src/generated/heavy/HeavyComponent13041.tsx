'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13041<T> = T extends (infer U)[]
  ? DeepReadonlyArray13041<U>
  : T extends object
  ? DeepReadonlyObject13041<T>
  : T;

interface DeepReadonlyArray13041<T> extends ReadonlyArray<DeepReadonly13041<T>> {}

type DeepReadonlyObject13041<T> = {
  readonly [P in keyof T]: DeepReadonly13041<T[P]>;
};

type UnionToIntersection13041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13041<T> = UnionToIntersection13041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13041<T extends unknown[], V> = [...T, V];

type TuplifyUnion13041<T, L = LastOf13041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13041<TuplifyUnion13041<Exclude<T, L>>, L>;

type DeepPartial13041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13041<T[P]> }
  : T;

type Paths13041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13041<K, Paths13041<T[K], Prev13041[D]>> : never }[keyof T]
  : never;

type Prev13041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13041 {
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

type ConfigPaths13041 = Paths13041<NestedConfig13041>;

interface HeavyProps13041 {
  config: DeepPartial13041<NestedConfig13041>;
  path?: ConfigPaths13041;
}

const HeavyComponent13041 = memo(function HeavyComponent13041({ config }: HeavyProps13041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13041.displayName = 'HeavyComponent13041';
export default HeavyComponent13041;

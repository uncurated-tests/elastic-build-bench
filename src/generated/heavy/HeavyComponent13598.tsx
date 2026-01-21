'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13598<T> = T extends (infer U)[]
  ? DeepReadonlyArray13598<U>
  : T extends object
  ? DeepReadonlyObject13598<T>
  : T;

interface DeepReadonlyArray13598<T> extends ReadonlyArray<DeepReadonly13598<T>> {}

type DeepReadonlyObject13598<T> = {
  readonly [P in keyof T]: DeepReadonly13598<T[P]>;
};

type UnionToIntersection13598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13598<T> = UnionToIntersection13598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13598<T extends unknown[], V> = [...T, V];

type TuplifyUnion13598<T, L = LastOf13598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13598<TuplifyUnion13598<Exclude<T, L>>, L>;

type DeepPartial13598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13598<T[P]> }
  : T;

type Paths13598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13598<K, Paths13598<T[K], Prev13598[D]>> : never }[keyof T]
  : never;

type Prev13598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13598 {
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

type ConfigPaths13598 = Paths13598<NestedConfig13598>;

interface HeavyProps13598 {
  config: DeepPartial13598<NestedConfig13598>;
  path?: ConfigPaths13598;
}

const HeavyComponent13598 = memo(function HeavyComponent13598({ config }: HeavyProps13598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13598.displayName = 'HeavyComponent13598';
export default HeavyComponent13598;

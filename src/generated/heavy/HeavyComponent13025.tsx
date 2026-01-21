'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13025<T> = T extends (infer U)[]
  ? DeepReadonlyArray13025<U>
  : T extends object
  ? DeepReadonlyObject13025<T>
  : T;

interface DeepReadonlyArray13025<T> extends ReadonlyArray<DeepReadonly13025<T>> {}

type DeepReadonlyObject13025<T> = {
  readonly [P in keyof T]: DeepReadonly13025<T[P]>;
};

type UnionToIntersection13025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13025<T> = UnionToIntersection13025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13025<T extends unknown[], V> = [...T, V];

type TuplifyUnion13025<T, L = LastOf13025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13025<TuplifyUnion13025<Exclude<T, L>>, L>;

type DeepPartial13025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13025<T[P]> }
  : T;

type Paths13025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13025<K, Paths13025<T[K], Prev13025[D]>> : never }[keyof T]
  : never;

type Prev13025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13025 {
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

type ConfigPaths13025 = Paths13025<NestedConfig13025>;

interface HeavyProps13025 {
  config: DeepPartial13025<NestedConfig13025>;
  path?: ConfigPaths13025;
}

const HeavyComponent13025 = memo(function HeavyComponent13025({ config }: HeavyProps13025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13025.displayName = 'HeavyComponent13025';
export default HeavyComponent13025;

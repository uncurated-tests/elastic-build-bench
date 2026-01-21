'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13330<T> = T extends (infer U)[]
  ? DeepReadonlyArray13330<U>
  : T extends object
  ? DeepReadonlyObject13330<T>
  : T;

interface DeepReadonlyArray13330<T> extends ReadonlyArray<DeepReadonly13330<T>> {}

type DeepReadonlyObject13330<T> = {
  readonly [P in keyof T]: DeepReadonly13330<T[P]>;
};

type UnionToIntersection13330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13330<T> = UnionToIntersection13330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13330<T extends unknown[], V> = [...T, V];

type TuplifyUnion13330<T, L = LastOf13330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13330<TuplifyUnion13330<Exclude<T, L>>, L>;

type DeepPartial13330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13330<T[P]> }
  : T;

type Paths13330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13330<K, Paths13330<T[K], Prev13330[D]>> : never }[keyof T]
  : never;

type Prev13330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13330 {
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

type ConfigPaths13330 = Paths13330<NestedConfig13330>;

interface HeavyProps13330 {
  config: DeepPartial13330<NestedConfig13330>;
  path?: ConfigPaths13330;
}

const HeavyComponent13330 = memo(function HeavyComponent13330({ config }: HeavyProps13330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13330.displayName = 'HeavyComponent13330';
export default HeavyComponent13330;

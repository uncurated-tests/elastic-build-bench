'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13880<T> = T extends (infer U)[]
  ? DeepReadonlyArray13880<U>
  : T extends object
  ? DeepReadonlyObject13880<T>
  : T;

interface DeepReadonlyArray13880<T> extends ReadonlyArray<DeepReadonly13880<T>> {}

type DeepReadonlyObject13880<T> = {
  readonly [P in keyof T]: DeepReadonly13880<T[P]>;
};

type UnionToIntersection13880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13880<T> = UnionToIntersection13880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13880<T extends unknown[], V> = [...T, V];

type TuplifyUnion13880<T, L = LastOf13880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13880<TuplifyUnion13880<Exclude<T, L>>, L>;

type DeepPartial13880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13880<T[P]> }
  : T;

type Paths13880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13880<K, Paths13880<T[K], Prev13880[D]>> : never }[keyof T]
  : never;

type Prev13880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13880 {
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

type ConfigPaths13880 = Paths13880<NestedConfig13880>;

interface HeavyProps13880 {
  config: DeepPartial13880<NestedConfig13880>;
  path?: ConfigPaths13880;
}

const HeavyComponent13880 = memo(function HeavyComponent13880({ config }: HeavyProps13880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13880.displayName = 'HeavyComponent13880';
export default HeavyComponent13880;

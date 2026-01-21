'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13893<T> = T extends (infer U)[]
  ? DeepReadonlyArray13893<U>
  : T extends object
  ? DeepReadonlyObject13893<T>
  : T;

interface DeepReadonlyArray13893<T> extends ReadonlyArray<DeepReadonly13893<T>> {}

type DeepReadonlyObject13893<T> = {
  readonly [P in keyof T]: DeepReadonly13893<T[P]>;
};

type UnionToIntersection13893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13893<T> = UnionToIntersection13893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13893<T extends unknown[], V> = [...T, V];

type TuplifyUnion13893<T, L = LastOf13893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13893<TuplifyUnion13893<Exclude<T, L>>, L>;

type DeepPartial13893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13893<T[P]> }
  : T;

type Paths13893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13893<K, Paths13893<T[K], Prev13893[D]>> : never }[keyof T]
  : never;

type Prev13893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13893 {
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

type ConfigPaths13893 = Paths13893<NestedConfig13893>;

interface HeavyProps13893 {
  config: DeepPartial13893<NestedConfig13893>;
  path?: ConfigPaths13893;
}

const HeavyComponent13893 = memo(function HeavyComponent13893({ config }: HeavyProps13893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13893.displayName = 'HeavyComponent13893';
export default HeavyComponent13893;

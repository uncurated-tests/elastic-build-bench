'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13058<T> = T extends (infer U)[]
  ? DeepReadonlyArray13058<U>
  : T extends object
  ? DeepReadonlyObject13058<T>
  : T;

interface DeepReadonlyArray13058<T> extends ReadonlyArray<DeepReadonly13058<T>> {}

type DeepReadonlyObject13058<T> = {
  readonly [P in keyof T]: DeepReadonly13058<T[P]>;
};

type UnionToIntersection13058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13058<T> = UnionToIntersection13058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13058<T extends unknown[], V> = [...T, V];

type TuplifyUnion13058<T, L = LastOf13058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13058<TuplifyUnion13058<Exclude<T, L>>, L>;

type DeepPartial13058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13058<T[P]> }
  : T;

type Paths13058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13058<K, Paths13058<T[K], Prev13058[D]>> : never }[keyof T]
  : never;

type Prev13058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13058 {
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

type ConfigPaths13058 = Paths13058<NestedConfig13058>;

interface HeavyProps13058 {
  config: DeepPartial13058<NestedConfig13058>;
  path?: ConfigPaths13058;
}

const HeavyComponent13058 = memo(function HeavyComponent13058({ config }: HeavyProps13058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13058.displayName = 'HeavyComponent13058';
export default HeavyComponent13058;

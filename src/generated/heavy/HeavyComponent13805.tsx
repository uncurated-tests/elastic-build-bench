'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13805<T> = T extends (infer U)[]
  ? DeepReadonlyArray13805<U>
  : T extends object
  ? DeepReadonlyObject13805<T>
  : T;

interface DeepReadonlyArray13805<T> extends ReadonlyArray<DeepReadonly13805<T>> {}

type DeepReadonlyObject13805<T> = {
  readonly [P in keyof T]: DeepReadonly13805<T[P]>;
};

type UnionToIntersection13805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13805<T> = UnionToIntersection13805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13805<T extends unknown[], V> = [...T, V];

type TuplifyUnion13805<T, L = LastOf13805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13805<TuplifyUnion13805<Exclude<T, L>>, L>;

type DeepPartial13805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13805<T[P]> }
  : T;

type Paths13805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13805<K, Paths13805<T[K], Prev13805[D]>> : never }[keyof T]
  : never;

type Prev13805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13805 {
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

type ConfigPaths13805 = Paths13805<NestedConfig13805>;

interface HeavyProps13805 {
  config: DeepPartial13805<NestedConfig13805>;
  path?: ConfigPaths13805;
}

const HeavyComponent13805 = memo(function HeavyComponent13805({ config }: HeavyProps13805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13805.displayName = 'HeavyComponent13805';
export default HeavyComponent13805;

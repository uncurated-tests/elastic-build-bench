'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly952<T> = T extends (infer U)[]
  ? DeepReadonlyArray952<U>
  : T extends object
  ? DeepReadonlyObject952<T>
  : T;

interface DeepReadonlyArray952<T> extends ReadonlyArray<DeepReadonly952<T>> {}

type DeepReadonlyObject952<T> = {
  readonly [P in keyof T]: DeepReadonly952<T[P]>;
};

type UnionToIntersection952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf952<T> = UnionToIntersection952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push952<T extends unknown[], V> = [...T, V];

type TuplifyUnion952<T, L = LastOf952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push952<TuplifyUnion952<Exclude<T, L>>, L>;

type DeepPartial952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial952<T[P]> }
  : T;

type Paths952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join952<K, Paths952<T[K], Prev952[D]>> : never }[keyof T]
  : never;

type Prev952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig952 {
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

type ConfigPaths952 = Paths952<NestedConfig952>;

interface HeavyProps952 {
  config: DeepPartial952<NestedConfig952>;
  path?: ConfigPaths952;
}

const HeavyComponent952 = memo(function HeavyComponent952({ config }: HeavyProps952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent952.displayName = 'HeavyComponent952';
export default HeavyComponent952;

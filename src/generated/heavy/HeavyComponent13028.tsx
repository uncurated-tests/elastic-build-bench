'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13028<T> = T extends (infer U)[]
  ? DeepReadonlyArray13028<U>
  : T extends object
  ? DeepReadonlyObject13028<T>
  : T;

interface DeepReadonlyArray13028<T> extends ReadonlyArray<DeepReadonly13028<T>> {}

type DeepReadonlyObject13028<T> = {
  readonly [P in keyof T]: DeepReadonly13028<T[P]>;
};

type UnionToIntersection13028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13028<T> = UnionToIntersection13028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13028<T extends unknown[], V> = [...T, V];

type TuplifyUnion13028<T, L = LastOf13028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13028<TuplifyUnion13028<Exclude<T, L>>, L>;

type DeepPartial13028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13028<T[P]> }
  : T;

type Paths13028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13028<K, Paths13028<T[K], Prev13028[D]>> : never }[keyof T]
  : never;

type Prev13028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13028 {
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

type ConfigPaths13028 = Paths13028<NestedConfig13028>;

interface HeavyProps13028 {
  config: DeepPartial13028<NestedConfig13028>;
  path?: ConfigPaths13028;
}

const HeavyComponent13028 = memo(function HeavyComponent13028({ config }: HeavyProps13028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13028.displayName = 'HeavyComponent13028';
export default HeavyComponent13028;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13729<T> = T extends (infer U)[]
  ? DeepReadonlyArray13729<U>
  : T extends object
  ? DeepReadonlyObject13729<T>
  : T;

interface DeepReadonlyArray13729<T> extends ReadonlyArray<DeepReadonly13729<T>> {}

type DeepReadonlyObject13729<T> = {
  readonly [P in keyof T]: DeepReadonly13729<T[P]>;
};

type UnionToIntersection13729<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13729<T> = UnionToIntersection13729<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13729<T extends unknown[], V> = [...T, V];

type TuplifyUnion13729<T, L = LastOf13729<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13729<TuplifyUnion13729<Exclude<T, L>>, L>;

type DeepPartial13729<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13729<T[P]> }
  : T;

type Paths13729<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13729<K, Paths13729<T[K], Prev13729[D]>> : never }[keyof T]
  : never;

type Prev13729 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13729<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13729 {
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

type ConfigPaths13729 = Paths13729<NestedConfig13729>;

interface HeavyProps13729 {
  config: DeepPartial13729<NestedConfig13729>;
  path?: ConfigPaths13729;
}

const HeavyComponent13729 = memo(function HeavyComponent13729({ config }: HeavyProps13729) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13729) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13729 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13729: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13729.displayName = 'HeavyComponent13729';
export default HeavyComponent13729;

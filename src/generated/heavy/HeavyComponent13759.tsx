'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13759<T> = T extends (infer U)[]
  ? DeepReadonlyArray13759<U>
  : T extends object
  ? DeepReadonlyObject13759<T>
  : T;

interface DeepReadonlyArray13759<T> extends ReadonlyArray<DeepReadonly13759<T>> {}

type DeepReadonlyObject13759<T> = {
  readonly [P in keyof T]: DeepReadonly13759<T[P]>;
};

type UnionToIntersection13759<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13759<T> = UnionToIntersection13759<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13759<T extends unknown[], V> = [...T, V];

type TuplifyUnion13759<T, L = LastOf13759<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13759<TuplifyUnion13759<Exclude<T, L>>, L>;

type DeepPartial13759<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13759<T[P]> }
  : T;

type Paths13759<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13759<K, Paths13759<T[K], Prev13759[D]>> : never }[keyof T]
  : never;

type Prev13759 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13759<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13759 {
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

type ConfigPaths13759 = Paths13759<NestedConfig13759>;

interface HeavyProps13759 {
  config: DeepPartial13759<NestedConfig13759>;
  path?: ConfigPaths13759;
}

const HeavyComponent13759 = memo(function HeavyComponent13759({ config }: HeavyProps13759) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13759) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13759 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13759: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13759.displayName = 'HeavyComponent13759';
export default HeavyComponent13759;

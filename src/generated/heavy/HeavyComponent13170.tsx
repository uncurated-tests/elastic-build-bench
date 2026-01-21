'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13170<T> = T extends (infer U)[]
  ? DeepReadonlyArray13170<U>
  : T extends object
  ? DeepReadonlyObject13170<T>
  : T;

interface DeepReadonlyArray13170<T> extends ReadonlyArray<DeepReadonly13170<T>> {}

type DeepReadonlyObject13170<T> = {
  readonly [P in keyof T]: DeepReadonly13170<T[P]>;
};

type UnionToIntersection13170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13170<T> = UnionToIntersection13170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13170<T extends unknown[], V> = [...T, V];

type TuplifyUnion13170<T, L = LastOf13170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13170<TuplifyUnion13170<Exclude<T, L>>, L>;

type DeepPartial13170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13170<T[P]> }
  : T;

type Paths13170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13170<K, Paths13170<T[K], Prev13170[D]>> : never }[keyof T]
  : never;

type Prev13170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13170 {
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

type ConfigPaths13170 = Paths13170<NestedConfig13170>;

interface HeavyProps13170 {
  config: DeepPartial13170<NestedConfig13170>;
  path?: ConfigPaths13170;
}

const HeavyComponent13170 = memo(function HeavyComponent13170({ config }: HeavyProps13170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13170.displayName = 'HeavyComponent13170';
export default HeavyComponent13170;

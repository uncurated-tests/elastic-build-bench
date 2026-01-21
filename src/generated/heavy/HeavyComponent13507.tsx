'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13507<T> = T extends (infer U)[]
  ? DeepReadonlyArray13507<U>
  : T extends object
  ? DeepReadonlyObject13507<T>
  : T;

interface DeepReadonlyArray13507<T> extends ReadonlyArray<DeepReadonly13507<T>> {}

type DeepReadonlyObject13507<T> = {
  readonly [P in keyof T]: DeepReadonly13507<T[P]>;
};

type UnionToIntersection13507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13507<T> = UnionToIntersection13507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13507<T extends unknown[], V> = [...T, V];

type TuplifyUnion13507<T, L = LastOf13507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13507<TuplifyUnion13507<Exclude<T, L>>, L>;

type DeepPartial13507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13507<T[P]> }
  : T;

type Paths13507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13507<K, Paths13507<T[K], Prev13507[D]>> : never }[keyof T]
  : never;

type Prev13507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13507 {
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

type ConfigPaths13507 = Paths13507<NestedConfig13507>;

interface HeavyProps13507 {
  config: DeepPartial13507<NestedConfig13507>;
  path?: ConfigPaths13507;
}

const HeavyComponent13507 = memo(function HeavyComponent13507({ config }: HeavyProps13507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13507.displayName = 'HeavyComponent13507';
export default HeavyComponent13507;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13638<T> = T extends (infer U)[]
  ? DeepReadonlyArray13638<U>
  : T extends object
  ? DeepReadonlyObject13638<T>
  : T;

interface DeepReadonlyArray13638<T> extends ReadonlyArray<DeepReadonly13638<T>> {}

type DeepReadonlyObject13638<T> = {
  readonly [P in keyof T]: DeepReadonly13638<T[P]>;
};

type UnionToIntersection13638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13638<T> = UnionToIntersection13638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13638<T extends unknown[], V> = [...T, V];

type TuplifyUnion13638<T, L = LastOf13638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13638<TuplifyUnion13638<Exclude<T, L>>, L>;

type DeepPartial13638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13638<T[P]> }
  : T;

type Paths13638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13638<K, Paths13638<T[K], Prev13638[D]>> : never }[keyof T]
  : never;

type Prev13638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13638 {
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

type ConfigPaths13638 = Paths13638<NestedConfig13638>;

interface HeavyProps13638 {
  config: DeepPartial13638<NestedConfig13638>;
  path?: ConfigPaths13638;
}

const HeavyComponent13638 = memo(function HeavyComponent13638({ config }: HeavyProps13638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13638.displayName = 'HeavyComponent13638';
export default HeavyComponent13638;

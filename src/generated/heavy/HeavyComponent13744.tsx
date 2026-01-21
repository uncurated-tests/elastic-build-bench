'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13744<T> = T extends (infer U)[]
  ? DeepReadonlyArray13744<U>
  : T extends object
  ? DeepReadonlyObject13744<T>
  : T;

interface DeepReadonlyArray13744<T> extends ReadonlyArray<DeepReadonly13744<T>> {}

type DeepReadonlyObject13744<T> = {
  readonly [P in keyof T]: DeepReadonly13744<T[P]>;
};

type UnionToIntersection13744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13744<T> = UnionToIntersection13744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13744<T extends unknown[], V> = [...T, V];

type TuplifyUnion13744<T, L = LastOf13744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13744<TuplifyUnion13744<Exclude<T, L>>, L>;

type DeepPartial13744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13744<T[P]> }
  : T;

type Paths13744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13744<K, Paths13744<T[K], Prev13744[D]>> : never }[keyof T]
  : never;

type Prev13744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13744 {
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

type ConfigPaths13744 = Paths13744<NestedConfig13744>;

interface HeavyProps13744 {
  config: DeepPartial13744<NestedConfig13744>;
  path?: ConfigPaths13744;
}

const HeavyComponent13744 = memo(function HeavyComponent13744({ config }: HeavyProps13744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13744.displayName = 'HeavyComponent13744';
export default HeavyComponent13744;

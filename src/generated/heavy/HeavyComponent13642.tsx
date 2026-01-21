'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13642<T> = T extends (infer U)[]
  ? DeepReadonlyArray13642<U>
  : T extends object
  ? DeepReadonlyObject13642<T>
  : T;

interface DeepReadonlyArray13642<T> extends ReadonlyArray<DeepReadonly13642<T>> {}

type DeepReadonlyObject13642<T> = {
  readonly [P in keyof T]: DeepReadonly13642<T[P]>;
};

type UnionToIntersection13642<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13642<T> = UnionToIntersection13642<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13642<T extends unknown[], V> = [...T, V];

type TuplifyUnion13642<T, L = LastOf13642<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13642<TuplifyUnion13642<Exclude<T, L>>, L>;

type DeepPartial13642<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13642<T[P]> }
  : T;

type Paths13642<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13642<K, Paths13642<T[K], Prev13642[D]>> : never }[keyof T]
  : never;

type Prev13642 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13642<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13642 {
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

type ConfigPaths13642 = Paths13642<NestedConfig13642>;

interface HeavyProps13642 {
  config: DeepPartial13642<NestedConfig13642>;
  path?: ConfigPaths13642;
}

const HeavyComponent13642 = memo(function HeavyComponent13642({ config }: HeavyProps13642) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13642) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13642 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13642: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13642.displayName = 'HeavyComponent13642';
export default HeavyComponent13642;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13914<T> = T extends (infer U)[]
  ? DeepReadonlyArray13914<U>
  : T extends object
  ? DeepReadonlyObject13914<T>
  : T;

interface DeepReadonlyArray13914<T> extends ReadonlyArray<DeepReadonly13914<T>> {}

type DeepReadonlyObject13914<T> = {
  readonly [P in keyof T]: DeepReadonly13914<T[P]>;
};

type UnionToIntersection13914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13914<T> = UnionToIntersection13914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13914<T extends unknown[], V> = [...T, V];

type TuplifyUnion13914<T, L = LastOf13914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13914<TuplifyUnion13914<Exclude<T, L>>, L>;

type DeepPartial13914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13914<T[P]> }
  : T;

type Paths13914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13914<K, Paths13914<T[K], Prev13914[D]>> : never }[keyof T]
  : never;

type Prev13914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13914 {
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

type ConfigPaths13914 = Paths13914<NestedConfig13914>;

interface HeavyProps13914 {
  config: DeepPartial13914<NestedConfig13914>;
  path?: ConfigPaths13914;
}

const HeavyComponent13914 = memo(function HeavyComponent13914({ config }: HeavyProps13914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13914.displayName = 'HeavyComponent13914';
export default HeavyComponent13914;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13644<T> = T extends (infer U)[]
  ? DeepReadonlyArray13644<U>
  : T extends object
  ? DeepReadonlyObject13644<T>
  : T;

interface DeepReadonlyArray13644<T> extends ReadonlyArray<DeepReadonly13644<T>> {}

type DeepReadonlyObject13644<T> = {
  readonly [P in keyof T]: DeepReadonly13644<T[P]>;
};

type UnionToIntersection13644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13644<T> = UnionToIntersection13644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13644<T extends unknown[], V> = [...T, V];

type TuplifyUnion13644<T, L = LastOf13644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13644<TuplifyUnion13644<Exclude<T, L>>, L>;

type DeepPartial13644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13644<T[P]> }
  : T;

type Paths13644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13644<K, Paths13644<T[K], Prev13644[D]>> : never }[keyof T]
  : never;

type Prev13644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13644 {
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

type ConfigPaths13644 = Paths13644<NestedConfig13644>;

interface HeavyProps13644 {
  config: DeepPartial13644<NestedConfig13644>;
  path?: ConfigPaths13644;
}

const HeavyComponent13644 = memo(function HeavyComponent13644({ config }: HeavyProps13644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13644.displayName = 'HeavyComponent13644';
export default HeavyComponent13644;

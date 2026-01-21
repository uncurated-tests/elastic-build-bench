'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13806<T> = T extends (infer U)[]
  ? DeepReadonlyArray13806<U>
  : T extends object
  ? DeepReadonlyObject13806<T>
  : T;

interface DeepReadonlyArray13806<T> extends ReadonlyArray<DeepReadonly13806<T>> {}

type DeepReadonlyObject13806<T> = {
  readonly [P in keyof T]: DeepReadonly13806<T[P]>;
};

type UnionToIntersection13806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13806<T> = UnionToIntersection13806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13806<T extends unknown[], V> = [...T, V];

type TuplifyUnion13806<T, L = LastOf13806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13806<TuplifyUnion13806<Exclude<T, L>>, L>;

type DeepPartial13806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13806<T[P]> }
  : T;

type Paths13806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13806<K, Paths13806<T[K], Prev13806[D]>> : never }[keyof T]
  : never;

type Prev13806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13806 {
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

type ConfigPaths13806 = Paths13806<NestedConfig13806>;

interface HeavyProps13806 {
  config: DeepPartial13806<NestedConfig13806>;
  path?: ConfigPaths13806;
}

const HeavyComponent13806 = memo(function HeavyComponent13806({ config }: HeavyProps13806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13806.displayName = 'HeavyComponent13806';
export default HeavyComponent13806;

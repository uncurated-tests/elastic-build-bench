'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10058<T> = T extends (infer U)[]
  ? DeepReadonlyArray10058<U>
  : T extends object
  ? DeepReadonlyObject10058<T>
  : T;

interface DeepReadonlyArray10058<T> extends ReadonlyArray<DeepReadonly10058<T>> {}

type DeepReadonlyObject10058<T> = {
  readonly [P in keyof T]: DeepReadonly10058<T[P]>;
};

type UnionToIntersection10058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10058<T> = UnionToIntersection10058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10058<T extends unknown[], V> = [...T, V];

type TuplifyUnion10058<T, L = LastOf10058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10058<TuplifyUnion10058<Exclude<T, L>>, L>;

type DeepPartial10058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10058<T[P]> }
  : T;

type Paths10058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10058<K, Paths10058<T[K], Prev10058[D]>> : never }[keyof T]
  : never;

type Prev10058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10058 {
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

type ConfigPaths10058 = Paths10058<NestedConfig10058>;

interface HeavyProps10058 {
  config: DeepPartial10058<NestedConfig10058>;
  path?: ConfigPaths10058;
}

const HeavyComponent10058 = memo(function HeavyComponent10058({ config }: HeavyProps10058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10058.displayName = 'HeavyComponent10058';
export default HeavyComponent10058;

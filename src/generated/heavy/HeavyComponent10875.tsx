'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10875<T> = T extends (infer U)[]
  ? DeepReadonlyArray10875<U>
  : T extends object
  ? DeepReadonlyObject10875<T>
  : T;

interface DeepReadonlyArray10875<T> extends ReadonlyArray<DeepReadonly10875<T>> {}

type DeepReadonlyObject10875<T> = {
  readonly [P in keyof T]: DeepReadonly10875<T[P]>;
};

type UnionToIntersection10875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10875<T> = UnionToIntersection10875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10875<T extends unknown[], V> = [...T, V];

type TuplifyUnion10875<T, L = LastOf10875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10875<TuplifyUnion10875<Exclude<T, L>>, L>;

type DeepPartial10875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10875<T[P]> }
  : T;

type Paths10875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10875<K, Paths10875<T[K], Prev10875[D]>> : never }[keyof T]
  : never;

type Prev10875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10875 {
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

type ConfigPaths10875 = Paths10875<NestedConfig10875>;

interface HeavyProps10875 {
  config: DeepPartial10875<NestedConfig10875>;
  path?: ConfigPaths10875;
}

const HeavyComponent10875 = memo(function HeavyComponent10875({ config }: HeavyProps10875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10875.displayName = 'HeavyComponent10875';
export default HeavyComponent10875;

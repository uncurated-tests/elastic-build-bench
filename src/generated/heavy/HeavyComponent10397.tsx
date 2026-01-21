'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10397<T> = T extends (infer U)[]
  ? DeepReadonlyArray10397<U>
  : T extends object
  ? DeepReadonlyObject10397<T>
  : T;

interface DeepReadonlyArray10397<T> extends ReadonlyArray<DeepReadonly10397<T>> {}

type DeepReadonlyObject10397<T> = {
  readonly [P in keyof T]: DeepReadonly10397<T[P]>;
};

type UnionToIntersection10397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10397<T> = UnionToIntersection10397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10397<T extends unknown[], V> = [...T, V];

type TuplifyUnion10397<T, L = LastOf10397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10397<TuplifyUnion10397<Exclude<T, L>>, L>;

type DeepPartial10397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10397<T[P]> }
  : T;

type Paths10397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10397<K, Paths10397<T[K], Prev10397[D]>> : never }[keyof T]
  : never;

type Prev10397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10397 {
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

type ConfigPaths10397 = Paths10397<NestedConfig10397>;

interface HeavyProps10397 {
  config: DeepPartial10397<NestedConfig10397>;
  path?: ConfigPaths10397;
}

const HeavyComponent10397 = memo(function HeavyComponent10397({ config }: HeavyProps10397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10397.displayName = 'HeavyComponent10397';
export default HeavyComponent10397;

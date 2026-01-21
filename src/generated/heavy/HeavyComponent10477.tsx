'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10477<T> = T extends (infer U)[]
  ? DeepReadonlyArray10477<U>
  : T extends object
  ? DeepReadonlyObject10477<T>
  : T;

interface DeepReadonlyArray10477<T> extends ReadonlyArray<DeepReadonly10477<T>> {}

type DeepReadonlyObject10477<T> = {
  readonly [P in keyof T]: DeepReadonly10477<T[P]>;
};

type UnionToIntersection10477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10477<T> = UnionToIntersection10477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10477<T extends unknown[], V> = [...T, V];

type TuplifyUnion10477<T, L = LastOf10477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10477<TuplifyUnion10477<Exclude<T, L>>, L>;

type DeepPartial10477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10477<T[P]> }
  : T;

type Paths10477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10477<K, Paths10477<T[K], Prev10477[D]>> : never }[keyof T]
  : never;

type Prev10477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10477 {
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

type ConfigPaths10477 = Paths10477<NestedConfig10477>;

interface HeavyProps10477 {
  config: DeepPartial10477<NestedConfig10477>;
  path?: ConfigPaths10477;
}

const HeavyComponent10477 = memo(function HeavyComponent10477({ config }: HeavyProps10477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10477.displayName = 'HeavyComponent10477';
export default HeavyComponent10477;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10752<T> = T extends (infer U)[]
  ? DeepReadonlyArray10752<U>
  : T extends object
  ? DeepReadonlyObject10752<T>
  : T;

interface DeepReadonlyArray10752<T> extends ReadonlyArray<DeepReadonly10752<T>> {}

type DeepReadonlyObject10752<T> = {
  readonly [P in keyof T]: DeepReadonly10752<T[P]>;
};

type UnionToIntersection10752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10752<T> = UnionToIntersection10752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10752<T extends unknown[], V> = [...T, V];

type TuplifyUnion10752<T, L = LastOf10752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10752<TuplifyUnion10752<Exclude<T, L>>, L>;

type DeepPartial10752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10752<T[P]> }
  : T;

type Paths10752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10752<K, Paths10752<T[K], Prev10752[D]>> : never }[keyof T]
  : never;

type Prev10752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10752 {
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

type ConfigPaths10752 = Paths10752<NestedConfig10752>;

interface HeavyProps10752 {
  config: DeepPartial10752<NestedConfig10752>;
  path?: ConfigPaths10752;
}

const HeavyComponent10752 = memo(function HeavyComponent10752({ config }: HeavyProps10752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10752.displayName = 'HeavyComponent10752';
export default HeavyComponent10752;

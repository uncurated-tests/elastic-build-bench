'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10595<T> = T extends (infer U)[]
  ? DeepReadonlyArray10595<U>
  : T extends object
  ? DeepReadonlyObject10595<T>
  : T;

interface DeepReadonlyArray10595<T> extends ReadonlyArray<DeepReadonly10595<T>> {}

type DeepReadonlyObject10595<T> = {
  readonly [P in keyof T]: DeepReadonly10595<T[P]>;
};

type UnionToIntersection10595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10595<T> = UnionToIntersection10595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10595<T extends unknown[], V> = [...T, V];

type TuplifyUnion10595<T, L = LastOf10595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10595<TuplifyUnion10595<Exclude<T, L>>, L>;

type DeepPartial10595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10595<T[P]> }
  : T;

type Paths10595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10595<K, Paths10595<T[K], Prev10595[D]>> : never }[keyof T]
  : never;

type Prev10595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10595 {
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

type ConfigPaths10595 = Paths10595<NestedConfig10595>;

interface HeavyProps10595 {
  config: DeepPartial10595<NestedConfig10595>;
  path?: ConfigPaths10595;
}

const HeavyComponent10595 = memo(function HeavyComponent10595({ config }: HeavyProps10595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10595.displayName = 'HeavyComponent10595';
export default HeavyComponent10595;

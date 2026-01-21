'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10596<T> = T extends (infer U)[]
  ? DeepReadonlyArray10596<U>
  : T extends object
  ? DeepReadonlyObject10596<T>
  : T;

interface DeepReadonlyArray10596<T> extends ReadonlyArray<DeepReadonly10596<T>> {}

type DeepReadonlyObject10596<T> = {
  readonly [P in keyof T]: DeepReadonly10596<T[P]>;
};

type UnionToIntersection10596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10596<T> = UnionToIntersection10596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10596<T extends unknown[], V> = [...T, V];

type TuplifyUnion10596<T, L = LastOf10596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10596<TuplifyUnion10596<Exclude<T, L>>, L>;

type DeepPartial10596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10596<T[P]> }
  : T;

type Paths10596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10596<K, Paths10596<T[K], Prev10596[D]>> : never }[keyof T]
  : never;

type Prev10596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10596 {
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

type ConfigPaths10596 = Paths10596<NestedConfig10596>;

interface HeavyProps10596 {
  config: DeepPartial10596<NestedConfig10596>;
  path?: ConfigPaths10596;
}

const HeavyComponent10596 = memo(function HeavyComponent10596({ config }: HeavyProps10596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10596.displayName = 'HeavyComponent10596';
export default HeavyComponent10596;

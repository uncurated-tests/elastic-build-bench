'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10273<T> = T extends (infer U)[]
  ? DeepReadonlyArray10273<U>
  : T extends object
  ? DeepReadonlyObject10273<T>
  : T;

interface DeepReadonlyArray10273<T> extends ReadonlyArray<DeepReadonly10273<T>> {}

type DeepReadonlyObject10273<T> = {
  readonly [P in keyof T]: DeepReadonly10273<T[P]>;
};

type UnionToIntersection10273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10273<T> = UnionToIntersection10273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10273<T extends unknown[], V> = [...T, V];

type TuplifyUnion10273<T, L = LastOf10273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10273<TuplifyUnion10273<Exclude<T, L>>, L>;

type DeepPartial10273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10273<T[P]> }
  : T;

type Paths10273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10273<K, Paths10273<T[K], Prev10273[D]>> : never }[keyof T]
  : never;

type Prev10273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10273 {
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

type ConfigPaths10273 = Paths10273<NestedConfig10273>;

interface HeavyProps10273 {
  config: DeepPartial10273<NestedConfig10273>;
  path?: ConfigPaths10273;
}

const HeavyComponent10273 = memo(function HeavyComponent10273({ config }: HeavyProps10273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10273.displayName = 'HeavyComponent10273';
export default HeavyComponent10273;

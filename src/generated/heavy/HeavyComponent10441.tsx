'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10441<T> = T extends (infer U)[]
  ? DeepReadonlyArray10441<U>
  : T extends object
  ? DeepReadonlyObject10441<T>
  : T;

interface DeepReadonlyArray10441<T> extends ReadonlyArray<DeepReadonly10441<T>> {}

type DeepReadonlyObject10441<T> = {
  readonly [P in keyof T]: DeepReadonly10441<T[P]>;
};

type UnionToIntersection10441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10441<T> = UnionToIntersection10441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10441<T extends unknown[], V> = [...T, V];

type TuplifyUnion10441<T, L = LastOf10441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10441<TuplifyUnion10441<Exclude<T, L>>, L>;

type DeepPartial10441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10441<T[P]> }
  : T;

type Paths10441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10441<K, Paths10441<T[K], Prev10441[D]>> : never }[keyof T]
  : never;

type Prev10441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10441 {
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

type ConfigPaths10441 = Paths10441<NestedConfig10441>;

interface HeavyProps10441 {
  config: DeepPartial10441<NestedConfig10441>;
  path?: ConfigPaths10441;
}

const HeavyComponent10441 = memo(function HeavyComponent10441({ config }: HeavyProps10441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10441.displayName = 'HeavyComponent10441';
export default HeavyComponent10441;

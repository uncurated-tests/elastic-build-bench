'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10354<T> = T extends (infer U)[]
  ? DeepReadonlyArray10354<U>
  : T extends object
  ? DeepReadonlyObject10354<T>
  : T;

interface DeepReadonlyArray10354<T> extends ReadonlyArray<DeepReadonly10354<T>> {}

type DeepReadonlyObject10354<T> = {
  readonly [P in keyof T]: DeepReadonly10354<T[P]>;
};

type UnionToIntersection10354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10354<T> = UnionToIntersection10354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10354<T extends unknown[], V> = [...T, V];

type TuplifyUnion10354<T, L = LastOf10354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10354<TuplifyUnion10354<Exclude<T, L>>, L>;

type DeepPartial10354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10354<T[P]> }
  : T;

type Paths10354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10354<K, Paths10354<T[K], Prev10354[D]>> : never }[keyof T]
  : never;

type Prev10354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10354 {
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

type ConfigPaths10354 = Paths10354<NestedConfig10354>;

interface HeavyProps10354 {
  config: DeepPartial10354<NestedConfig10354>;
  path?: ConfigPaths10354;
}

const HeavyComponent10354 = memo(function HeavyComponent10354({ config }: HeavyProps10354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10354.displayName = 'HeavyComponent10354';
export default HeavyComponent10354;

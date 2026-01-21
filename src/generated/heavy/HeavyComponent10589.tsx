'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10589<T> = T extends (infer U)[]
  ? DeepReadonlyArray10589<U>
  : T extends object
  ? DeepReadonlyObject10589<T>
  : T;

interface DeepReadonlyArray10589<T> extends ReadonlyArray<DeepReadonly10589<T>> {}

type DeepReadonlyObject10589<T> = {
  readonly [P in keyof T]: DeepReadonly10589<T[P]>;
};

type UnionToIntersection10589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10589<T> = UnionToIntersection10589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10589<T extends unknown[], V> = [...T, V];

type TuplifyUnion10589<T, L = LastOf10589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10589<TuplifyUnion10589<Exclude<T, L>>, L>;

type DeepPartial10589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10589<T[P]> }
  : T;

type Paths10589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10589<K, Paths10589<T[K], Prev10589[D]>> : never }[keyof T]
  : never;

type Prev10589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10589 {
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

type ConfigPaths10589 = Paths10589<NestedConfig10589>;

interface HeavyProps10589 {
  config: DeepPartial10589<NestedConfig10589>;
  path?: ConfigPaths10589;
}

const HeavyComponent10589 = memo(function HeavyComponent10589({ config }: HeavyProps10589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10589.displayName = 'HeavyComponent10589';
export default HeavyComponent10589;

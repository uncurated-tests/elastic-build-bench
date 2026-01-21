'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10277<T> = T extends (infer U)[]
  ? DeepReadonlyArray10277<U>
  : T extends object
  ? DeepReadonlyObject10277<T>
  : T;

interface DeepReadonlyArray10277<T> extends ReadonlyArray<DeepReadonly10277<T>> {}

type DeepReadonlyObject10277<T> = {
  readonly [P in keyof T]: DeepReadonly10277<T[P]>;
};

type UnionToIntersection10277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10277<T> = UnionToIntersection10277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10277<T extends unknown[], V> = [...T, V];

type TuplifyUnion10277<T, L = LastOf10277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10277<TuplifyUnion10277<Exclude<T, L>>, L>;

type DeepPartial10277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10277<T[P]> }
  : T;

type Paths10277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10277<K, Paths10277<T[K], Prev10277[D]>> : never }[keyof T]
  : never;

type Prev10277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10277 {
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

type ConfigPaths10277 = Paths10277<NestedConfig10277>;

interface HeavyProps10277 {
  config: DeepPartial10277<NestedConfig10277>;
  path?: ConfigPaths10277;
}

const HeavyComponent10277 = memo(function HeavyComponent10277({ config }: HeavyProps10277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10277.displayName = 'HeavyComponent10277';
export default HeavyComponent10277;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10291<T> = T extends (infer U)[]
  ? DeepReadonlyArray10291<U>
  : T extends object
  ? DeepReadonlyObject10291<T>
  : T;

interface DeepReadonlyArray10291<T> extends ReadonlyArray<DeepReadonly10291<T>> {}

type DeepReadonlyObject10291<T> = {
  readonly [P in keyof T]: DeepReadonly10291<T[P]>;
};

type UnionToIntersection10291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10291<T> = UnionToIntersection10291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10291<T extends unknown[], V> = [...T, V];

type TuplifyUnion10291<T, L = LastOf10291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10291<TuplifyUnion10291<Exclude<T, L>>, L>;

type DeepPartial10291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10291<T[P]> }
  : T;

type Paths10291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10291<K, Paths10291<T[K], Prev10291[D]>> : never }[keyof T]
  : never;

type Prev10291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10291 {
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

type ConfigPaths10291 = Paths10291<NestedConfig10291>;

interface HeavyProps10291 {
  config: DeepPartial10291<NestedConfig10291>;
  path?: ConfigPaths10291;
}

const HeavyComponent10291 = memo(function HeavyComponent10291({ config }: HeavyProps10291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10291.displayName = 'HeavyComponent10291';
export default HeavyComponent10291;

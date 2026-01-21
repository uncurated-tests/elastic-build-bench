'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10256<T> = T extends (infer U)[]
  ? DeepReadonlyArray10256<U>
  : T extends object
  ? DeepReadonlyObject10256<T>
  : T;

interface DeepReadonlyArray10256<T> extends ReadonlyArray<DeepReadonly10256<T>> {}

type DeepReadonlyObject10256<T> = {
  readonly [P in keyof T]: DeepReadonly10256<T[P]>;
};

type UnionToIntersection10256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10256<T> = UnionToIntersection10256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10256<T extends unknown[], V> = [...T, V];

type TuplifyUnion10256<T, L = LastOf10256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10256<TuplifyUnion10256<Exclude<T, L>>, L>;

type DeepPartial10256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10256<T[P]> }
  : T;

type Paths10256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10256<K, Paths10256<T[K], Prev10256[D]>> : never }[keyof T]
  : never;

type Prev10256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10256 {
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

type ConfigPaths10256 = Paths10256<NestedConfig10256>;

interface HeavyProps10256 {
  config: DeepPartial10256<NestedConfig10256>;
  path?: ConfigPaths10256;
}

const HeavyComponent10256 = memo(function HeavyComponent10256({ config }: HeavyProps10256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10256.displayName = 'HeavyComponent10256';
export default HeavyComponent10256;

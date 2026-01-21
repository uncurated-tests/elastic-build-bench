'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10093<T> = T extends (infer U)[]
  ? DeepReadonlyArray10093<U>
  : T extends object
  ? DeepReadonlyObject10093<T>
  : T;

interface DeepReadonlyArray10093<T> extends ReadonlyArray<DeepReadonly10093<T>> {}

type DeepReadonlyObject10093<T> = {
  readonly [P in keyof T]: DeepReadonly10093<T[P]>;
};

type UnionToIntersection10093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10093<T> = UnionToIntersection10093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10093<T extends unknown[], V> = [...T, V];

type TuplifyUnion10093<T, L = LastOf10093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10093<TuplifyUnion10093<Exclude<T, L>>, L>;

type DeepPartial10093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10093<T[P]> }
  : T;

type Paths10093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10093<K, Paths10093<T[K], Prev10093[D]>> : never }[keyof T]
  : never;

type Prev10093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10093 {
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

type ConfigPaths10093 = Paths10093<NestedConfig10093>;

interface HeavyProps10093 {
  config: DeepPartial10093<NestedConfig10093>;
  path?: ConfigPaths10093;
}

const HeavyComponent10093 = memo(function HeavyComponent10093({ config }: HeavyProps10093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10093.displayName = 'HeavyComponent10093';
export default HeavyComponent10093;

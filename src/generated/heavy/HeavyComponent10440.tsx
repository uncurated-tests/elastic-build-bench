'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10440<T> = T extends (infer U)[]
  ? DeepReadonlyArray10440<U>
  : T extends object
  ? DeepReadonlyObject10440<T>
  : T;

interface DeepReadonlyArray10440<T> extends ReadonlyArray<DeepReadonly10440<T>> {}

type DeepReadonlyObject10440<T> = {
  readonly [P in keyof T]: DeepReadonly10440<T[P]>;
};

type UnionToIntersection10440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10440<T> = UnionToIntersection10440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10440<T extends unknown[], V> = [...T, V];

type TuplifyUnion10440<T, L = LastOf10440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10440<TuplifyUnion10440<Exclude<T, L>>, L>;

type DeepPartial10440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10440<T[P]> }
  : T;

type Paths10440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10440<K, Paths10440<T[K], Prev10440[D]>> : never }[keyof T]
  : never;

type Prev10440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10440 {
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

type ConfigPaths10440 = Paths10440<NestedConfig10440>;

interface HeavyProps10440 {
  config: DeepPartial10440<NestedConfig10440>;
  path?: ConfigPaths10440;
}

const HeavyComponent10440 = memo(function HeavyComponent10440({ config }: HeavyProps10440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10440.displayName = 'HeavyComponent10440';
export default HeavyComponent10440;

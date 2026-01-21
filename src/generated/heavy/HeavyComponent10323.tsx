'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10323<T> = T extends (infer U)[]
  ? DeepReadonlyArray10323<U>
  : T extends object
  ? DeepReadonlyObject10323<T>
  : T;

interface DeepReadonlyArray10323<T> extends ReadonlyArray<DeepReadonly10323<T>> {}

type DeepReadonlyObject10323<T> = {
  readonly [P in keyof T]: DeepReadonly10323<T[P]>;
};

type UnionToIntersection10323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10323<T> = UnionToIntersection10323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10323<T extends unknown[], V> = [...T, V];

type TuplifyUnion10323<T, L = LastOf10323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10323<TuplifyUnion10323<Exclude<T, L>>, L>;

type DeepPartial10323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10323<T[P]> }
  : T;

type Paths10323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10323<K, Paths10323<T[K], Prev10323[D]>> : never }[keyof T]
  : never;

type Prev10323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10323 {
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

type ConfigPaths10323 = Paths10323<NestedConfig10323>;

interface HeavyProps10323 {
  config: DeepPartial10323<NestedConfig10323>;
  path?: ConfigPaths10323;
}

const HeavyComponent10323 = memo(function HeavyComponent10323({ config }: HeavyProps10323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10323.displayName = 'HeavyComponent10323';
export default HeavyComponent10323;

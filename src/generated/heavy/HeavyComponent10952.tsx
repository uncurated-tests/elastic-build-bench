'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10952<T> = T extends (infer U)[]
  ? DeepReadonlyArray10952<U>
  : T extends object
  ? DeepReadonlyObject10952<T>
  : T;

interface DeepReadonlyArray10952<T> extends ReadonlyArray<DeepReadonly10952<T>> {}

type DeepReadonlyObject10952<T> = {
  readonly [P in keyof T]: DeepReadonly10952<T[P]>;
};

type UnionToIntersection10952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10952<T> = UnionToIntersection10952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10952<T extends unknown[], V> = [...T, V];

type TuplifyUnion10952<T, L = LastOf10952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10952<TuplifyUnion10952<Exclude<T, L>>, L>;

type DeepPartial10952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10952<T[P]> }
  : T;

type Paths10952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10952<K, Paths10952<T[K], Prev10952[D]>> : never }[keyof T]
  : never;

type Prev10952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10952 {
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

type ConfigPaths10952 = Paths10952<NestedConfig10952>;

interface HeavyProps10952 {
  config: DeepPartial10952<NestedConfig10952>;
  path?: ConfigPaths10952;
}

const HeavyComponent10952 = memo(function HeavyComponent10952({ config }: HeavyProps10952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10952.displayName = 'HeavyComponent10952';
export default HeavyComponent10952;

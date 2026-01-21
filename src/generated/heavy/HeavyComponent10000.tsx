'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10000<T> = T extends (infer U)[]
  ? DeepReadonlyArray10000<U>
  : T extends object
  ? DeepReadonlyObject10000<T>
  : T;

interface DeepReadonlyArray10000<T> extends ReadonlyArray<DeepReadonly10000<T>> {}

type DeepReadonlyObject10000<T> = {
  readonly [P in keyof T]: DeepReadonly10000<T[P]>;
};

type UnionToIntersection10000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10000<T> = UnionToIntersection10000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10000<T extends unknown[], V> = [...T, V];

type TuplifyUnion10000<T, L = LastOf10000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10000<TuplifyUnion10000<Exclude<T, L>>, L>;

type DeepPartial10000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10000<T[P]> }
  : T;

type Paths10000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10000<K, Paths10000<T[K], Prev10000[D]>> : never }[keyof T]
  : never;

type Prev10000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10000 {
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

type ConfigPaths10000 = Paths10000<NestedConfig10000>;

interface HeavyProps10000 {
  config: DeepPartial10000<NestedConfig10000>;
  path?: ConfigPaths10000;
}

const HeavyComponent10000 = memo(function HeavyComponent10000({ config }: HeavyProps10000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10000.displayName = 'HeavyComponent10000';
export default HeavyComponent10000;

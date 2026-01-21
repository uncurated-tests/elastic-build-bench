'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10274<T> = T extends (infer U)[]
  ? DeepReadonlyArray10274<U>
  : T extends object
  ? DeepReadonlyObject10274<T>
  : T;

interface DeepReadonlyArray10274<T> extends ReadonlyArray<DeepReadonly10274<T>> {}

type DeepReadonlyObject10274<T> = {
  readonly [P in keyof T]: DeepReadonly10274<T[P]>;
};

type UnionToIntersection10274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10274<T> = UnionToIntersection10274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10274<T extends unknown[], V> = [...T, V];

type TuplifyUnion10274<T, L = LastOf10274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10274<TuplifyUnion10274<Exclude<T, L>>, L>;

type DeepPartial10274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10274<T[P]> }
  : T;

type Paths10274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10274<K, Paths10274<T[K], Prev10274[D]>> : never }[keyof T]
  : never;

type Prev10274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10274 {
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

type ConfigPaths10274 = Paths10274<NestedConfig10274>;

interface HeavyProps10274 {
  config: DeepPartial10274<NestedConfig10274>;
  path?: ConfigPaths10274;
}

const HeavyComponent10274 = memo(function HeavyComponent10274({ config }: HeavyProps10274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10274.displayName = 'HeavyComponent10274';
export default HeavyComponent10274;

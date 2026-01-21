'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10348<T> = T extends (infer U)[]
  ? DeepReadonlyArray10348<U>
  : T extends object
  ? DeepReadonlyObject10348<T>
  : T;

interface DeepReadonlyArray10348<T> extends ReadonlyArray<DeepReadonly10348<T>> {}

type DeepReadonlyObject10348<T> = {
  readonly [P in keyof T]: DeepReadonly10348<T[P]>;
};

type UnionToIntersection10348<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10348<T> = UnionToIntersection10348<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10348<T extends unknown[], V> = [...T, V];

type TuplifyUnion10348<T, L = LastOf10348<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10348<TuplifyUnion10348<Exclude<T, L>>, L>;

type DeepPartial10348<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10348<T[P]> }
  : T;

type Paths10348<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10348<K, Paths10348<T[K], Prev10348[D]>> : never }[keyof T]
  : never;

type Prev10348 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10348<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10348 {
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

type ConfigPaths10348 = Paths10348<NestedConfig10348>;

interface HeavyProps10348 {
  config: DeepPartial10348<NestedConfig10348>;
  path?: ConfigPaths10348;
}

const HeavyComponent10348 = memo(function HeavyComponent10348({ config }: HeavyProps10348) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10348) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10348 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10348: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10348.displayName = 'HeavyComponent10348';
export default HeavyComponent10348;

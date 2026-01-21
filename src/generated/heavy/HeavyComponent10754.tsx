'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10754<T> = T extends (infer U)[]
  ? DeepReadonlyArray10754<U>
  : T extends object
  ? DeepReadonlyObject10754<T>
  : T;

interface DeepReadonlyArray10754<T> extends ReadonlyArray<DeepReadonly10754<T>> {}

type DeepReadonlyObject10754<T> = {
  readonly [P in keyof T]: DeepReadonly10754<T[P]>;
};

type UnionToIntersection10754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10754<T> = UnionToIntersection10754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10754<T extends unknown[], V> = [...T, V];

type TuplifyUnion10754<T, L = LastOf10754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10754<TuplifyUnion10754<Exclude<T, L>>, L>;

type DeepPartial10754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10754<T[P]> }
  : T;

type Paths10754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10754<K, Paths10754<T[K], Prev10754[D]>> : never }[keyof T]
  : never;

type Prev10754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10754 {
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

type ConfigPaths10754 = Paths10754<NestedConfig10754>;

interface HeavyProps10754 {
  config: DeepPartial10754<NestedConfig10754>;
  path?: ConfigPaths10754;
}

const HeavyComponent10754 = memo(function HeavyComponent10754({ config }: HeavyProps10754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10754.displayName = 'HeavyComponent10754';
export default HeavyComponent10754;

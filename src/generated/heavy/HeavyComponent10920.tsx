'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10920<T> = T extends (infer U)[]
  ? DeepReadonlyArray10920<U>
  : T extends object
  ? DeepReadonlyObject10920<T>
  : T;

interface DeepReadonlyArray10920<T> extends ReadonlyArray<DeepReadonly10920<T>> {}

type DeepReadonlyObject10920<T> = {
  readonly [P in keyof T]: DeepReadonly10920<T[P]>;
};

type UnionToIntersection10920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10920<T> = UnionToIntersection10920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10920<T extends unknown[], V> = [...T, V];

type TuplifyUnion10920<T, L = LastOf10920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10920<TuplifyUnion10920<Exclude<T, L>>, L>;

type DeepPartial10920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10920<T[P]> }
  : T;

type Paths10920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10920<K, Paths10920<T[K], Prev10920[D]>> : never }[keyof T]
  : never;

type Prev10920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10920 {
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

type ConfigPaths10920 = Paths10920<NestedConfig10920>;

interface HeavyProps10920 {
  config: DeepPartial10920<NestedConfig10920>;
  path?: ConfigPaths10920;
}

const HeavyComponent10920 = memo(function HeavyComponent10920({ config }: HeavyProps10920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10920.displayName = 'HeavyComponent10920';
export default HeavyComponent10920;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10021<T> = T extends (infer U)[]
  ? DeepReadonlyArray10021<U>
  : T extends object
  ? DeepReadonlyObject10021<T>
  : T;

interface DeepReadonlyArray10021<T> extends ReadonlyArray<DeepReadonly10021<T>> {}

type DeepReadonlyObject10021<T> = {
  readonly [P in keyof T]: DeepReadonly10021<T[P]>;
};

type UnionToIntersection10021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10021<T> = UnionToIntersection10021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10021<T extends unknown[], V> = [...T, V];

type TuplifyUnion10021<T, L = LastOf10021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10021<TuplifyUnion10021<Exclude<T, L>>, L>;

type DeepPartial10021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10021<T[P]> }
  : T;

type Paths10021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10021<K, Paths10021<T[K], Prev10021[D]>> : never }[keyof T]
  : never;

type Prev10021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10021 {
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

type ConfigPaths10021 = Paths10021<NestedConfig10021>;

interface HeavyProps10021 {
  config: DeepPartial10021<NestedConfig10021>;
  path?: ConfigPaths10021;
}

const HeavyComponent10021 = memo(function HeavyComponent10021({ config }: HeavyProps10021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10021.displayName = 'HeavyComponent10021';
export default HeavyComponent10021;

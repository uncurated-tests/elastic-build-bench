'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10337<T> = T extends (infer U)[]
  ? DeepReadonlyArray10337<U>
  : T extends object
  ? DeepReadonlyObject10337<T>
  : T;

interface DeepReadonlyArray10337<T> extends ReadonlyArray<DeepReadonly10337<T>> {}

type DeepReadonlyObject10337<T> = {
  readonly [P in keyof T]: DeepReadonly10337<T[P]>;
};

type UnionToIntersection10337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10337<T> = UnionToIntersection10337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10337<T extends unknown[], V> = [...T, V];

type TuplifyUnion10337<T, L = LastOf10337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10337<TuplifyUnion10337<Exclude<T, L>>, L>;

type DeepPartial10337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10337<T[P]> }
  : T;

type Paths10337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10337<K, Paths10337<T[K], Prev10337[D]>> : never }[keyof T]
  : never;

type Prev10337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10337 {
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

type ConfigPaths10337 = Paths10337<NestedConfig10337>;

interface HeavyProps10337 {
  config: DeepPartial10337<NestedConfig10337>;
  path?: ConfigPaths10337;
}

const HeavyComponent10337 = memo(function HeavyComponent10337({ config }: HeavyProps10337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10337.displayName = 'HeavyComponent10337';
export default HeavyComponent10337;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10263<T> = T extends (infer U)[]
  ? DeepReadonlyArray10263<U>
  : T extends object
  ? DeepReadonlyObject10263<T>
  : T;

interface DeepReadonlyArray10263<T> extends ReadonlyArray<DeepReadonly10263<T>> {}

type DeepReadonlyObject10263<T> = {
  readonly [P in keyof T]: DeepReadonly10263<T[P]>;
};

type UnionToIntersection10263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10263<T> = UnionToIntersection10263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10263<T extends unknown[], V> = [...T, V];

type TuplifyUnion10263<T, L = LastOf10263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10263<TuplifyUnion10263<Exclude<T, L>>, L>;

type DeepPartial10263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10263<T[P]> }
  : T;

type Paths10263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10263<K, Paths10263<T[K], Prev10263[D]>> : never }[keyof T]
  : never;

type Prev10263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10263 {
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

type ConfigPaths10263 = Paths10263<NestedConfig10263>;

interface HeavyProps10263 {
  config: DeepPartial10263<NestedConfig10263>;
  path?: ConfigPaths10263;
}

const HeavyComponent10263 = memo(function HeavyComponent10263({ config }: HeavyProps10263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10263.displayName = 'HeavyComponent10263';
export default HeavyComponent10263;

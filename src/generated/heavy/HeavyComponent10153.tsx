'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10153<T> = T extends (infer U)[]
  ? DeepReadonlyArray10153<U>
  : T extends object
  ? DeepReadonlyObject10153<T>
  : T;

interface DeepReadonlyArray10153<T> extends ReadonlyArray<DeepReadonly10153<T>> {}

type DeepReadonlyObject10153<T> = {
  readonly [P in keyof T]: DeepReadonly10153<T[P]>;
};

type UnionToIntersection10153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10153<T> = UnionToIntersection10153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10153<T extends unknown[], V> = [...T, V];

type TuplifyUnion10153<T, L = LastOf10153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10153<TuplifyUnion10153<Exclude<T, L>>, L>;

type DeepPartial10153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10153<T[P]> }
  : T;

type Paths10153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10153<K, Paths10153<T[K], Prev10153[D]>> : never }[keyof T]
  : never;

type Prev10153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10153 {
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

type ConfigPaths10153 = Paths10153<NestedConfig10153>;

interface HeavyProps10153 {
  config: DeepPartial10153<NestedConfig10153>;
  path?: ConfigPaths10153;
}

const HeavyComponent10153 = memo(function HeavyComponent10153({ config }: HeavyProps10153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10153.displayName = 'HeavyComponent10153';
export default HeavyComponent10153;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10853<T> = T extends (infer U)[]
  ? DeepReadonlyArray10853<U>
  : T extends object
  ? DeepReadonlyObject10853<T>
  : T;

interface DeepReadonlyArray10853<T> extends ReadonlyArray<DeepReadonly10853<T>> {}

type DeepReadonlyObject10853<T> = {
  readonly [P in keyof T]: DeepReadonly10853<T[P]>;
};

type UnionToIntersection10853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10853<T> = UnionToIntersection10853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10853<T extends unknown[], V> = [...T, V];

type TuplifyUnion10853<T, L = LastOf10853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10853<TuplifyUnion10853<Exclude<T, L>>, L>;

type DeepPartial10853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10853<T[P]> }
  : T;

type Paths10853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10853<K, Paths10853<T[K], Prev10853[D]>> : never }[keyof T]
  : never;

type Prev10853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10853 {
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

type ConfigPaths10853 = Paths10853<NestedConfig10853>;

interface HeavyProps10853 {
  config: DeepPartial10853<NestedConfig10853>;
  path?: ConfigPaths10853;
}

const HeavyComponent10853 = memo(function HeavyComponent10853({ config }: HeavyProps10853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10853.displayName = 'HeavyComponent10853';
export default HeavyComponent10853;

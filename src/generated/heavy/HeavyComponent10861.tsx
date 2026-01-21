'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10861<T> = T extends (infer U)[]
  ? DeepReadonlyArray10861<U>
  : T extends object
  ? DeepReadonlyObject10861<T>
  : T;

interface DeepReadonlyArray10861<T> extends ReadonlyArray<DeepReadonly10861<T>> {}

type DeepReadonlyObject10861<T> = {
  readonly [P in keyof T]: DeepReadonly10861<T[P]>;
};

type UnionToIntersection10861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10861<T> = UnionToIntersection10861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10861<T extends unknown[], V> = [...T, V];

type TuplifyUnion10861<T, L = LastOf10861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10861<TuplifyUnion10861<Exclude<T, L>>, L>;

type DeepPartial10861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10861<T[P]> }
  : T;

type Paths10861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10861<K, Paths10861<T[K], Prev10861[D]>> : never }[keyof T]
  : never;

type Prev10861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10861 {
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

type ConfigPaths10861 = Paths10861<NestedConfig10861>;

interface HeavyProps10861 {
  config: DeepPartial10861<NestedConfig10861>;
  path?: ConfigPaths10861;
}

const HeavyComponent10861 = memo(function HeavyComponent10861({ config }: HeavyProps10861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10861.displayName = 'HeavyComponent10861';
export default HeavyComponent10861;

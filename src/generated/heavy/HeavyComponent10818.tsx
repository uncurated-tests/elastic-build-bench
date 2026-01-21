'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10818<T> = T extends (infer U)[]
  ? DeepReadonlyArray10818<U>
  : T extends object
  ? DeepReadonlyObject10818<T>
  : T;

interface DeepReadonlyArray10818<T> extends ReadonlyArray<DeepReadonly10818<T>> {}

type DeepReadonlyObject10818<T> = {
  readonly [P in keyof T]: DeepReadonly10818<T[P]>;
};

type UnionToIntersection10818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10818<T> = UnionToIntersection10818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10818<T extends unknown[], V> = [...T, V];

type TuplifyUnion10818<T, L = LastOf10818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10818<TuplifyUnion10818<Exclude<T, L>>, L>;

type DeepPartial10818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10818<T[P]> }
  : T;

type Paths10818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10818<K, Paths10818<T[K], Prev10818[D]>> : never }[keyof T]
  : never;

type Prev10818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10818 {
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

type ConfigPaths10818 = Paths10818<NestedConfig10818>;

interface HeavyProps10818 {
  config: DeepPartial10818<NestedConfig10818>;
  path?: ConfigPaths10818;
}

const HeavyComponent10818 = memo(function HeavyComponent10818({ config }: HeavyProps10818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10818.displayName = 'HeavyComponent10818';
export default HeavyComponent10818;

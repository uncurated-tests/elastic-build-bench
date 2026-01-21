'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10402<T> = T extends (infer U)[]
  ? DeepReadonlyArray10402<U>
  : T extends object
  ? DeepReadonlyObject10402<T>
  : T;

interface DeepReadonlyArray10402<T> extends ReadonlyArray<DeepReadonly10402<T>> {}

type DeepReadonlyObject10402<T> = {
  readonly [P in keyof T]: DeepReadonly10402<T[P]>;
};

type UnionToIntersection10402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10402<T> = UnionToIntersection10402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10402<T extends unknown[], V> = [...T, V];

type TuplifyUnion10402<T, L = LastOf10402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10402<TuplifyUnion10402<Exclude<T, L>>, L>;

type DeepPartial10402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10402<T[P]> }
  : T;

type Paths10402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10402<K, Paths10402<T[K], Prev10402[D]>> : never }[keyof T]
  : never;

type Prev10402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10402 {
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

type ConfigPaths10402 = Paths10402<NestedConfig10402>;

interface HeavyProps10402 {
  config: DeepPartial10402<NestedConfig10402>;
  path?: ConfigPaths10402;
}

const HeavyComponent10402 = memo(function HeavyComponent10402({ config }: HeavyProps10402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10402.displayName = 'HeavyComponent10402';
export default HeavyComponent10402;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10050<T> = T extends (infer U)[]
  ? DeepReadonlyArray10050<U>
  : T extends object
  ? DeepReadonlyObject10050<T>
  : T;

interface DeepReadonlyArray10050<T> extends ReadonlyArray<DeepReadonly10050<T>> {}

type DeepReadonlyObject10050<T> = {
  readonly [P in keyof T]: DeepReadonly10050<T[P]>;
};

type UnionToIntersection10050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10050<T> = UnionToIntersection10050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10050<T extends unknown[], V> = [...T, V];

type TuplifyUnion10050<T, L = LastOf10050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10050<TuplifyUnion10050<Exclude<T, L>>, L>;

type DeepPartial10050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10050<T[P]> }
  : T;

type Paths10050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10050<K, Paths10050<T[K], Prev10050[D]>> : never }[keyof T]
  : never;

type Prev10050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10050 {
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

type ConfigPaths10050 = Paths10050<NestedConfig10050>;

interface HeavyProps10050 {
  config: DeepPartial10050<NestedConfig10050>;
  path?: ConfigPaths10050;
}

const HeavyComponent10050 = memo(function HeavyComponent10050({ config }: HeavyProps10050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10050.displayName = 'HeavyComponent10050';
export default HeavyComponent10050;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10687<T> = T extends (infer U)[]
  ? DeepReadonlyArray10687<U>
  : T extends object
  ? DeepReadonlyObject10687<T>
  : T;

interface DeepReadonlyArray10687<T> extends ReadonlyArray<DeepReadonly10687<T>> {}

type DeepReadonlyObject10687<T> = {
  readonly [P in keyof T]: DeepReadonly10687<T[P]>;
};

type UnionToIntersection10687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10687<T> = UnionToIntersection10687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10687<T extends unknown[], V> = [...T, V];

type TuplifyUnion10687<T, L = LastOf10687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10687<TuplifyUnion10687<Exclude<T, L>>, L>;

type DeepPartial10687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10687<T[P]> }
  : T;

type Paths10687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10687<K, Paths10687<T[K], Prev10687[D]>> : never }[keyof T]
  : never;

type Prev10687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10687 {
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

type ConfigPaths10687 = Paths10687<NestedConfig10687>;

interface HeavyProps10687 {
  config: DeepPartial10687<NestedConfig10687>;
  path?: ConfigPaths10687;
}

const HeavyComponent10687 = memo(function HeavyComponent10687({ config }: HeavyProps10687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10687.displayName = 'HeavyComponent10687';
export default HeavyComponent10687;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10045<T> = T extends (infer U)[]
  ? DeepReadonlyArray10045<U>
  : T extends object
  ? DeepReadonlyObject10045<T>
  : T;

interface DeepReadonlyArray10045<T> extends ReadonlyArray<DeepReadonly10045<T>> {}

type DeepReadonlyObject10045<T> = {
  readonly [P in keyof T]: DeepReadonly10045<T[P]>;
};

type UnionToIntersection10045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10045<T> = UnionToIntersection10045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10045<T extends unknown[], V> = [...T, V];

type TuplifyUnion10045<T, L = LastOf10045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10045<TuplifyUnion10045<Exclude<T, L>>, L>;

type DeepPartial10045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10045<T[P]> }
  : T;

type Paths10045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10045<K, Paths10045<T[K], Prev10045[D]>> : never }[keyof T]
  : never;

type Prev10045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10045 {
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

type ConfigPaths10045 = Paths10045<NestedConfig10045>;

interface HeavyProps10045 {
  config: DeepPartial10045<NestedConfig10045>;
  path?: ConfigPaths10045;
}

const HeavyComponent10045 = memo(function HeavyComponent10045({ config }: HeavyProps10045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10045.displayName = 'HeavyComponent10045';
export default HeavyComponent10045;

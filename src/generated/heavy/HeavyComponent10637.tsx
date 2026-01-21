'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10637<T> = T extends (infer U)[]
  ? DeepReadonlyArray10637<U>
  : T extends object
  ? DeepReadonlyObject10637<T>
  : T;

interface DeepReadonlyArray10637<T> extends ReadonlyArray<DeepReadonly10637<T>> {}

type DeepReadonlyObject10637<T> = {
  readonly [P in keyof T]: DeepReadonly10637<T[P]>;
};

type UnionToIntersection10637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10637<T> = UnionToIntersection10637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10637<T extends unknown[], V> = [...T, V];

type TuplifyUnion10637<T, L = LastOf10637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10637<TuplifyUnion10637<Exclude<T, L>>, L>;

type DeepPartial10637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10637<T[P]> }
  : T;

type Paths10637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10637<K, Paths10637<T[K], Prev10637[D]>> : never }[keyof T]
  : never;

type Prev10637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10637 {
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

type ConfigPaths10637 = Paths10637<NestedConfig10637>;

interface HeavyProps10637 {
  config: DeepPartial10637<NestedConfig10637>;
  path?: ConfigPaths10637;
}

const HeavyComponent10637 = memo(function HeavyComponent10637({ config }: HeavyProps10637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10637.displayName = 'HeavyComponent10637';
export default HeavyComponent10637;

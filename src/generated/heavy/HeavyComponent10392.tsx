'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10392<T> = T extends (infer U)[]
  ? DeepReadonlyArray10392<U>
  : T extends object
  ? DeepReadonlyObject10392<T>
  : T;

interface DeepReadonlyArray10392<T> extends ReadonlyArray<DeepReadonly10392<T>> {}

type DeepReadonlyObject10392<T> = {
  readonly [P in keyof T]: DeepReadonly10392<T[P]>;
};

type UnionToIntersection10392<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10392<T> = UnionToIntersection10392<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10392<T extends unknown[], V> = [...T, V];

type TuplifyUnion10392<T, L = LastOf10392<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10392<TuplifyUnion10392<Exclude<T, L>>, L>;

type DeepPartial10392<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10392<T[P]> }
  : T;

type Paths10392<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10392<K, Paths10392<T[K], Prev10392[D]>> : never }[keyof T]
  : never;

type Prev10392 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10392<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10392 {
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

type ConfigPaths10392 = Paths10392<NestedConfig10392>;

interface HeavyProps10392 {
  config: DeepPartial10392<NestedConfig10392>;
  path?: ConfigPaths10392;
}

const HeavyComponent10392 = memo(function HeavyComponent10392({ config }: HeavyProps10392) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10392) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10392 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10392: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10392.displayName = 'HeavyComponent10392';
export default HeavyComponent10392;

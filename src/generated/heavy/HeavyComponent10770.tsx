'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10770<T> = T extends (infer U)[]
  ? DeepReadonlyArray10770<U>
  : T extends object
  ? DeepReadonlyObject10770<T>
  : T;

interface DeepReadonlyArray10770<T> extends ReadonlyArray<DeepReadonly10770<T>> {}

type DeepReadonlyObject10770<T> = {
  readonly [P in keyof T]: DeepReadonly10770<T[P]>;
};

type UnionToIntersection10770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10770<T> = UnionToIntersection10770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10770<T extends unknown[], V> = [...T, V];

type TuplifyUnion10770<T, L = LastOf10770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10770<TuplifyUnion10770<Exclude<T, L>>, L>;

type DeepPartial10770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10770<T[P]> }
  : T;

type Paths10770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10770<K, Paths10770<T[K], Prev10770[D]>> : never }[keyof T]
  : never;

type Prev10770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10770 {
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

type ConfigPaths10770 = Paths10770<NestedConfig10770>;

interface HeavyProps10770 {
  config: DeepPartial10770<NestedConfig10770>;
  path?: ConfigPaths10770;
}

const HeavyComponent10770 = memo(function HeavyComponent10770({ config }: HeavyProps10770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10770.displayName = 'HeavyComponent10770';
export default HeavyComponent10770;

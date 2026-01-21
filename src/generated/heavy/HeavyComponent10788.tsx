'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10788<T> = T extends (infer U)[]
  ? DeepReadonlyArray10788<U>
  : T extends object
  ? DeepReadonlyObject10788<T>
  : T;

interface DeepReadonlyArray10788<T> extends ReadonlyArray<DeepReadonly10788<T>> {}

type DeepReadonlyObject10788<T> = {
  readonly [P in keyof T]: DeepReadonly10788<T[P]>;
};

type UnionToIntersection10788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10788<T> = UnionToIntersection10788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10788<T extends unknown[], V> = [...T, V];

type TuplifyUnion10788<T, L = LastOf10788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10788<TuplifyUnion10788<Exclude<T, L>>, L>;

type DeepPartial10788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10788<T[P]> }
  : T;

type Paths10788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10788<K, Paths10788<T[K], Prev10788[D]>> : never }[keyof T]
  : never;

type Prev10788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10788 {
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

type ConfigPaths10788 = Paths10788<NestedConfig10788>;

interface HeavyProps10788 {
  config: DeepPartial10788<NestedConfig10788>;
  path?: ConfigPaths10788;
}

const HeavyComponent10788 = memo(function HeavyComponent10788({ config }: HeavyProps10788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10788.displayName = 'HeavyComponent10788';
export default HeavyComponent10788;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10979<T> = T extends (infer U)[]
  ? DeepReadonlyArray10979<U>
  : T extends object
  ? DeepReadonlyObject10979<T>
  : T;

interface DeepReadonlyArray10979<T> extends ReadonlyArray<DeepReadonly10979<T>> {}

type DeepReadonlyObject10979<T> = {
  readonly [P in keyof T]: DeepReadonly10979<T[P]>;
};

type UnionToIntersection10979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10979<T> = UnionToIntersection10979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10979<T extends unknown[], V> = [...T, V];

type TuplifyUnion10979<T, L = LastOf10979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10979<TuplifyUnion10979<Exclude<T, L>>, L>;

type DeepPartial10979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10979<T[P]> }
  : T;

type Paths10979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10979<K, Paths10979<T[K], Prev10979[D]>> : never }[keyof T]
  : never;

type Prev10979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10979 {
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

type ConfigPaths10979 = Paths10979<NestedConfig10979>;

interface HeavyProps10979 {
  config: DeepPartial10979<NestedConfig10979>;
  path?: ConfigPaths10979;
}

const HeavyComponent10979 = memo(function HeavyComponent10979({ config }: HeavyProps10979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10979.displayName = 'HeavyComponent10979';
export default HeavyComponent10979;

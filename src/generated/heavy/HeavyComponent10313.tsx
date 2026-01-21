'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10313<T> = T extends (infer U)[]
  ? DeepReadonlyArray10313<U>
  : T extends object
  ? DeepReadonlyObject10313<T>
  : T;

interface DeepReadonlyArray10313<T> extends ReadonlyArray<DeepReadonly10313<T>> {}

type DeepReadonlyObject10313<T> = {
  readonly [P in keyof T]: DeepReadonly10313<T[P]>;
};

type UnionToIntersection10313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10313<T> = UnionToIntersection10313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10313<T extends unknown[], V> = [...T, V];

type TuplifyUnion10313<T, L = LastOf10313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10313<TuplifyUnion10313<Exclude<T, L>>, L>;

type DeepPartial10313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10313<T[P]> }
  : T;

type Paths10313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10313<K, Paths10313<T[K], Prev10313[D]>> : never }[keyof T]
  : never;

type Prev10313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10313 {
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

type ConfigPaths10313 = Paths10313<NestedConfig10313>;

interface HeavyProps10313 {
  config: DeepPartial10313<NestedConfig10313>;
  path?: ConfigPaths10313;
}

const HeavyComponent10313 = memo(function HeavyComponent10313({ config }: HeavyProps10313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10313.displayName = 'HeavyComponent10313';
export default HeavyComponent10313;

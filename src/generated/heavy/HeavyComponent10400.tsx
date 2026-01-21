'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10400<T> = T extends (infer U)[]
  ? DeepReadonlyArray10400<U>
  : T extends object
  ? DeepReadonlyObject10400<T>
  : T;

interface DeepReadonlyArray10400<T> extends ReadonlyArray<DeepReadonly10400<T>> {}

type DeepReadonlyObject10400<T> = {
  readonly [P in keyof T]: DeepReadonly10400<T[P]>;
};

type UnionToIntersection10400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10400<T> = UnionToIntersection10400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10400<T extends unknown[], V> = [...T, V];

type TuplifyUnion10400<T, L = LastOf10400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10400<TuplifyUnion10400<Exclude<T, L>>, L>;

type DeepPartial10400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10400<T[P]> }
  : T;

type Paths10400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10400<K, Paths10400<T[K], Prev10400[D]>> : never }[keyof T]
  : never;

type Prev10400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10400 {
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

type ConfigPaths10400 = Paths10400<NestedConfig10400>;

interface HeavyProps10400 {
  config: DeepPartial10400<NestedConfig10400>;
  path?: ConfigPaths10400;
}

const HeavyComponent10400 = memo(function HeavyComponent10400({ config }: HeavyProps10400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10400.displayName = 'HeavyComponent10400';
export default HeavyComponent10400;

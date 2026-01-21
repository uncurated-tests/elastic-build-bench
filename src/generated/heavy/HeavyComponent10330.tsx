'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10330<T> = T extends (infer U)[]
  ? DeepReadonlyArray10330<U>
  : T extends object
  ? DeepReadonlyObject10330<T>
  : T;

interface DeepReadonlyArray10330<T> extends ReadonlyArray<DeepReadonly10330<T>> {}

type DeepReadonlyObject10330<T> = {
  readonly [P in keyof T]: DeepReadonly10330<T[P]>;
};

type UnionToIntersection10330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10330<T> = UnionToIntersection10330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10330<T extends unknown[], V> = [...T, V];

type TuplifyUnion10330<T, L = LastOf10330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10330<TuplifyUnion10330<Exclude<T, L>>, L>;

type DeepPartial10330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10330<T[P]> }
  : T;

type Paths10330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10330<K, Paths10330<T[K], Prev10330[D]>> : never }[keyof T]
  : never;

type Prev10330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10330 {
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

type ConfigPaths10330 = Paths10330<NestedConfig10330>;

interface HeavyProps10330 {
  config: DeepPartial10330<NestedConfig10330>;
  path?: ConfigPaths10330;
}

const HeavyComponent10330 = memo(function HeavyComponent10330({ config }: HeavyProps10330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10330.displayName = 'HeavyComponent10330';
export default HeavyComponent10330;

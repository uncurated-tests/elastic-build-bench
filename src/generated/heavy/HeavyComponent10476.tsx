'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10476<T> = T extends (infer U)[]
  ? DeepReadonlyArray10476<U>
  : T extends object
  ? DeepReadonlyObject10476<T>
  : T;

interface DeepReadonlyArray10476<T> extends ReadonlyArray<DeepReadonly10476<T>> {}

type DeepReadonlyObject10476<T> = {
  readonly [P in keyof T]: DeepReadonly10476<T[P]>;
};

type UnionToIntersection10476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10476<T> = UnionToIntersection10476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10476<T extends unknown[], V> = [...T, V];

type TuplifyUnion10476<T, L = LastOf10476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10476<TuplifyUnion10476<Exclude<T, L>>, L>;

type DeepPartial10476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10476<T[P]> }
  : T;

type Paths10476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10476<K, Paths10476<T[K], Prev10476[D]>> : never }[keyof T]
  : never;

type Prev10476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10476 {
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

type ConfigPaths10476 = Paths10476<NestedConfig10476>;

interface HeavyProps10476 {
  config: DeepPartial10476<NestedConfig10476>;
  path?: ConfigPaths10476;
}

const HeavyComponent10476 = memo(function HeavyComponent10476({ config }: HeavyProps10476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10476.displayName = 'HeavyComponent10476';
export default HeavyComponent10476;

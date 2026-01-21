'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10460<T> = T extends (infer U)[]
  ? DeepReadonlyArray10460<U>
  : T extends object
  ? DeepReadonlyObject10460<T>
  : T;

interface DeepReadonlyArray10460<T> extends ReadonlyArray<DeepReadonly10460<T>> {}

type DeepReadonlyObject10460<T> = {
  readonly [P in keyof T]: DeepReadonly10460<T[P]>;
};

type UnionToIntersection10460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10460<T> = UnionToIntersection10460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10460<T extends unknown[], V> = [...T, V];

type TuplifyUnion10460<T, L = LastOf10460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10460<TuplifyUnion10460<Exclude<T, L>>, L>;

type DeepPartial10460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10460<T[P]> }
  : T;

type Paths10460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10460<K, Paths10460<T[K], Prev10460[D]>> : never }[keyof T]
  : never;

type Prev10460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10460 {
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

type ConfigPaths10460 = Paths10460<NestedConfig10460>;

interface HeavyProps10460 {
  config: DeepPartial10460<NestedConfig10460>;
  path?: ConfigPaths10460;
}

const HeavyComponent10460 = memo(function HeavyComponent10460({ config }: HeavyProps10460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10460.displayName = 'HeavyComponent10460';
export default HeavyComponent10460;

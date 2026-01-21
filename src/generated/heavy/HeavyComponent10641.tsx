'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10641<T> = T extends (infer U)[]
  ? DeepReadonlyArray10641<U>
  : T extends object
  ? DeepReadonlyObject10641<T>
  : T;

interface DeepReadonlyArray10641<T> extends ReadonlyArray<DeepReadonly10641<T>> {}

type DeepReadonlyObject10641<T> = {
  readonly [P in keyof T]: DeepReadonly10641<T[P]>;
};

type UnionToIntersection10641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10641<T> = UnionToIntersection10641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10641<T extends unknown[], V> = [...T, V];

type TuplifyUnion10641<T, L = LastOf10641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10641<TuplifyUnion10641<Exclude<T, L>>, L>;

type DeepPartial10641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10641<T[P]> }
  : T;

type Paths10641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10641<K, Paths10641<T[K], Prev10641[D]>> : never }[keyof T]
  : never;

type Prev10641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10641 {
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

type ConfigPaths10641 = Paths10641<NestedConfig10641>;

interface HeavyProps10641 {
  config: DeepPartial10641<NestedConfig10641>;
  path?: ConfigPaths10641;
}

const HeavyComponent10641 = memo(function HeavyComponent10641({ config }: HeavyProps10641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10641.displayName = 'HeavyComponent10641';
export default HeavyComponent10641;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10925<T> = T extends (infer U)[]
  ? DeepReadonlyArray10925<U>
  : T extends object
  ? DeepReadonlyObject10925<T>
  : T;

interface DeepReadonlyArray10925<T> extends ReadonlyArray<DeepReadonly10925<T>> {}

type DeepReadonlyObject10925<T> = {
  readonly [P in keyof T]: DeepReadonly10925<T[P]>;
};

type UnionToIntersection10925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10925<T> = UnionToIntersection10925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10925<T extends unknown[], V> = [...T, V];

type TuplifyUnion10925<T, L = LastOf10925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10925<TuplifyUnion10925<Exclude<T, L>>, L>;

type DeepPartial10925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10925<T[P]> }
  : T;

type Paths10925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10925<K, Paths10925<T[K], Prev10925[D]>> : never }[keyof T]
  : never;

type Prev10925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10925 {
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

type ConfigPaths10925 = Paths10925<NestedConfig10925>;

interface HeavyProps10925 {
  config: DeepPartial10925<NestedConfig10925>;
  path?: ConfigPaths10925;
}

const HeavyComponent10925 = memo(function HeavyComponent10925({ config }: HeavyProps10925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10925.displayName = 'HeavyComponent10925';
export default HeavyComponent10925;

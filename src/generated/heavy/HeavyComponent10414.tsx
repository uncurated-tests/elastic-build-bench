'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10414<T> = T extends (infer U)[]
  ? DeepReadonlyArray10414<U>
  : T extends object
  ? DeepReadonlyObject10414<T>
  : T;

interface DeepReadonlyArray10414<T> extends ReadonlyArray<DeepReadonly10414<T>> {}

type DeepReadonlyObject10414<T> = {
  readonly [P in keyof T]: DeepReadonly10414<T[P]>;
};

type UnionToIntersection10414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10414<T> = UnionToIntersection10414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10414<T extends unknown[], V> = [...T, V];

type TuplifyUnion10414<T, L = LastOf10414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10414<TuplifyUnion10414<Exclude<T, L>>, L>;

type DeepPartial10414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10414<T[P]> }
  : T;

type Paths10414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10414<K, Paths10414<T[K], Prev10414[D]>> : never }[keyof T]
  : never;

type Prev10414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10414 {
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

type ConfigPaths10414 = Paths10414<NestedConfig10414>;

interface HeavyProps10414 {
  config: DeepPartial10414<NestedConfig10414>;
  path?: ConfigPaths10414;
}

const HeavyComponent10414 = memo(function HeavyComponent10414({ config }: HeavyProps10414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10414.displayName = 'HeavyComponent10414';
export default HeavyComponent10414;

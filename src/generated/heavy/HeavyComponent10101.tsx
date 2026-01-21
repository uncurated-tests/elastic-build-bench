'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10101<T> = T extends (infer U)[]
  ? DeepReadonlyArray10101<U>
  : T extends object
  ? DeepReadonlyObject10101<T>
  : T;

interface DeepReadonlyArray10101<T> extends ReadonlyArray<DeepReadonly10101<T>> {}

type DeepReadonlyObject10101<T> = {
  readonly [P in keyof T]: DeepReadonly10101<T[P]>;
};

type UnionToIntersection10101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10101<T> = UnionToIntersection10101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10101<T extends unknown[], V> = [...T, V];

type TuplifyUnion10101<T, L = LastOf10101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10101<TuplifyUnion10101<Exclude<T, L>>, L>;

type DeepPartial10101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10101<T[P]> }
  : T;

type Paths10101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10101<K, Paths10101<T[K], Prev10101[D]>> : never }[keyof T]
  : never;

type Prev10101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10101 {
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

type ConfigPaths10101 = Paths10101<NestedConfig10101>;

interface HeavyProps10101 {
  config: DeepPartial10101<NestedConfig10101>;
  path?: ConfigPaths10101;
}

const HeavyComponent10101 = memo(function HeavyComponent10101({ config }: HeavyProps10101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10101.displayName = 'HeavyComponent10101';
export default HeavyComponent10101;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10248<T> = T extends (infer U)[]
  ? DeepReadonlyArray10248<U>
  : T extends object
  ? DeepReadonlyObject10248<T>
  : T;

interface DeepReadonlyArray10248<T> extends ReadonlyArray<DeepReadonly10248<T>> {}

type DeepReadonlyObject10248<T> = {
  readonly [P in keyof T]: DeepReadonly10248<T[P]>;
};

type UnionToIntersection10248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10248<T> = UnionToIntersection10248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10248<T extends unknown[], V> = [...T, V];

type TuplifyUnion10248<T, L = LastOf10248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10248<TuplifyUnion10248<Exclude<T, L>>, L>;

type DeepPartial10248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10248<T[P]> }
  : T;

type Paths10248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10248<K, Paths10248<T[K], Prev10248[D]>> : never }[keyof T]
  : never;

type Prev10248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10248 {
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

type ConfigPaths10248 = Paths10248<NestedConfig10248>;

interface HeavyProps10248 {
  config: DeepPartial10248<NestedConfig10248>;
  path?: ConfigPaths10248;
}

const HeavyComponent10248 = memo(function HeavyComponent10248({ config }: HeavyProps10248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10248.displayName = 'HeavyComponent10248';
export default HeavyComponent10248;

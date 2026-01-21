'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10048<T> = T extends (infer U)[]
  ? DeepReadonlyArray10048<U>
  : T extends object
  ? DeepReadonlyObject10048<T>
  : T;

interface DeepReadonlyArray10048<T> extends ReadonlyArray<DeepReadonly10048<T>> {}

type DeepReadonlyObject10048<T> = {
  readonly [P in keyof T]: DeepReadonly10048<T[P]>;
};

type UnionToIntersection10048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10048<T> = UnionToIntersection10048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10048<T extends unknown[], V> = [...T, V];

type TuplifyUnion10048<T, L = LastOf10048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10048<TuplifyUnion10048<Exclude<T, L>>, L>;

type DeepPartial10048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10048<T[P]> }
  : T;

type Paths10048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10048<K, Paths10048<T[K], Prev10048[D]>> : never }[keyof T]
  : never;

type Prev10048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10048 {
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

type ConfigPaths10048 = Paths10048<NestedConfig10048>;

interface HeavyProps10048 {
  config: DeepPartial10048<NestedConfig10048>;
  path?: ConfigPaths10048;
}

const HeavyComponent10048 = memo(function HeavyComponent10048({ config }: HeavyProps10048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10048.displayName = 'HeavyComponent10048';
export default HeavyComponent10048;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10585<T> = T extends (infer U)[]
  ? DeepReadonlyArray10585<U>
  : T extends object
  ? DeepReadonlyObject10585<T>
  : T;

interface DeepReadonlyArray10585<T> extends ReadonlyArray<DeepReadonly10585<T>> {}

type DeepReadonlyObject10585<T> = {
  readonly [P in keyof T]: DeepReadonly10585<T[P]>;
};

type UnionToIntersection10585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10585<T> = UnionToIntersection10585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10585<T extends unknown[], V> = [...T, V];

type TuplifyUnion10585<T, L = LastOf10585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10585<TuplifyUnion10585<Exclude<T, L>>, L>;

type DeepPartial10585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10585<T[P]> }
  : T;

type Paths10585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10585<K, Paths10585<T[K], Prev10585[D]>> : never }[keyof T]
  : never;

type Prev10585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10585 {
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

type ConfigPaths10585 = Paths10585<NestedConfig10585>;

interface HeavyProps10585 {
  config: DeepPartial10585<NestedConfig10585>;
  path?: ConfigPaths10585;
}

const HeavyComponent10585 = memo(function HeavyComponent10585({ config }: HeavyProps10585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10585.displayName = 'HeavyComponent10585';
export default HeavyComponent10585;

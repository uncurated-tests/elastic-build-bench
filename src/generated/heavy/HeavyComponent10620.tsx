'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10620<T> = T extends (infer U)[]
  ? DeepReadonlyArray10620<U>
  : T extends object
  ? DeepReadonlyObject10620<T>
  : T;

interface DeepReadonlyArray10620<T> extends ReadonlyArray<DeepReadonly10620<T>> {}

type DeepReadonlyObject10620<T> = {
  readonly [P in keyof T]: DeepReadonly10620<T[P]>;
};

type UnionToIntersection10620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10620<T> = UnionToIntersection10620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10620<T extends unknown[], V> = [...T, V];

type TuplifyUnion10620<T, L = LastOf10620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10620<TuplifyUnion10620<Exclude<T, L>>, L>;

type DeepPartial10620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10620<T[P]> }
  : T;

type Paths10620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10620<K, Paths10620<T[K], Prev10620[D]>> : never }[keyof T]
  : never;

type Prev10620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10620 {
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

type ConfigPaths10620 = Paths10620<NestedConfig10620>;

interface HeavyProps10620 {
  config: DeepPartial10620<NestedConfig10620>;
  path?: ConfigPaths10620;
}

const HeavyComponent10620 = memo(function HeavyComponent10620({ config }: HeavyProps10620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10620.displayName = 'HeavyComponent10620';
export default HeavyComponent10620;

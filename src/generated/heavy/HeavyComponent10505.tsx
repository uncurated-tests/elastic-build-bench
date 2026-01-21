'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10505<T> = T extends (infer U)[]
  ? DeepReadonlyArray10505<U>
  : T extends object
  ? DeepReadonlyObject10505<T>
  : T;

interface DeepReadonlyArray10505<T> extends ReadonlyArray<DeepReadonly10505<T>> {}

type DeepReadonlyObject10505<T> = {
  readonly [P in keyof T]: DeepReadonly10505<T[P]>;
};

type UnionToIntersection10505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10505<T> = UnionToIntersection10505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10505<T extends unknown[], V> = [...T, V];

type TuplifyUnion10505<T, L = LastOf10505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10505<TuplifyUnion10505<Exclude<T, L>>, L>;

type DeepPartial10505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10505<T[P]> }
  : T;

type Paths10505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10505<K, Paths10505<T[K], Prev10505[D]>> : never }[keyof T]
  : never;

type Prev10505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10505 {
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

type ConfigPaths10505 = Paths10505<NestedConfig10505>;

interface HeavyProps10505 {
  config: DeepPartial10505<NestedConfig10505>;
  path?: ConfigPaths10505;
}

const HeavyComponent10505 = memo(function HeavyComponent10505({ config }: HeavyProps10505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10505.displayName = 'HeavyComponent10505';
export default HeavyComponent10505;

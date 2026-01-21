'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10581<T> = T extends (infer U)[]
  ? DeepReadonlyArray10581<U>
  : T extends object
  ? DeepReadonlyObject10581<T>
  : T;

interface DeepReadonlyArray10581<T> extends ReadonlyArray<DeepReadonly10581<T>> {}

type DeepReadonlyObject10581<T> = {
  readonly [P in keyof T]: DeepReadonly10581<T[P]>;
};

type UnionToIntersection10581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10581<T> = UnionToIntersection10581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10581<T extends unknown[], V> = [...T, V];

type TuplifyUnion10581<T, L = LastOf10581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10581<TuplifyUnion10581<Exclude<T, L>>, L>;

type DeepPartial10581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10581<T[P]> }
  : T;

type Paths10581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10581<K, Paths10581<T[K], Prev10581[D]>> : never }[keyof T]
  : never;

type Prev10581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10581 {
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

type ConfigPaths10581 = Paths10581<NestedConfig10581>;

interface HeavyProps10581 {
  config: DeepPartial10581<NestedConfig10581>;
  path?: ConfigPaths10581;
}

const HeavyComponent10581 = memo(function HeavyComponent10581({ config }: HeavyProps10581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10581.displayName = 'HeavyComponent10581';
export default HeavyComponent10581;

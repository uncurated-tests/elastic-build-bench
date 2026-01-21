'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10320<T> = T extends (infer U)[]
  ? DeepReadonlyArray10320<U>
  : T extends object
  ? DeepReadonlyObject10320<T>
  : T;

interface DeepReadonlyArray10320<T> extends ReadonlyArray<DeepReadonly10320<T>> {}

type DeepReadonlyObject10320<T> = {
  readonly [P in keyof T]: DeepReadonly10320<T[P]>;
};

type UnionToIntersection10320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10320<T> = UnionToIntersection10320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10320<T extends unknown[], V> = [...T, V];

type TuplifyUnion10320<T, L = LastOf10320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10320<TuplifyUnion10320<Exclude<T, L>>, L>;

type DeepPartial10320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10320<T[P]> }
  : T;

type Paths10320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10320<K, Paths10320<T[K], Prev10320[D]>> : never }[keyof T]
  : never;

type Prev10320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10320 {
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

type ConfigPaths10320 = Paths10320<NestedConfig10320>;

interface HeavyProps10320 {
  config: DeepPartial10320<NestedConfig10320>;
  path?: ConfigPaths10320;
}

const HeavyComponent10320 = memo(function HeavyComponent10320({ config }: HeavyProps10320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10320.displayName = 'HeavyComponent10320';
export default HeavyComponent10320;

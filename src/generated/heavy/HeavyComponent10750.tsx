'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10750<T> = T extends (infer U)[]
  ? DeepReadonlyArray10750<U>
  : T extends object
  ? DeepReadonlyObject10750<T>
  : T;

interface DeepReadonlyArray10750<T> extends ReadonlyArray<DeepReadonly10750<T>> {}

type DeepReadonlyObject10750<T> = {
  readonly [P in keyof T]: DeepReadonly10750<T[P]>;
};

type UnionToIntersection10750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10750<T> = UnionToIntersection10750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10750<T extends unknown[], V> = [...T, V];

type TuplifyUnion10750<T, L = LastOf10750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10750<TuplifyUnion10750<Exclude<T, L>>, L>;

type DeepPartial10750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10750<T[P]> }
  : T;

type Paths10750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10750<K, Paths10750<T[K], Prev10750[D]>> : never }[keyof T]
  : never;

type Prev10750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10750 {
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

type ConfigPaths10750 = Paths10750<NestedConfig10750>;

interface HeavyProps10750 {
  config: DeepPartial10750<NestedConfig10750>;
  path?: ConfigPaths10750;
}

const HeavyComponent10750 = memo(function HeavyComponent10750({ config }: HeavyProps10750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10750.displayName = 'HeavyComponent10750';
export default HeavyComponent10750;

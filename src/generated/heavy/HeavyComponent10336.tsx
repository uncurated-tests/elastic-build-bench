'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10336<T> = T extends (infer U)[]
  ? DeepReadonlyArray10336<U>
  : T extends object
  ? DeepReadonlyObject10336<T>
  : T;

interface DeepReadonlyArray10336<T> extends ReadonlyArray<DeepReadonly10336<T>> {}

type DeepReadonlyObject10336<T> = {
  readonly [P in keyof T]: DeepReadonly10336<T[P]>;
};

type UnionToIntersection10336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10336<T> = UnionToIntersection10336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10336<T extends unknown[], V> = [...T, V];

type TuplifyUnion10336<T, L = LastOf10336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10336<TuplifyUnion10336<Exclude<T, L>>, L>;

type DeepPartial10336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10336<T[P]> }
  : T;

type Paths10336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10336<K, Paths10336<T[K], Prev10336[D]>> : never }[keyof T]
  : never;

type Prev10336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10336 {
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

type ConfigPaths10336 = Paths10336<NestedConfig10336>;

interface HeavyProps10336 {
  config: DeepPartial10336<NestedConfig10336>;
  path?: ConfigPaths10336;
}

const HeavyComponent10336 = memo(function HeavyComponent10336({ config }: HeavyProps10336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10336.displayName = 'HeavyComponent10336';
export default HeavyComponent10336;

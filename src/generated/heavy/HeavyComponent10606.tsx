'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10606<T> = T extends (infer U)[]
  ? DeepReadonlyArray10606<U>
  : T extends object
  ? DeepReadonlyObject10606<T>
  : T;

interface DeepReadonlyArray10606<T> extends ReadonlyArray<DeepReadonly10606<T>> {}

type DeepReadonlyObject10606<T> = {
  readonly [P in keyof T]: DeepReadonly10606<T[P]>;
};

type UnionToIntersection10606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10606<T> = UnionToIntersection10606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10606<T extends unknown[], V> = [...T, V];

type TuplifyUnion10606<T, L = LastOf10606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10606<TuplifyUnion10606<Exclude<T, L>>, L>;

type DeepPartial10606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10606<T[P]> }
  : T;

type Paths10606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10606<K, Paths10606<T[K], Prev10606[D]>> : never }[keyof T]
  : never;

type Prev10606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10606 {
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

type ConfigPaths10606 = Paths10606<NestedConfig10606>;

interface HeavyProps10606 {
  config: DeepPartial10606<NestedConfig10606>;
  path?: ConfigPaths10606;
}

const HeavyComponent10606 = memo(function HeavyComponent10606({ config }: HeavyProps10606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10606.displayName = 'HeavyComponent10606';
export default HeavyComponent10606;

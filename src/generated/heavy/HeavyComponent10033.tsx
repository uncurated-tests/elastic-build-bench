'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10033<T> = T extends (infer U)[]
  ? DeepReadonlyArray10033<U>
  : T extends object
  ? DeepReadonlyObject10033<T>
  : T;

interface DeepReadonlyArray10033<T> extends ReadonlyArray<DeepReadonly10033<T>> {}

type DeepReadonlyObject10033<T> = {
  readonly [P in keyof T]: DeepReadonly10033<T[P]>;
};

type UnionToIntersection10033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10033<T> = UnionToIntersection10033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10033<T extends unknown[], V> = [...T, V];

type TuplifyUnion10033<T, L = LastOf10033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10033<TuplifyUnion10033<Exclude<T, L>>, L>;

type DeepPartial10033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10033<T[P]> }
  : T;

type Paths10033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10033<K, Paths10033<T[K], Prev10033[D]>> : never }[keyof T]
  : never;

type Prev10033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10033 {
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

type ConfigPaths10033 = Paths10033<NestedConfig10033>;

interface HeavyProps10033 {
  config: DeepPartial10033<NestedConfig10033>;
  path?: ConfigPaths10033;
}

const HeavyComponent10033 = memo(function HeavyComponent10033({ config }: HeavyProps10033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10033.displayName = 'HeavyComponent10033';
export default HeavyComponent10033;

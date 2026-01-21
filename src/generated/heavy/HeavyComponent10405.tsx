'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10405<T> = T extends (infer U)[]
  ? DeepReadonlyArray10405<U>
  : T extends object
  ? DeepReadonlyObject10405<T>
  : T;

interface DeepReadonlyArray10405<T> extends ReadonlyArray<DeepReadonly10405<T>> {}

type DeepReadonlyObject10405<T> = {
  readonly [P in keyof T]: DeepReadonly10405<T[P]>;
};

type UnionToIntersection10405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10405<T> = UnionToIntersection10405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10405<T extends unknown[], V> = [...T, V];

type TuplifyUnion10405<T, L = LastOf10405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10405<TuplifyUnion10405<Exclude<T, L>>, L>;

type DeepPartial10405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10405<T[P]> }
  : T;

type Paths10405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10405<K, Paths10405<T[K], Prev10405[D]>> : never }[keyof T]
  : never;

type Prev10405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10405 {
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

type ConfigPaths10405 = Paths10405<NestedConfig10405>;

interface HeavyProps10405 {
  config: DeepPartial10405<NestedConfig10405>;
  path?: ConfigPaths10405;
}

const HeavyComponent10405 = memo(function HeavyComponent10405({ config }: HeavyProps10405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10405.displayName = 'HeavyComponent10405';
export default HeavyComponent10405;

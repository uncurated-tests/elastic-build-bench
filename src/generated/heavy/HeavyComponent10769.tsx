'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10769<T> = T extends (infer U)[]
  ? DeepReadonlyArray10769<U>
  : T extends object
  ? DeepReadonlyObject10769<T>
  : T;

interface DeepReadonlyArray10769<T> extends ReadonlyArray<DeepReadonly10769<T>> {}

type DeepReadonlyObject10769<T> = {
  readonly [P in keyof T]: DeepReadonly10769<T[P]>;
};

type UnionToIntersection10769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10769<T> = UnionToIntersection10769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10769<T extends unknown[], V> = [...T, V];

type TuplifyUnion10769<T, L = LastOf10769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10769<TuplifyUnion10769<Exclude<T, L>>, L>;

type DeepPartial10769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10769<T[P]> }
  : T;

type Paths10769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10769<K, Paths10769<T[K], Prev10769[D]>> : never }[keyof T]
  : never;

type Prev10769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10769 {
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

type ConfigPaths10769 = Paths10769<NestedConfig10769>;

interface HeavyProps10769 {
  config: DeepPartial10769<NestedConfig10769>;
  path?: ConfigPaths10769;
}

const HeavyComponent10769 = memo(function HeavyComponent10769({ config }: HeavyProps10769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10769.displayName = 'HeavyComponent10769';
export default HeavyComponent10769;

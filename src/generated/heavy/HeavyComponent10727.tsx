'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10727<T> = T extends (infer U)[]
  ? DeepReadonlyArray10727<U>
  : T extends object
  ? DeepReadonlyObject10727<T>
  : T;

interface DeepReadonlyArray10727<T> extends ReadonlyArray<DeepReadonly10727<T>> {}

type DeepReadonlyObject10727<T> = {
  readonly [P in keyof T]: DeepReadonly10727<T[P]>;
};

type UnionToIntersection10727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10727<T> = UnionToIntersection10727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10727<T extends unknown[], V> = [...T, V];

type TuplifyUnion10727<T, L = LastOf10727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10727<TuplifyUnion10727<Exclude<T, L>>, L>;

type DeepPartial10727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10727<T[P]> }
  : T;

type Paths10727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10727<K, Paths10727<T[K], Prev10727[D]>> : never }[keyof T]
  : never;

type Prev10727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10727 {
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

type ConfigPaths10727 = Paths10727<NestedConfig10727>;

interface HeavyProps10727 {
  config: DeepPartial10727<NestedConfig10727>;
  path?: ConfigPaths10727;
}

const HeavyComponent10727 = memo(function HeavyComponent10727({ config }: HeavyProps10727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10727.displayName = 'HeavyComponent10727';
export default HeavyComponent10727;

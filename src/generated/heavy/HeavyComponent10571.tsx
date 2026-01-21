'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10571<T> = T extends (infer U)[]
  ? DeepReadonlyArray10571<U>
  : T extends object
  ? DeepReadonlyObject10571<T>
  : T;

interface DeepReadonlyArray10571<T> extends ReadonlyArray<DeepReadonly10571<T>> {}

type DeepReadonlyObject10571<T> = {
  readonly [P in keyof T]: DeepReadonly10571<T[P]>;
};

type UnionToIntersection10571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10571<T> = UnionToIntersection10571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10571<T extends unknown[], V> = [...T, V];

type TuplifyUnion10571<T, L = LastOf10571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10571<TuplifyUnion10571<Exclude<T, L>>, L>;

type DeepPartial10571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10571<T[P]> }
  : T;

type Paths10571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10571<K, Paths10571<T[K], Prev10571[D]>> : never }[keyof T]
  : never;

type Prev10571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10571 {
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

type ConfigPaths10571 = Paths10571<NestedConfig10571>;

interface HeavyProps10571 {
  config: DeepPartial10571<NestedConfig10571>;
  path?: ConfigPaths10571;
}

const HeavyComponent10571 = memo(function HeavyComponent10571({ config }: HeavyProps10571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10571.displayName = 'HeavyComponent10571';
export default HeavyComponent10571;

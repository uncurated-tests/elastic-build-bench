'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10945<T> = T extends (infer U)[]
  ? DeepReadonlyArray10945<U>
  : T extends object
  ? DeepReadonlyObject10945<T>
  : T;

interface DeepReadonlyArray10945<T> extends ReadonlyArray<DeepReadonly10945<T>> {}

type DeepReadonlyObject10945<T> = {
  readonly [P in keyof T]: DeepReadonly10945<T[P]>;
};

type UnionToIntersection10945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10945<T> = UnionToIntersection10945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10945<T extends unknown[], V> = [...T, V];

type TuplifyUnion10945<T, L = LastOf10945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10945<TuplifyUnion10945<Exclude<T, L>>, L>;

type DeepPartial10945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10945<T[P]> }
  : T;

type Paths10945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10945<K, Paths10945<T[K], Prev10945[D]>> : never }[keyof T]
  : never;

type Prev10945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10945 {
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

type ConfigPaths10945 = Paths10945<NestedConfig10945>;

interface HeavyProps10945 {
  config: DeepPartial10945<NestedConfig10945>;
  path?: ConfigPaths10945;
}

const HeavyComponent10945 = memo(function HeavyComponent10945({ config }: HeavyProps10945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10945.displayName = 'HeavyComponent10945';
export default HeavyComponent10945;

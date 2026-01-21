'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10959<T> = T extends (infer U)[]
  ? DeepReadonlyArray10959<U>
  : T extends object
  ? DeepReadonlyObject10959<T>
  : T;

interface DeepReadonlyArray10959<T> extends ReadonlyArray<DeepReadonly10959<T>> {}

type DeepReadonlyObject10959<T> = {
  readonly [P in keyof T]: DeepReadonly10959<T[P]>;
};

type UnionToIntersection10959<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10959<T> = UnionToIntersection10959<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10959<T extends unknown[], V> = [...T, V];

type TuplifyUnion10959<T, L = LastOf10959<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10959<TuplifyUnion10959<Exclude<T, L>>, L>;

type DeepPartial10959<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10959<T[P]> }
  : T;

type Paths10959<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10959<K, Paths10959<T[K], Prev10959[D]>> : never }[keyof T]
  : never;

type Prev10959 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10959<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10959 {
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

type ConfigPaths10959 = Paths10959<NestedConfig10959>;

interface HeavyProps10959 {
  config: DeepPartial10959<NestedConfig10959>;
  path?: ConfigPaths10959;
}

const HeavyComponent10959 = memo(function HeavyComponent10959({ config }: HeavyProps10959) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10959) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10959 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10959: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10959.displayName = 'HeavyComponent10959';
export default HeavyComponent10959;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10623<T> = T extends (infer U)[]
  ? DeepReadonlyArray10623<U>
  : T extends object
  ? DeepReadonlyObject10623<T>
  : T;

interface DeepReadonlyArray10623<T> extends ReadonlyArray<DeepReadonly10623<T>> {}

type DeepReadonlyObject10623<T> = {
  readonly [P in keyof T]: DeepReadonly10623<T[P]>;
};

type UnionToIntersection10623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10623<T> = UnionToIntersection10623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10623<T extends unknown[], V> = [...T, V];

type TuplifyUnion10623<T, L = LastOf10623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10623<TuplifyUnion10623<Exclude<T, L>>, L>;

type DeepPartial10623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10623<T[P]> }
  : T;

type Paths10623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10623<K, Paths10623<T[K], Prev10623[D]>> : never }[keyof T]
  : never;

type Prev10623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10623 {
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

type ConfigPaths10623 = Paths10623<NestedConfig10623>;

interface HeavyProps10623 {
  config: DeepPartial10623<NestedConfig10623>;
  path?: ConfigPaths10623;
}

const HeavyComponent10623 = memo(function HeavyComponent10623({ config }: HeavyProps10623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10623.displayName = 'HeavyComponent10623';
export default HeavyComponent10623;

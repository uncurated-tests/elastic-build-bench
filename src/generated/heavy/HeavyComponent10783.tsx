'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10783<T> = T extends (infer U)[]
  ? DeepReadonlyArray10783<U>
  : T extends object
  ? DeepReadonlyObject10783<T>
  : T;

interface DeepReadonlyArray10783<T> extends ReadonlyArray<DeepReadonly10783<T>> {}

type DeepReadonlyObject10783<T> = {
  readonly [P in keyof T]: DeepReadonly10783<T[P]>;
};

type UnionToIntersection10783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10783<T> = UnionToIntersection10783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10783<T extends unknown[], V> = [...T, V];

type TuplifyUnion10783<T, L = LastOf10783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10783<TuplifyUnion10783<Exclude<T, L>>, L>;

type DeepPartial10783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10783<T[P]> }
  : T;

type Paths10783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10783<K, Paths10783<T[K], Prev10783[D]>> : never }[keyof T]
  : never;

type Prev10783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10783 {
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

type ConfigPaths10783 = Paths10783<NestedConfig10783>;

interface HeavyProps10783 {
  config: DeepPartial10783<NestedConfig10783>;
  path?: ConfigPaths10783;
}

const HeavyComponent10783 = memo(function HeavyComponent10783({ config }: HeavyProps10783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10783.displayName = 'HeavyComponent10783';
export default HeavyComponent10783;

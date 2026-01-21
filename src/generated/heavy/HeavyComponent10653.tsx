'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10653<T> = T extends (infer U)[]
  ? DeepReadonlyArray10653<U>
  : T extends object
  ? DeepReadonlyObject10653<T>
  : T;

interface DeepReadonlyArray10653<T> extends ReadonlyArray<DeepReadonly10653<T>> {}

type DeepReadonlyObject10653<T> = {
  readonly [P in keyof T]: DeepReadonly10653<T[P]>;
};

type UnionToIntersection10653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10653<T> = UnionToIntersection10653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10653<T extends unknown[], V> = [...T, V];

type TuplifyUnion10653<T, L = LastOf10653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10653<TuplifyUnion10653<Exclude<T, L>>, L>;

type DeepPartial10653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10653<T[P]> }
  : T;

type Paths10653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10653<K, Paths10653<T[K], Prev10653[D]>> : never }[keyof T]
  : never;

type Prev10653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10653 {
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

type ConfigPaths10653 = Paths10653<NestedConfig10653>;

interface HeavyProps10653 {
  config: DeepPartial10653<NestedConfig10653>;
  path?: ConfigPaths10653;
}

const HeavyComponent10653 = memo(function HeavyComponent10653({ config }: HeavyProps10653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10653.displayName = 'HeavyComponent10653';
export default HeavyComponent10653;

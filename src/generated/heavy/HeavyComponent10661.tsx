'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10661<T> = T extends (infer U)[]
  ? DeepReadonlyArray10661<U>
  : T extends object
  ? DeepReadonlyObject10661<T>
  : T;

interface DeepReadonlyArray10661<T> extends ReadonlyArray<DeepReadonly10661<T>> {}

type DeepReadonlyObject10661<T> = {
  readonly [P in keyof T]: DeepReadonly10661<T[P]>;
};

type UnionToIntersection10661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10661<T> = UnionToIntersection10661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10661<T extends unknown[], V> = [...T, V];

type TuplifyUnion10661<T, L = LastOf10661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10661<TuplifyUnion10661<Exclude<T, L>>, L>;

type DeepPartial10661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10661<T[P]> }
  : T;

type Paths10661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10661<K, Paths10661<T[K], Prev10661[D]>> : never }[keyof T]
  : never;

type Prev10661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10661 {
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

type ConfigPaths10661 = Paths10661<NestedConfig10661>;

interface HeavyProps10661 {
  config: DeepPartial10661<NestedConfig10661>;
  path?: ConfigPaths10661;
}

const HeavyComponent10661 = memo(function HeavyComponent10661({ config }: HeavyProps10661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10661.displayName = 'HeavyComponent10661';
export default HeavyComponent10661;

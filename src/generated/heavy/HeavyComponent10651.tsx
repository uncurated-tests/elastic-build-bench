'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10651<T> = T extends (infer U)[]
  ? DeepReadonlyArray10651<U>
  : T extends object
  ? DeepReadonlyObject10651<T>
  : T;

interface DeepReadonlyArray10651<T> extends ReadonlyArray<DeepReadonly10651<T>> {}

type DeepReadonlyObject10651<T> = {
  readonly [P in keyof T]: DeepReadonly10651<T[P]>;
};

type UnionToIntersection10651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10651<T> = UnionToIntersection10651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10651<T extends unknown[], V> = [...T, V];

type TuplifyUnion10651<T, L = LastOf10651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10651<TuplifyUnion10651<Exclude<T, L>>, L>;

type DeepPartial10651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10651<T[P]> }
  : T;

type Paths10651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10651<K, Paths10651<T[K], Prev10651[D]>> : never }[keyof T]
  : never;

type Prev10651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10651 {
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

type ConfigPaths10651 = Paths10651<NestedConfig10651>;

interface HeavyProps10651 {
  config: DeepPartial10651<NestedConfig10651>;
  path?: ConfigPaths10651;
}

const HeavyComponent10651 = memo(function HeavyComponent10651({ config }: HeavyProps10651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10651.displayName = 'HeavyComponent10651';
export default HeavyComponent10651;

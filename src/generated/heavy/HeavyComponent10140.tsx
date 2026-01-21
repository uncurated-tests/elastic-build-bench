'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10140<T> = T extends (infer U)[]
  ? DeepReadonlyArray10140<U>
  : T extends object
  ? DeepReadonlyObject10140<T>
  : T;

interface DeepReadonlyArray10140<T> extends ReadonlyArray<DeepReadonly10140<T>> {}

type DeepReadonlyObject10140<T> = {
  readonly [P in keyof T]: DeepReadonly10140<T[P]>;
};

type UnionToIntersection10140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10140<T> = UnionToIntersection10140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10140<T extends unknown[], V> = [...T, V];

type TuplifyUnion10140<T, L = LastOf10140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10140<TuplifyUnion10140<Exclude<T, L>>, L>;

type DeepPartial10140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10140<T[P]> }
  : T;

type Paths10140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10140<K, Paths10140<T[K], Prev10140[D]>> : never }[keyof T]
  : never;

type Prev10140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10140 {
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

type ConfigPaths10140 = Paths10140<NestedConfig10140>;

interface HeavyProps10140 {
  config: DeepPartial10140<NestedConfig10140>;
  path?: ConfigPaths10140;
}

const HeavyComponent10140 = memo(function HeavyComponent10140({ config }: HeavyProps10140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10140.displayName = 'HeavyComponent10140';
export default HeavyComponent10140;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10533<T> = T extends (infer U)[]
  ? DeepReadonlyArray10533<U>
  : T extends object
  ? DeepReadonlyObject10533<T>
  : T;

interface DeepReadonlyArray10533<T> extends ReadonlyArray<DeepReadonly10533<T>> {}

type DeepReadonlyObject10533<T> = {
  readonly [P in keyof T]: DeepReadonly10533<T[P]>;
};

type UnionToIntersection10533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10533<T> = UnionToIntersection10533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10533<T extends unknown[], V> = [...T, V];

type TuplifyUnion10533<T, L = LastOf10533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10533<TuplifyUnion10533<Exclude<T, L>>, L>;

type DeepPartial10533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10533<T[P]> }
  : T;

type Paths10533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10533<K, Paths10533<T[K], Prev10533[D]>> : never }[keyof T]
  : never;

type Prev10533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10533 {
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

type ConfigPaths10533 = Paths10533<NestedConfig10533>;

interface HeavyProps10533 {
  config: DeepPartial10533<NestedConfig10533>;
  path?: ConfigPaths10533;
}

const HeavyComponent10533 = memo(function HeavyComponent10533({ config }: HeavyProps10533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10533.displayName = 'HeavyComponent10533';
export default HeavyComponent10533;

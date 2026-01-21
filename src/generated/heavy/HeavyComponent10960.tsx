'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10960<T> = T extends (infer U)[]
  ? DeepReadonlyArray10960<U>
  : T extends object
  ? DeepReadonlyObject10960<T>
  : T;

interface DeepReadonlyArray10960<T> extends ReadonlyArray<DeepReadonly10960<T>> {}

type DeepReadonlyObject10960<T> = {
  readonly [P in keyof T]: DeepReadonly10960<T[P]>;
};

type UnionToIntersection10960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10960<T> = UnionToIntersection10960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10960<T extends unknown[], V> = [...T, V];

type TuplifyUnion10960<T, L = LastOf10960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10960<TuplifyUnion10960<Exclude<T, L>>, L>;

type DeepPartial10960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10960<T[P]> }
  : T;

type Paths10960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10960<K, Paths10960<T[K], Prev10960[D]>> : never }[keyof T]
  : never;

type Prev10960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10960 {
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

type ConfigPaths10960 = Paths10960<NestedConfig10960>;

interface HeavyProps10960 {
  config: DeepPartial10960<NestedConfig10960>;
  path?: ConfigPaths10960;
}

const HeavyComponent10960 = memo(function HeavyComponent10960({ config }: HeavyProps10960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10960.displayName = 'HeavyComponent10960';
export default HeavyComponent10960;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10144<T> = T extends (infer U)[]
  ? DeepReadonlyArray10144<U>
  : T extends object
  ? DeepReadonlyObject10144<T>
  : T;

interface DeepReadonlyArray10144<T> extends ReadonlyArray<DeepReadonly10144<T>> {}

type DeepReadonlyObject10144<T> = {
  readonly [P in keyof T]: DeepReadonly10144<T[P]>;
};

type UnionToIntersection10144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10144<T> = UnionToIntersection10144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10144<T extends unknown[], V> = [...T, V];

type TuplifyUnion10144<T, L = LastOf10144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10144<TuplifyUnion10144<Exclude<T, L>>, L>;

type DeepPartial10144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10144<T[P]> }
  : T;

type Paths10144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10144<K, Paths10144<T[K], Prev10144[D]>> : never }[keyof T]
  : never;

type Prev10144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10144 {
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

type ConfigPaths10144 = Paths10144<NestedConfig10144>;

interface HeavyProps10144 {
  config: DeepPartial10144<NestedConfig10144>;
  path?: ConfigPaths10144;
}

const HeavyComponent10144 = memo(function HeavyComponent10144({ config }: HeavyProps10144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10144.displayName = 'HeavyComponent10144';
export default HeavyComponent10144;

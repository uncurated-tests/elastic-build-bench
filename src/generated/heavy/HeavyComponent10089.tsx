'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10089<T> = T extends (infer U)[]
  ? DeepReadonlyArray10089<U>
  : T extends object
  ? DeepReadonlyObject10089<T>
  : T;

interface DeepReadonlyArray10089<T> extends ReadonlyArray<DeepReadonly10089<T>> {}

type DeepReadonlyObject10089<T> = {
  readonly [P in keyof T]: DeepReadonly10089<T[P]>;
};

type UnionToIntersection10089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10089<T> = UnionToIntersection10089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10089<T extends unknown[], V> = [...T, V];

type TuplifyUnion10089<T, L = LastOf10089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10089<TuplifyUnion10089<Exclude<T, L>>, L>;

type DeepPartial10089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10089<T[P]> }
  : T;

type Paths10089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10089<K, Paths10089<T[K], Prev10089[D]>> : never }[keyof T]
  : never;

type Prev10089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10089 {
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

type ConfigPaths10089 = Paths10089<NestedConfig10089>;

interface HeavyProps10089 {
  config: DeepPartial10089<NestedConfig10089>;
  path?: ConfigPaths10089;
}

const HeavyComponent10089 = memo(function HeavyComponent10089({ config }: HeavyProps10089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10089.displayName = 'HeavyComponent10089';
export default HeavyComponent10089;

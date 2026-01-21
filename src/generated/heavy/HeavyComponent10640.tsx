'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10640<T> = T extends (infer U)[]
  ? DeepReadonlyArray10640<U>
  : T extends object
  ? DeepReadonlyObject10640<T>
  : T;

interface DeepReadonlyArray10640<T> extends ReadonlyArray<DeepReadonly10640<T>> {}

type DeepReadonlyObject10640<T> = {
  readonly [P in keyof T]: DeepReadonly10640<T[P]>;
};

type UnionToIntersection10640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10640<T> = UnionToIntersection10640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10640<T extends unknown[], V> = [...T, V];

type TuplifyUnion10640<T, L = LastOf10640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10640<TuplifyUnion10640<Exclude<T, L>>, L>;

type DeepPartial10640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10640<T[P]> }
  : T;

type Paths10640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10640<K, Paths10640<T[K], Prev10640[D]>> : never }[keyof T]
  : never;

type Prev10640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10640 {
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

type ConfigPaths10640 = Paths10640<NestedConfig10640>;

interface HeavyProps10640 {
  config: DeepPartial10640<NestedConfig10640>;
  path?: ConfigPaths10640;
}

const HeavyComponent10640 = memo(function HeavyComponent10640({ config }: HeavyProps10640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10640.displayName = 'HeavyComponent10640';
export default HeavyComponent10640;

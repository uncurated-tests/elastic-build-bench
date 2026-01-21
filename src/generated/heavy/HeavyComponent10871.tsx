'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10871<T> = T extends (infer U)[]
  ? DeepReadonlyArray10871<U>
  : T extends object
  ? DeepReadonlyObject10871<T>
  : T;

interface DeepReadonlyArray10871<T> extends ReadonlyArray<DeepReadonly10871<T>> {}

type DeepReadonlyObject10871<T> = {
  readonly [P in keyof T]: DeepReadonly10871<T[P]>;
};

type UnionToIntersection10871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10871<T> = UnionToIntersection10871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10871<T extends unknown[], V> = [...T, V];

type TuplifyUnion10871<T, L = LastOf10871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10871<TuplifyUnion10871<Exclude<T, L>>, L>;

type DeepPartial10871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10871<T[P]> }
  : T;

type Paths10871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10871<K, Paths10871<T[K], Prev10871[D]>> : never }[keyof T]
  : never;

type Prev10871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10871 {
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

type ConfigPaths10871 = Paths10871<NestedConfig10871>;

interface HeavyProps10871 {
  config: DeepPartial10871<NestedConfig10871>;
  path?: ConfigPaths10871;
}

const HeavyComponent10871 = memo(function HeavyComponent10871({ config }: HeavyProps10871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10871.displayName = 'HeavyComponent10871';
export default HeavyComponent10871;

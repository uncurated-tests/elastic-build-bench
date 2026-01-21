'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10913<T> = T extends (infer U)[]
  ? DeepReadonlyArray10913<U>
  : T extends object
  ? DeepReadonlyObject10913<T>
  : T;

interface DeepReadonlyArray10913<T> extends ReadonlyArray<DeepReadonly10913<T>> {}

type DeepReadonlyObject10913<T> = {
  readonly [P in keyof T]: DeepReadonly10913<T[P]>;
};

type UnionToIntersection10913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10913<T> = UnionToIntersection10913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10913<T extends unknown[], V> = [...T, V];

type TuplifyUnion10913<T, L = LastOf10913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10913<TuplifyUnion10913<Exclude<T, L>>, L>;

type DeepPartial10913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10913<T[P]> }
  : T;

type Paths10913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10913<K, Paths10913<T[K], Prev10913[D]>> : never }[keyof T]
  : never;

type Prev10913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10913 {
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

type ConfigPaths10913 = Paths10913<NestedConfig10913>;

interface HeavyProps10913 {
  config: DeepPartial10913<NestedConfig10913>;
  path?: ConfigPaths10913;
}

const HeavyComponent10913 = memo(function HeavyComponent10913({ config }: HeavyProps10913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10913.displayName = 'HeavyComponent10913';
export default HeavyComponent10913;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10321<T> = T extends (infer U)[]
  ? DeepReadonlyArray10321<U>
  : T extends object
  ? DeepReadonlyObject10321<T>
  : T;

interface DeepReadonlyArray10321<T> extends ReadonlyArray<DeepReadonly10321<T>> {}

type DeepReadonlyObject10321<T> = {
  readonly [P in keyof T]: DeepReadonly10321<T[P]>;
};

type UnionToIntersection10321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10321<T> = UnionToIntersection10321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10321<T extends unknown[], V> = [...T, V];

type TuplifyUnion10321<T, L = LastOf10321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10321<TuplifyUnion10321<Exclude<T, L>>, L>;

type DeepPartial10321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10321<T[P]> }
  : T;

type Paths10321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10321<K, Paths10321<T[K], Prev10321[D]>> : never }[keyof T]
  : never;

type Prev10321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10321 {
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

type ConfigPaths10321 = Paths10321<NestedConfig10321>;

interface HeavyProps10321 {
  config: DeepPartial10321<NestedConfig10321>;
  path?: ConfigPaths10321;
}

const HeavyComponent10321 = memo(function HeavyComponent10321({ config }: HeavyProps10321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10321.displayName = 'HeavyComponent10321';
export default HeavyComponent10321;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12574<T> = T extends (infer U)[]
  ? DeepReadonlyArray12574<U>
  : T extends object
  ? DeepReadonlyObject12574<T>
  : T;

interface DeepReadonlyArray12574<T> extends ReadonlyArray<DeepReadonly12574<T>> {}

type DeepReadonlyObject12574<T> = {
  readonly [P in keyof T]: DeepReadonly12574<T[P]>;
};

type UnionToIntersection12574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12574<T> = UnionToIntersection12574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12574<T extends unknown[], V> = [...T, V];

type TuplifyUnion12574<T, L = LastOf12574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12574<TuplifyUnion12574<Exclude<T, L>>, L>;

type DeepPartial12574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12574<T[P]> }
  : T;

type Paths12574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12574<K, Paths12574<T[K], Prev12574[D]>> : never }[keyof T]
  : never;

type Prev12574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12574 {
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

type ConfigPaths12574 = Paths12574<NestedConfig12574>;

interface HeavyProps12574 {
  config: DeepPartial12574<NestedConfig12574>;
  path?: ConfigPaths12574;
}

const HeavyComponent12574 = memo(function HeavyComponent12574({ config }: HeavyProps12574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12574.displayName = 'HeavyComponent12574';
export default HeavyComponent12574;

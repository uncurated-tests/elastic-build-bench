'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12224<T> = T extends (infer U)[]
  ? DeepReadonlyArray12224<U>
  : T extends object
  ? DeepReadonlyObject12224<T>
  : T;

interface DeepReadonlyArray12224<T> extends ReadonlyArray<DeepReadonly12224<T>> {}

type DeepReadonlyObject12224<T> = {
  readonly [P in keyof T]: DeepReadonly12224<T[P]>;
};

type UnionToIntersection12224<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12224<T> = UnionToIntersection12224<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12224<T extends unknown[], V> = [...T, V];

type TuplifyUnion12224<T, L = LastOf12224<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12224<TuplifyUnion12224<Exclude<T, L>>, L>;

type DeepPartial12224<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12224<T[P]> }
  : T;

type Paths12224<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12224<K, Paths12224<T[K], Prev12224[D]>> : never }[keyof T]
  : never;

type Prev12224 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12224<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12224 {
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

type ConfigPaths12224 = Paths12224<NestedConfig12224>;

interface HeavyProps12224 {
  config: DeepPartial12224<NestedConfig12224>;
  path?: ConfigPaths12224;
}

const HeavyComponent12224 = memo(function HeavyComponent12224({ config }: HeavyProps12224) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12224) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12224 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12224: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12224.displayName = 'HeavyComponent12224';
export default HeavyComponent12224;

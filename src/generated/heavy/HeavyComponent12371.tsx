'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12371<T> = T extends (infer U)[]
  ? DeepReadonlyArray12371<U>
  : T extends object
  ? DeepReadonlyObject12371<T>
  : T;

interface DeepReadonlyArray12371<T> extends ReadonlyArray<DeepReadonly12371<T>> {}

type DeepReadonlyObject12371<T> = {
  readonly [P in keyof T]: DeepReadonly12371<T[P]>;
};

type UnionToIntersection12371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12371<T> = UnionToIntersection12371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12371<T extends unknown[], V> = [...T, V];

type TuplifyUnion12371<T, L = LastOf12371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12371<TuplifyUnion12371<Exclude<T, L>>, L>;

type DeepPartial12371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12371<T[P]> }
  : T;

type Paths12371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12371<K, Paths12371<T[K], Prev12371[D]>> : never }[keyof T]
  : never;

type Prev12371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12371 {
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

type ConfigPaths12371 = Paths12371<NestedConfig12371>;

interface HeavyProps12371 {
  config: DeepPartial12371<NestedConfig12371>;
  path?: ConfigPaths12371;
}

const HeavyComponent12371 = memo(function HeavyComponent12371({ config }: HeavyProps12371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12371.displayName = 'HeavyComponent12371';
export default HeavyComponent12371;

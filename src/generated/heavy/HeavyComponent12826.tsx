'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12826<T> = T extends (infer U)[]
  ? DeepReadonlyArray12826<U>
  : T extends object
  ? DeepReadonlyObject12826<T>
  : T;

interface DeepReadonlyArray12826<T> extends ReadonlyArray<DeepReadonly12826<T>> {}

type DeepReadonlyObject12826<T> = {
  readonly [P in keyof T]: DeepReadonly12826<T[P]>;
};

type UnionToIntersection12826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12826<T> = UnionToIntersection12826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12826<T extends unknown[], V> = [...T, V];

type TuplifyUnion12826<T, L = LastOf12826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12826<TuplifyUnion12826<Exclude<T, L>>, L>;

type DeepPartial12826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12826<T[P]> }
  : T;

type Paths12826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12826<K, Paths12826<T[K], Prev12826[D]>> : never }[keyof T]
  : never;

type Prev12826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12826 {
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

type ConfigPaths12826 = Paths12826<NestedConfig12826>;

interface HeavyProps12826 {
  config: DeepPartial12826<NestedConfig12826>;
  path?: ConfigPaths12826;
}

const HeavyComponent12826 = memo(function HeavyComponent12826({ config }: HeavyProps12826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12826.displayName = 'HeavyComponent12826';
export default HeavyComponent12826;

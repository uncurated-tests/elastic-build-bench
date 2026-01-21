'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12378<T> = T extends (infer U)[]
  ? DeepReadonlyArray12378<U>
  : T extends object
  ? DeepReadonlyObject12378<T>
  : T;

interface DeepReadonlyArray12378<T> extends ReadonlyArray<DeepReadonly12378<T>> {}

type DeepReadonlyObject12378<T> = {
  readonly [P in keyof T]: DeepReadonly12378<T[P]>;
};

type UnionToIntersection12378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12378<T> = UnionToIntersection12378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12378<T extends unknown[], V> = [...T, V];

type TuplifyUnion12378<T, L = LastOf12378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12378<TuplifyUnion12378<Exclude<T, L>>, L>;

type DeepPartial12378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12378<T[P]> }
  : T;

type Paths12378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12378<K, Paths12378<T[K], Prev12378[D]>> : never }[keyof T]
  : never;

type Prev12378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12378 {
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

type ConfigPaths12378 = Paths12378<NestedConfig12378>;

interface HeavyProps12378 {
  config: DeepPartial12378<NestedConfig12378>;
  path?: ConfigPaths12378;
}

const HeavyComponent12378 = memo(function HeavyComponent12378({ config }: HeavyProps12378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12378.displayName = 'HeavyComponent12378';
export default HeavyComponent12378;

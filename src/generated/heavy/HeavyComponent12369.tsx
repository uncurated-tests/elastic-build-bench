'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12369<T> = T extends (infer U)[]
  ? DeepReadonlyArray12369<U>
  : T extends object
  ? DeepReadonlyObject12369<T>
  : T;

interface DeepReadonlyArray12369<T> extends ReadonlyArray<DeepReadonly12369<T>> {}

type DeepReadonlyObject12369<T> = {
  readonly [P in keyof T]: DeepReadonly12369<T[P]>;
};

type UnionToIntersection12369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12369<T> = UnionToIntersection12369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12369<T extends unknown[], V> = [...T, V];

type TuplifyUnion12369<T, L = LastOf12369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12369<TuplifyUnion12369<Exclude<T, L>>, L>;

type DeepPartial12369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12369<T[P]> }
  : T;

type Paths12369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12369<K, Paths12369<T[K], Prev12369[D]>> : never }[keyof T]
  : never;

type Prev12369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12369 {
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

type ConfigPaths12369 = Paths12369<NestedConfig12369>;

interface HeavyProps12369 {
  config: DeepPartial12369<NestedConfig12369>;
  path?: ConfigPaths12369;
}

const HeavyComponent12369 = memo(function HeavyComponent12369({ config }: HeavyProps12369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12369.displayName = 'HeavyComponent12369';
export default HeavyComponent12369;

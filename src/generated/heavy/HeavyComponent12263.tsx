'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12263<T> = T extends (infer U)[]
  ? DeepReadonlyArray12263<U>
  : T extends object
  ? DeepReadonlyObject12263<T>
  : T;

interface DeepReadonlyArray12263<T> extends ReadonlyArray<DeepReadonly12263<T>> {}

type DeepReadonlyObject12263<T> = {
  readonly [P in keyof T]: DeepReadonly12263<T[P]>;
};

type UnionToIntersection12263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12263<T> = UnionToIntersection12263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12263<T extends unknown[], V> = [...T, V];

type TuplifyUnion12263<T, L = LastOf12263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12263<TuplifyUnion12263<Exclude<T, L>>, L>;

type DeepPartial12263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12263<T[P]> }
  : T;

type Paths12263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12263<K, Paths12263<T[K], Prev12263[D]>> : never }[keyof T]
  : never;

type Prev12263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12263 {
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

type ConfigPaths12263 = Paths12263<NestedConfig12263>;

interface HeavyProps12263 {
  config: DeepPartial12263<NestedConfig12263>;
  path?: ConfigPaths12263;
}

const HeavyComponent12263 = memo(function HeavyComponent12263({ config }: HeavyProps12263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12263.displayName = 'HeavyComponent12263';
export default HeavyComponent12263;

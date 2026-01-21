'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12879<T> = T extends (infer U)[]
  ? DeepReadonlyArray12879<U>
  : T extends object
  ? DeepReadonlyObject12879<T>
  : T;

interface DeepReadonlyArray12879<T> extends ReadonlyArray<DeepReadonly12879<T>> {}

type DeepReadonlyObject12879<T> = {
  readonly [P in keyof T]: DeepReadonly12879<T[P]>;
};

type UnionToIntersection12879<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12879<T> = UnionToIntersection12879<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12879<T extends unknown[], V> = [...T, V];

type TuplifyUnion12879<T, L = LastOf12879<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12879<TuplifyUnion12879<Exclude<T, L>>, L>;

type DeepPartial12879<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12879<T[P]> }
  : T;

type Paths12879<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12879<K, Paths12879<T[K], Prev12879[D]>> : never }[keyof T]
  : never;

type Prev12879 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12879<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12879 {
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

type ConfigPaths12879 = Paths12879<NestedConfig12879>;

interface HeavyProps12879 {
  config: DeepPartial12879<NestedConfig12879>;
  path?: ConfigPaths12879;
}

const HeavyComponent12879 = memo(function HeavyComponent12879({ config }: HeavyProps12879) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12879) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12879 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12879: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12879.displayName = 'HeavyComponent12879';
export default HeavyComponent12879;

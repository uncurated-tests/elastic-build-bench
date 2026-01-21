'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12211<T> = T extends (infer U)[]
  ? DeepReadonlyArray12211<U>
  : T extends object
  ? DeepReadonlyObject12211<T>
  : T;

interface DeepReadonlyArray12211<T> extends ReadonlyArray<DeepReadonly12211<T>> {}

type DeepReadonlyObject12211<T> = {
  readonly [P in keyof T]: DeepReadonly12211<T[P]>;
};

type UnionToIntersection12211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12211<T> = UnionToIntersection12211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12211<T extends unknown[], V> = [...T, V];

type TuplifyUnion12211<T, L = LastOf12211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12211<TuplifyUnion12211<Exclude<T, L>>, L>;

type DeepPartial12211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12211<T[P]> }
  : T;

type Paths12211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12211<K, Paths12211<T[K], Prev12211[D]>> : never }[keyof T]
  : never;

type Prev12211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12211 {
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

type ConfigPaths12211 = Paths12211<NestedConfig12211>;

interface HeavyProps12211 {
  config: DeepPartial12211<NestedConfig12211>;
  path?: ConfigPaths12211;
}

const HeavyComponent12211 = memo(function HeavyComponent12211({ config }: HeavyProps12211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12211.displayName = 'HeavyComponent12211';
export default HeavyComponent12211;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12660<T> = T extends (infer U)[]
  ? DeepReadonlyArray12660<U>
  : T extends object
  ? DeepReadonlyObject12660<T>
  : T;

interface DeepReadonlyArray12660<T> extends ReadonlyArray<DeepReadonly12660<T>> {}

type DeepReadonlyObject12660<T> = {
  readonly [P in keyof T]: DeepReadonly12660<T[P]>;
};

type UnionToIntersection12660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12660<T> = UnionToIntersection12660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12660<T extends unknown[], V> = [...T, V];

type TuplifyUnion12660<T, L = LastOf12660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12660<TuplifyUnion12660<Exclude<T, L>>, L>;

type DeepPartial12660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12660<T[P]> }
  : T;

type Paths12660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12660<K, Paths12660<T[K], Prev12660[D]>> : never }[keyof T]
  : never;

type Prev12660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12660 {
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

type ConfigPaths12660 = Paths12660<NestedConfig12660>;

interface HeavyProps12660 {
  config: DeepPartial12660<NestedConfig12660>;
  path?: ConfigPaths12660;
}

const HeavyComponent12660 = memo(function HeavyComponent12660({ config }: HeavyProps12660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12660.displayName = 'HeavyComponent12660';
export default HeavyComponent12660;

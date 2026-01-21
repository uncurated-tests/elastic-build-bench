'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12058<T> = T extends (infer U)[]
  ? DeepReadonlyArray12058<U>
  : T extends object
  ? DeepReadonlyObject12058<T>
  : T;

interface DeepReadonlyArray12058<T> extends ReadonlyArray<DeepReadonly12058<T>> {}

type DeepReadonlyObject12058<T> = {
  readonly [P in keyof T]: DeepReadonly12058<T[P]>;
};

type UnionToIntersection12058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12058<T> = UnionToIntersection12058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12058<T extends unknown[], V> = [...T, V];

type TuplifyUnion12058<T, L = LastOf12058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12058<TuplifyUnion12058<Exclude<T, L>>, L>;

type DeepPartial12058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12058<T[P]> }
  : T;

type Paths12058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12058<K, Paths12058<T[K], Prev12058[D]>> : never }[keyof T]
  : never;

type Prev12058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12058 {
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

type ConfigPaths12058 = Paths12058<NestedConfig12058>;

interface HeavyProps12058 {
  config: DeepPartial12058<NestedConfig12058>;
  path?: ConfigPaths12058;
}

const HeavyComponent12058 = memo(function HeavyComponent12058({ config }: HeavyProps12058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12058.displayName = 'HeavyComponent12058';
export default HeavyComponent12058;

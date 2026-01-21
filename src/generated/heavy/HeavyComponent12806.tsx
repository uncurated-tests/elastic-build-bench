'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12806<T> = T extends (infer U)[]
  ? DeepReadonlyArray12806<U>
  : T extends object
  ? DeepReadonlyObject12806<T>
  : T;

interface DeepReadonlyArray12806<T> extends ReadonlyArray<DeepReadonly12806<T>> {}

type DeepReadonlyObject12806<T> = {
  readonly [P in keyof T]: DeepReadonly12806<T[P]>;
};

type UnionToIntersection12806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12806<T> = UnionToIntersection12806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12806<T extends unknown[], V> = [...T, V];

type TuplifyUnion12806<T, L = LastOf12806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12806<TuplifyUnion12806<Exclude<T, L>>, L>;

type DeepPartial12806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12806<T[P]> }
  : T;

type Paths12806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12806<K, Paths12806<T[K], Prev12806[D]>> : never }[keyof T]
  : never;

type Prev12806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12806 {
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

type ConfigPaths12806 = Paths12806<NestedConfig12806>;

interface HeavyProps12806 {
  config: DeepPartial12806<NestedConfig12806>;
  path?: ConfigPaths12806;
}

const HeavyComponent12806 = memo(function HeavyComponent12806({ config }: HeavyProps12806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12806.displayName = 'HeavyComponent12806';
export default HeavyComponent12806;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12481<T> = T extends (infer U)[]
  ? DeepReadonlyArray12481<U>
  : T extends object
  ? DeepReadonlyObject12481<T>
  : T;

interface DeepReadonlyArray12481<T> extends ReadonlyArray<DeepReadonly12481<T>> {}

type DeepReadonlyObject12481<T> = {
  readonly [P in keyof T]: DeepReadonly12481<T[P]>;
};

type UnionToIntersection12481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12481<T> = UnionToIntersection12481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12481<T extends unknown[], V> = [...T, V];

type TuplifyUnion12481<T, L = LastOf12481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12481<TuplifyUnion12481<Exclude<T, L>>, L>;

type DeepPartial12481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12481<T[P]> }
  : T;

type Paths12481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12481<K, Paths12481<T[K], Prev12481[D]>> : never }[keyof T]
  : never;

type Prev12481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12481 {
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

type ConfigPaths12481 = Paths12481<NestedConfig12481>;

interface HeavyProps12481 {
  config: DeepPartial12481<NestedConfig12481>;
  path?: ConfigPaths12481;
}

const HeavyComponent12481 = memo(function HeavyComponent12481({ config }: HeavyProps12481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12481.displayName = 'HeavyComponent12481';
export default HeavyComponent12481;

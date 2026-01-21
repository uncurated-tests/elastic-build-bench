'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12546<T> = T extends (infer U)[]
  ? DeepReadonlyArray12546<U>
  : T extends object
  ? DeepReadonlyObject12546<T>
  : T;

interface DeepReadonlyArray12546<T> extends ReadonlyArray<DeepReadonly12546<T>> {}

type DeepReadonlyObject12546<T> = {
  readonly [P in keyof T]: DeepReadonly12546<T[P]>;
};

type UnionToIntersection12546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12546<T> = UnionToIntersection12546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12546<T extends unknown[], V> = [...T, V];

type TuplifyUnion12546<T, L = LastOf12546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12546<TuplifyUnion12546<Exclude<T, L>>, L>;

type DeepPartial12546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12546<T[P]> }
  : T;

type Paths12546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12546<K, Paths12546<T[K], Prev12546[D]>> : never }[keyof T]
  : never;

type Prev12546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12546 {
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

type ConfigPaths12546 = Paths12546<NestedConfig12546>;

interface HeavyProps12546 {
  config: DeepPartial12546<NestedConfig12546>;
  path?: ConfigPaths12546;
}

const HeavyComponent12546 = memo(function HeavyComponent12546({ config }: HeavyProps12546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12546.displayName = 'HeavyComponent12546';
export default HeavyComponent12546;

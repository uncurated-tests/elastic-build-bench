'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12500<T> = T extends (infer U)[]
  ? DeepReadonlyArray12500<U>
  : T extends object
  ? DeepReadonlyObject12500<T>
  : T;

interface DeepReadonlyArray12500<T> extends ReadonlyArray<DeepReadonly12500<T>> {}

type DeepReadonlyObject12500<T> = {
  readonly [P in keyof T]: DeepReadonly12500<T[P]>;
};

type UnionToIntersection12500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12500<T> = UnionToIntersection12500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12500<T extends unknown[], V> = [...T, V];

type TuplifyUnion12500<T, L = LastOf12500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12500<TuplifyUnion12500<Exclude<T, L>>, L>;

type DeepPartial12500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12500<T[P]> }
  : T;

type Paths12500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12500<K, Paths12500<T[K], Prev12500[D]>> : never }[keyof T]
  : never;

type Prev12500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12500 {
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

type ConfigPaths12500 = Paths12500<NestedConfig12500>;

interface HeavyProps12500 {
  config: DeepPartial12500<NestedConfig12500>;
  path?: ConfigPaths12500;
}

const HeavyComponent12500 = memo(function HeavyComponent12500({ config }: HeavyProps12500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12500.displayName = 'HeavyComponent12500';
export default HeavyComponent12500;

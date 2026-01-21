'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12878<T> = T extends (infer U)[]
  ? DeepReadonlyArray12878<U>
  : T extends object
  ? DeepReadonlyObject12878<T>
  : T;

interface DeepReadonlyArray12878<T> extends ReadonlyArray<DeepReadonly12878<T>> {}

type DeepReadonlyObject12878<T> = {
  readonly [P in keyof T]: DeepReadonly12878<T[P]>;
};

type UnionToIntersection12878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12878<T> = UnionToIntersection12878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12878<T extends unknown[], V> = [...T, V];

type TuplifyUnion12878<T, L = LastOf12878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12878<TuplifyUnion12878<Exclude<T, L>>, L>;

type DeepPartial12878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12878<T[P]> }
  : T;

type Paths12878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12878<K, Paths12878<T[K], Prev12878[D]>> : never }[keyof T]
  : never;

type Prev12878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12878 {
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

type ConfigPaths12878 = Paths12878<NestedConfig12878>;

interface HeavyProps12878 {
  config: DeepPartial12878<NestedConfig12878>;
  path?: ConfigPaths12878;
}

const HeavyComponent12878 = memo(function HeavyComponent12878({ config }: HeavyProps12878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12878.displayName = 'HeavyComponent12878';
export default HeavyComponent12878;

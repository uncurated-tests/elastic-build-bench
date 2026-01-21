'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12655<T> = T extends (infer U)[]
  ? DeepReadonlyArray12655<U>
  : T extends object
  ? DeepReadonlyObject12655<T>
  : T;

interface DeepReadonlyArray12655<T> extends ReadonlyArray<DeepReadonly12655<T>> {}

type DeepReadonlyObject12655<T> = {
  readonly [P in keyof T]: DeepReadonly12655<T[P]>;
};

type UnionToIntersection12655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12655<T> = UnionToIntersection12655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12655<T extends unknown[], V> = [...T, V];

type TuplifyUnion12655<T, L = LastOf12655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12655<TuplifyUnion12655<Exclude<T, L>>, L>;

type DeepPartial12655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12655<T[P]> }
  : T;

type Paths12655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12655<K, Paths12655<T[K], Prev12655[D]>> : never }[keyof T]
  : never;

type Prev12655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12655 {
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

type ConfigPaths12655 = Paths12655<NestedConfig12655>;

interface HeavyProps12655 {
  config: DeepPartial12655<NestedConfig12655>;
  path?: ConfigPaths12655;
}

const HeavyComponent12655 = memo(function HeavyComponent12655({ config }: HeavyProps12655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12655.displayName = 'HeavyComponent12655';
export default HeavyComponent12655;

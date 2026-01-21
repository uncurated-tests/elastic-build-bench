'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12397<T> = T extends (infer U)[]
  ? DeepReadonlyArray12397<U>
  : T extends object
  ? DeepReadonlyObject12397<T>
  : T;

interface DeepReadonlyArray12397<T> extends ReadonlyArray<DeepReadonly12397<T>> {}

type DeepReadonlyObject12397<T> = {
  readonly [P in keyof T]: DeepReadonly12397<T[P]>;
};

type UnionToIntersection12397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12397<T> = UnionToIntersection12397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12397<T extends unknown[], V> = [...T, V];

type TuplifyUnion12397<T, L = LastOf12397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12397<TuplifyUnion12397<Exclude<T, L>>, L>;

type DeepPartial12397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12397<T[P]> }
  : T;

type Paths12397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12397<K, Paths12397<T[K], Prev12397[D]>> : never }[keyof T]
  : never;

type Prev12397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12397 {
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

type ConfigPaths12397 = Paths12397<NestedConfig12397>;

interface HeavyProps12397 {
  config: DeepPartial12397<NestedConfig12397>;
  path?: ConfigPaths12397;
}

const HeavyComponent12397 = memo(function HeavyComponent12397({ config }: HeavyProps12397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12397.displayName = 'HeavyComponent12397';
export default HeavyComponent12397;

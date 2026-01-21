'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12805<T> = T extends (infer U)[]
  ? DeepReadonlyArray12805<U>
  : T extends object
  ? DeepReadonlyObject12805<T>
  : T;

interface DeepReadonlyArray12805<T> extends ReadonlyArray<DeepReadonly12805<T>> {}

type DeepReadonlyObject12805<T> = {
  readonly [P in keyof T]: DeepReadonly12805<T[P]>;
};

type UnionToIntersection12805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12805<T> = UnionToIntersection12805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12805<T extends unknown[], V> = [...T, V];

type TuplifyUnion12805<T, L = LastOf12805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12805<TuplifyUnion12805<Exclude<T, L>>, L>;

type DeepPartial12805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12805<T[P]> }
  : T;

type Paths12805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12805<K, Paths12805<T[K], Prev12805[D]>> : never }[keyof T]
  : never;

type Prev12805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12805 {
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

type ConfigPaths12805 = Paths12805<NestedConfig12805>;

interface HeavyProps12805 {
  config: DeepPartial12805<NestedConfig12805>;
  path?: ConfigPaths12805;
}

const HeavyComponent12805 = memo(function HeavyComponent12805({ config }: HeavyProps12805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12805.displayName = 'HeavyComponent12805';
export default HeavyComponent12805;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12733<T> = T extends (infer U)[]
  ? DeepReadonlyArray12733<U>
  : T extends object
  ? DeepReadonlyObject12733<T>
  : T;

interface DeepReadonlyArray12733<T> extends ReadonlyArray<DeepReadonly12733<T>> {}

type DeepReadonlyObject12733<T> = {
  readonly [P in keyof T]: DeepReadonly12733<T[P]>;
};

type UnionToIntersection12733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12733<T> = UnionToIntersection12733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12733<T extends unknown[], V> = [...T, V];

type TuplifyUnion12733<T, L = LastOf12733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12733<TuplifyUnion12733<Exclude<T, L>>, L>;

type DeepPartial12733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12733<T[P]> }
  : T;

type Paths12733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12733<K, Paths12733<T[K], Prev12733[D]>> : never }[keyof T]
  : never;

type Prev12733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12733 {
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

type ConfigPaths12733 = Paths12733<NestedConfig12733>;

interface HeavyProps12733 {
  config: DeepPartial12733<NestedConfig12733>;
  path?: ConfigPaths12733;
}

const HeavyComponent12733 = memo(function HeavyComponent12733({ config }: HeavyProps12733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12733.displayName = 'HeavyComponent12733';
export default HeavyComponent12733;

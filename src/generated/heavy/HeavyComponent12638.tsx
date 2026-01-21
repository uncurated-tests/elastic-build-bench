'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12638<T> = T extends (infer U)[]
  ? DeepReadonlyArray12638<U>
  : T extends object
  ? DeepReadonlyObject12638<T>
  : T;

interface DeepReadonlyArray12638<T> extends ReadonlyArray<DeepReadonly12638<T>> {}

type DeepReadonlyObject12638<T> = {
  readonly [P in keyof T]: DeepReadonly12638<T[P]>;
};

type UnionToIntersection12638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12638<T> = UnionToIntersection12638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12638<T extends unknown[], V> = [...T, V];

type TuplifyUnion12638<T, L = LastOf12638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12638<TuplifyUnion12638<Exclude<T, L>>, L>;

type DeepPartial12638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12638<T[P]> }
  : T;

type Paths12638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12638<K, Paths12638<T[K], Prev12638[D]>> : never }[keyof T]
  : never;

type Prev12638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12638 {
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

type ConfigPaths12638 = Paths12638<NestedConfig12638>;

interface HeavyProps12638 {
  config: DeepPartial12638<NestedConfig12638>;
  path?: ConfigPaths12638;
}

const HeavyComponent12638 = memo(function HeavyComponent12638({ config }: HeavyProps12638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12638.displayName = 'HeavyComponent12638';
export default HeavyComponent12638;

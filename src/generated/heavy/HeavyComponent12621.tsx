'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12621<T> = T extends (infer U)[]
  ? DeepReadonlyArray12621<U>
  : T extends object
  ? DeepReadonlyObject12621<T>
  : T;

interface DeepReadonlyArray12621<T> extends ReadonlyArray<DeepReadonly12621<T>> {}

type DeepReadonlyObject12621<T> = {
  readonly [P in keyof T]: DeepReadonly12621<T[P]>;
};

type UnionToIntersection12621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12621<T> = UnionToIntersection12621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12621<T extends unknown[], V> = [...T, V];

type TuplifyUnion12621<T, L = LastOf12621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12621<TuplifyUnion12621<Exclude<T, L>>, L>;

type DeepPartial12621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12621<T[P]> }
  : T;

type Paths12621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12621<K, Paths12621<T[K], Prev12621[D]>> : never }[keyof T]
  : never;

type Prev12621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12621 {
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

type ConfigPaths12621 = Paths12621<NestedConfig12621>;

interface HeavyProps12621 {
  config: DeepPartial12621<NestedConfig12621>;
  path?: ConfigPaths12621;
}

const HeavyComponent12621 = memo(function HeavyComponent12621({ config }: HeavyProps12621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12621.displayName = 'HeavyComponent12621';
export default HeavyComponent12621;

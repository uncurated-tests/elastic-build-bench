'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12541<T> = T extends (infer U)[]
  ? DeepReadonlyArray12541<U>
  : T extends object
  ? DeepReadonlyObject12541<T>
  : T;

interface DeepReadonlyArray12541<T> extends ReadonlyArray<DeepReadonly12541<T>> {}

type DeepReadonlyObject12541<T> = {
  readonly [P in keyof T]: DeepReadonly12541<T[P]>;
};

type UnionToIntersection12541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12541<T> = UnionToIntersection12541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12541<T extends unknown[], V> = [...T, V];

type TuplifyUnion12541<T, L = LastOf12541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12541<TuplifyUnion12541<Exclude<T, L>>, L>;

type DeepPartial12541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12541<T[P]> }
  : T;

type Paths12541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12541<K, Paths12541<T[K], Prev12541[D]>> : never }[keyof T]
  : never;

type Prev12541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12541 {
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

type ConfigPaths12541 = Paths12541<NestedConfig12541>;

interface HeavyProps12541 {
  config: DeepPartial12541<NestedConfig12541>;
  path?: ConfigPaths12541;
}

const HeavyComponent12541 = memo(function HeavyComponent12541({ config }: HeavyProps12541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12541.displayName = 'HeavyComponent12541';
export default HeavyComponent12541;

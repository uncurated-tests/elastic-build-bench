'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12390<T> = T extends (infer U)[]
  ? DeepReadonlyArray12390<U>
  : T extends object
  ? DeepReadonlyObject12390<T>
  : T;

interface DeepReadonlyArray12390<T> extends ReadonlyArray<DeepReadonly12390<T>> {}

type DeepReadonlyObject12390<T> = {
  readonly [P in keyof T]: DeepReadonly12390<T[P]>;
};

type UnionToIntersection12390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12390<T> = UnionToIntersection12390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12390<T extends unknown[], V> = [...T, V];

type TuplifyUnion12390<T, L = LastOf12390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12390<TuplifyUnion12390<Exclude<T, L>>, L>;

type DeepPartial12390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12390<T[P]> }
  : T;

type Paths12390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12390<K, Paths12390<T[K], Prev12390[D]>> : never }[keyof T]
  : never;

type Prev12390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12390 {
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

type ConfigPaths12390 = Paths12390<NestedConfig12390>;

interface HeavyProps12390 {
  config: DeepPartial12390<NestedConfig12390>;
  path?: ConfigPaths12390;
}

const HeavyComponent12390 = memo(function HeavyComponent12390({ config }: HeavyProps12390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12390.displayName = 'HeavyComponent12390';
export default HeavyComponent12390;

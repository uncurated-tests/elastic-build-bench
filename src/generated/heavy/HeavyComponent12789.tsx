'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12789<T> = T extends (infer U)[]
  ? DeepReadonlyArray12789<U>
  : T extends object
  ? DeepReadonlyObject12789<T>
  : T;

interface DeepReadonlyArray12789<T> extends ReadonlyArray<DeepReadonly12789<T>> {}

type DeepReadonlyObject12789<T> = {
  readonly [P in keyof T]: DeepReadonly12789<T[P]>;
};

type UnionToIntersection12789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12789<T> = UnionToIntersection12789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12789<T extends unknown[], V> = [...T, V];

type TuplifyUnion12789<T, L = LastOf12789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12789<TuplifyUnion12789<Exclude<T, L>>, L>;

type DeepPartial12789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12789<T[P]> }
  : T;

type Paths12789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12789<K, Paths12789<T[K], Prev12789[D]>> : never }[keyof T]
  : never;

type Prev12789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12789 {
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

type ConfigPaths12789 = Paths12789<NestedConfig12789>;

interface HeavyProps12789 {
  config: DeepPartial12789<NestedConfig12789>;
  path?: ConfigPaths12789;
}

const HeavyComponent12789 = memo(function HeavyComponent12789({ config }: HeavyProps12789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12789.displayName = 'HeavyComponent12789';
export default HeavyComponent12789;

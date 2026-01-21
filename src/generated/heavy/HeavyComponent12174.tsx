'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12174<T> = T extends (infer U)[]
  ? DeepReadonlyArray12174<U>
  : T extends object
  ? DeepReadonlyObject12174<T>
  : T;

interface DeepReadonlyArray12174<T> extends ReadonlyArray<DeepReadonly12174<T>> {}

type DeepReadonlyObject12174<T> = {
  readonly [P in keyof T]: DeepReadonly12174<T[P]>;
};

type UnionToIntersection12174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12174<T> = UnionToIntersection12174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12174<T extends unknown[], V> = [...T, V];

type TuplifyUnion12174<T, L = LastOf12174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12174<TuplifyUnion12174<Exclude<T, L>>, L>;

type DeepPartial12174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12174<T[P]> }
  : T;

type Paths12174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12174<K, Paths12174<T[K], Prev12174[D]>> : never }[keyof T]
  : never;

type Prev12174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12174 {
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

type ConfigPaths12174 = Paths12174<NestedConfig12174>;

interface HeavyProps12174 {
  config: DeepPartial12174<NestedConfig12174>;
  path?: ConfigPaths12174;
}

const HeavyComponent12174 = memo(function HeavyComponent12174({ config }: HeavyProps12174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12174.displayName = 'HeavyComponent12174';
export default HeavyComponent12174;

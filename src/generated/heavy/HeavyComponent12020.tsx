'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12020<T> = T extends (infer U)[]
  ? DeepReadonlyArray12020<U>
  : T extends object
  ? DeepReadonlyObject12020<T>
  : T;

interface DeepReadonlyArray12020<T> extends ReadonlyArray<DeepReadonly12020<T>> {}

type DeepReadonlyObject12020<T> = {
  readonly [P in keyof T]: DeepReadonly12020<T[P]>;
};

type UnionToIntersection12020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12020<T> = UnionToIntersection12020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12020<T extends unknown[], V> = [...T, V];

type TuplifyUnion12020<T, L = LastOf12020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12020<TuplifyUnion12020<Exclude<T, L>>, L>;

type DeepPartial12020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12020<T[P]> }
  : T;

type Paths12020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12020<K, Paths12020<T[K], Prev12020[D]>> : never }[keyof T]
  : never;

type Prev12020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12020 {
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

type ConfigPaths12020 = Paths12020<NestedConfig12020>;

interface HeavyProps12020 {
  config: DeepPartial12020<NestedConfig12020>;
  path?: ConfigPaths12020;
}

const HeavyComponent12020 = memo(function HeavyComponent12020({ config }: HeavyProps12020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12020.displayName = 'HeavyComponent12020';
export default HeavyComponent12020;

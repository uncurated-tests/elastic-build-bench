'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12836<T> = T extends (infer U)[]
  ? DeepReadonlyArray12836<U>
  : T extends object
  ? DeepReadonlyObject12836<T>
  : T;

interface DeepReadonlyArray12836<T> extends ReadonlyArray<DeepReadonly12836<T>> {}

type DeepReadonlyObject12836<T> = {
  readonly [P in keyof T]: DeepReadonly12836<T[P]>;
};

type UnionToIntersection12836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12836<T> = UnionToIntersection12836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12836<T extends unknown[], V> = [...T, V];

type TuplifyUnion12836<T, L = LastOf12836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12836<TuplifyUnion12836<Exclude<T, L>>, L>;

type DeepPartial12836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12836<T[P]> }
  : T;

type Paths12836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12836<K, Paths12836<T[K], Prev12836[D]>> : never }[keyof T]
  : never;

type Prev12836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12836 {
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

type ConfigPaths12836 = Paths12836<NestedConfig12836>;

interface HeavyProps12836 {
  config: DeepPartial12836<NestedConfig12836>;
  path?: ConfigPaths12836;
}

const HeavyComponent12836 = memo(function HeavyComponent12836({ config }: HeavyProps12836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12836.displayName = 'HeavyComponent12836';
export default HeavyComponent12836;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12118<T> = T extends (infer U)[]
  ? DeepReadonlyArray12118<U>
  : T extends object
  ? DeepReadonlyObject12118<T>
  : T;

interface DeepReadonlyArray12118<T> extends ReadonlyArray<DeepReadonly12118<T>> {}

type DeepReadonlyObject12118<T> = {
  readonly [P in keyof T]: DeepReadonly12118<T[P]>;
};

type UnionToIntersection12118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12118<T> = UnionToIntersection12118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12118<T extends unknown[], V> = [...T, V];

type TuplifyUnion12118<T, L = LastOf12118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12118<TuplifyUnion12118<Exclude<T, L>>, L>;

type DeepPartial12118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12118<T[P]> }
  : T;

type Paths12118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12118<K, Paths12118<T[K], Prev12118[D]>> : never }[keyof T]
  : never;

type Prev12118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12118 {
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

type ConfigPaths12118 = Paths12118<NestedConfig12118>;

interface HeavyProps12118 {
  config: DeepPartial12118<NestedConfig12118>;
  path?: ConfigPaths12118;
}

const HeavyComponent12118 = memo(function HeavyComponent12118({ config }: HeavyProps12118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12118.displayName = 'HeavyComponent12118';
export default HeavyComponent12118;

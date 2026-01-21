'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12080<T> = T extends (infer U)[]
  ? DeepReadonlyArray12080<U>
  : T extends object
  ? DeepReadonlyObject12080<T>
  : T;

interface DeepReadonlyArray12080<T> extends ReadonlyArray<DeepReadonly12080<T>> {}

type DeepReadonlyObject12080<T> = {
  readonly [P in keyof T]: DeepReadonly12080<T[P]>;
};

type UnionToIntersection12080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12080<T> = UnionToIntersection12080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12080<T extends unknown[], V> = [...T, V];

type TuplifyUnion12080<T, L = LastOf12080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12080<TuplifyUnion12080<Exclude<T, L>>, L>;

type DeepPartial12080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12080<T[P]> }
  : T;

type Paths12080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12080<K, Paths12080<T[K], Prev12080[D]>> : never }[keyof T]
  : never;

type Prev12080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12080 {
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

type ConfigPaths12080 = Paths12080<NestedConfig12080>;

interface HeavyProps12080 {
  config: DeepPartial12080<NestedConfig12080>;
  path?: ConfigPaths12080;
}

const HeavyComponent12080 = memo(function HeavyComponent12080({ config }: HeavyProps12080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12080.displayName = 'HeavyComponent12080';
export default HeavyComponent12080;

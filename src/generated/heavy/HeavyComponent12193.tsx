'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12193<T> = T extends (infer U)[]
  ? DeepReadonlyArray12193<U>
  : T extends object
  ? DeepReadonlyObject12193<T>
  : T;

interface DeepReadonlyArray12193<T> extends ReadonlyArray<DeepReadonly12193<T>> {}

type DeepReadonlyObject12193<T> = {
  readonly [P in keyof T]: DeepReadonly12193<T[P]>;
};

type UnionToIntersection12193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12193<T> = UnionToIntersection12193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12193<T extends unknown[], V> = [...T, V];

type TuplifyUnion12193<T, L = LastOf12193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12193<TuplifyUnion12193<Exclude<T, L>>, L>;

type DeepPartial12193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12193<T[P]> }
  : T;

type Paths12193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12193<K, Paths12193<T[K], Prev12193[D]>> : never }[keyof T]
  : never;

type Prev12193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12193 {
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

type ConfigPaths12193 = Paths12193<NestedConfig12193>;

interface HeavyProps12193 {
  config: DeepPartial12193<NestedConfig12193>;
  path?: ConfigPaths12193;
}

const HeavyComponent12193 = memo(function HeavyComponent12193({ config }: HeavyProps12193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12193.displayName = 'HeavyComponent12193';
export default HeavyComponent12193;

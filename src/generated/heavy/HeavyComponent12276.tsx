'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12276<T> = T extends (infer U)[]
  ? DeepReadonlyArray12276<U>
  : T extends object
  ? DeepReadonlyObject12276<T>
  : T;

interface DeepReadonlyArray12276<T> extends ReadonlyArray<DeepReadonly12276<T>> {}

type DeepReadonlyObject12276<T> = {
  readonly [P in keyof T]: DeepReadonly12276<T[P]>;
};

type UnionToIntersection12276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12276<T> = UnionToIntersection12276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12276<T extends unknown[], V> = [...T, V];

type TuplifyUnion12276<T, L = LastOf12276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12276<TuplifyUnion12276<Exclude<T, L>>, L>;

type DeepPartial12276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12276<T[P]> }
  : T;

type Paths12276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12276<K, Paths12276<T[K], Prev12276[D]>> : never }[keyof T]
  : never;

type Prev12276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12276 {
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

type ConfigPaths12276 = Paths12276<NestedConfig12276>;

interface HeavyProps12276 {
  config: DeepPartial12276<NestedConfig12276>;
  path?: ConfigPaths12276;
}

const HeavyComponent12276 = memo(function HeavyComponent12276({ config }: HeavyProps12276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12276.displayName = 'HeavyComponent12276';
export default HeavyComponent12276;

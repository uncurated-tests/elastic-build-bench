'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12026<T> = T extends (infer U)[]
  ? DeepReadonlyArray12026<U>
  : T extends object
  ? DeepReadonlyObject12026<T>
  : T;

interface DeepReadonlyArray12026<T> extends ReadonlyArray<DeepReadonly12026<T>> {}

type DeepReadonlyObject12026<T> = {
  readonly [P in keyof T]: DeepReadonly12026<T[P]>;
};

type UnionToIntersection12026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12026<T> = UnionToIntersection12026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12026<T extends unknown[], V> = [...T, V];

type TuplifyUnion12026<T, L = LastOf12026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12026<TuplifyUnion12026<Exclude<T, L>>, L>;

type DeepPartial12026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12026<T[P]> }
  : T;

type Paths12026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12026<K, Paths12026<T[K], Prev12026[D]>> : never }[keyof T]
  : never;

type Prev12026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12026 {
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

type ConfigPaths12026 = Paths12026<NestedConfig12026>;

interface HeavyProps12026 {
  config: DeepPartial12026<NestedConfig12026>;
  path?: ConfigPaths12026;
}

const HeavyComponent12026 = memo(function HeavyComponent12026({ config }: HeavyProps12026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12026.displayName = 'HeavyComponent12026';
export default HeavyComponent12026;

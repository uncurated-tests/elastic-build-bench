'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12914<T> = T extends (infer U)[]
  ? DeepReadonlyArray12914<U>
  : T extends object
  ? DeepReadonlyObject12914<T>
  : T;

interface DeepReadonlyArray12914<T> extends ReadonlyArray<DeepReadonly12914<T>> {}

type DeepReadonlyObject12914<T> = {
  readonly [P in keyof T]: DeepReadonly12914<T[P]>;
};

type UnionToIntersection12914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12914<T> = UnionToIntersection12914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12914<T extends unknown[], V> = [...T, V];

type TuplifyUnion12914<T, L = LastOf12914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12914<TuplifyUnion12914<Exclude<T, L>>, L>;

type DeepPartial12914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12914<T[P]> }
  : T;

type Paths12914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12914<K, Paths12914<T[K], Prev12914[D]>> : never }[keyof T]
  : never;

type Prev12914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12914 {
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

type ConfigPaths12914 = Paths12914<NestedConfig12914>;

interface HeavyProps12914 {
  config: DeepPartial12914<NestedConfig12914>;
  path?: ConfigPaths12914;
}

const HeavyComponent12914 = memo(function HeavyComponent12914({ config }: HeavyProps12914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12914.displayName = 'HeavyComponent12914';
export default HeavyComponent12914;

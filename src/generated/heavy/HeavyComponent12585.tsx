'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12585<T> = T extends (infer U)[]
  ? DeepReadonlyArray12585<U>
  : T extends object
  ? DeepReadonlyObject12585<T>
  : T;

interface DeepReadonlyArray12585<T> extends ReadonlyArray<DeepReadonly12585<T>> {}

type DeepReadonlyObject12585<T> = {
  readonly [P in keyof T]: DeepReadonly12585<T[P]>;
};

type UnionToIntersection12585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12585<T> = UnionToIntersection12585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12585<T extends unknown[], V> = [...T, V];

type TuplifyUnion12585<T, L = LastOf12585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12585<TuplifyUnion12585<Exclude<T, L>>, L>;

type DeepPartial12585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12585<T[P]> }
  : T;

type Paths12585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12585<K, Paths12585<T[K], Prev12585[D]>> : never }[keyof T]
  : never;

type Prev12585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12585 {
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

type ConfigPaths12585 = Paths12585<NestedConfig12585>;

interface HeavyProps12585 {
  config: DeepPartial12585<NestedConfig12585>;
  path?: ConfigPaths12585;
}

const HeavyComponent12585 = memo(function HeavyComponent12585({ config }: HeavyProps12585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12585.displayName = 'HeavyComponent12585';
export default HeavyComponent12585;

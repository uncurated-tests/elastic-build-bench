'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12355<T> = T extends (infer U)[]
  ? DeepReadonlyArray12355<U>
  : T extends object
  ? DeepReadonlyObject12355<T>
  : T;

interface DeepReadonlyArray12355<T> extends ReadonlyArray<DeepReadonly12355<T>> {}

type DeepReadonlyObject12355<T> = {
  readonly [P in keyof T]: DeepReadonly12355<T[P]>;
};

type UnionToIntersection12355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12355<T> = UnionToIntersection12355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12355<T extends unknown[], V> = [...T, V];

type TuplifyUnion12355<T, L = LastOf12355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12355<TuplifyUnion12355<Exclude<T, L>>, L>;

type DeepPartial12355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12355<T[P]> }
  : T;

type Paths12355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12355<K, Paths12355<T[K], Prev12355[D]>> : never }[keyof T]
  : never;

type Prev12355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12355 {
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

type ConfigPaths12355 = Paths12355<NestedConfig12355>;

interface HeavyProps12355 {
  config: DeepPartial12355<NestedConfig12355>;
  path?: ConfigPaths12355;
}

const HeavyComponent12355 = memo(function HeavyComponent12355({ config }: HeavyProps12355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12355.displayName = 'HeavyComponent12355';
export default HeavyComponent12355;

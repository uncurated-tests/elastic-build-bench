'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12216<T> = T extends (infer U)[]
  ? DeepReadonlyArray12216<U>
  : T extends object
  ? DeepReadonlyObject12216<T>
  : T;

interface DeepReadonlyArray12216<T> extends ReadonlyArray<DeepReadonly12216<T>> {}

type DeepReadonlyObject12216<T> = {
  readonly [P in keyof T]: DeepReadonly12216<T[P]>;
};

type UnionToIntersection12216<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12216<T> = UnionToIntersection12216<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12216<T extends unknown[], V> = [...T, V];

type TuplifyUnion12216<T, L = LastOf12216<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12216<TuplifyUnion12216<Exclude<T, L>>, L>;

type DeepPartial12216<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12216<T[P]> }
  : T;

type Paths12216<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12216<K, Paths12216<T[K], Prev12216[D]>> : never }[keyof T]
  : never;

type Prev12216 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12216<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12216 {
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

type ConfigPaths12216 = Paths12216<NestedConfig12216>;

interface HeavyProps12216 {
  config: DeepPartial12216<NestedConfig12216>;
  path?: ConfigPaths12216;
}

const HeavyComponent12216 = memo(function HeavyComponent12216({ config }: HeavyProps12216) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12216) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12216 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12216: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12216.displayName = 'HeavyComponent12216';
export default HeavyComponent12216;

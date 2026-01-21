'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12007<T> = T extends (infer U)[]
  ? DeepReadonlyArray12007<U>
  : T extends object
  ? DeepReadonlyObject12007<T>
  : T;

interface DeepReadonlyArray12007<T> extends ReadonlyArray<DeepReadonly12007<T>> {}

type DeepReadonlyObject12007<T> = {
  readonly [P in keyof T]: DeepReadonly12007<T[P]>;
};

type UnionToIntersection12007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12007<T> = UnionToIntersection12007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12007<T extends unknown[], V> = [...T, V];

type TuplifyUnion12007<T, L = LastOf12007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12007<TuplifyUnion12007<Exclude<T, L>>, L>;

type DeepPartial12007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12007<T[P]> }
  : T;

type Paths12007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12007<K, Paths12007<T[K], Prev12007[D]>> : never }[keyof T]
  : never;

type Prev12007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12007 {
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

type ConfigPaths12007 = Paths12007<NestedConfig12007>;

interface HeavyProps12007 {
  config: DeepPartial12007<NestedConfig12007>;
  path?: ConfigPaths12007;
}

const HeavyComponent12007 = memo(function HeavyComponent12007({ config }: HeavyProps12007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12007.displayName = 'HeavyComponent12007';
export default HeavyComponent12007;

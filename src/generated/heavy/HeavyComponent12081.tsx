'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12081<T> = T extends (infer U)[]
  ? DeepReadonlyArray12081<U>
  : T extends object
  ? DeepReadonlyObject12081<T>
  : T;

interface DeepReadonlyArray12081<T> extends ReadonlyArray<DeepReadonly12081<T>> {}

type DeepReadonlyObject12081<T> = {
  readonly [P in keyof T]: DeepReadonly12081<T[P]>;
};

type UnionToIntersection12081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12081<T> = UnionToIntersection12081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12081<T extends unknown[], V> = [...T, V];

type TuplifyUnion12081<T, L = LastOf12081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12081<TuplifyUnion12081<Exclude<T, L>>, L>;

type DeepPartial12081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12081<T[P]> }
  : T;

type Paths12081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12081<K, Paths12081<T[K], Prev12081[D]>> : never }[keyof T]
  : never;

type Prev12081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12081 {
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

type ConfigPaths12081 = Paths12081<NestedConfig12081>;

interface HeavyProps12081 {
  config: DeepPartial12081<NestedConfig12081>;
  path?: ConfigPaths12081;
}

const HeavyComponent12081 = memo(function HeavyComponent12081({ config }: HeavyProps12081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12081.displayName = 'HeavyComponent12081';
export default HeavyComponent12081;

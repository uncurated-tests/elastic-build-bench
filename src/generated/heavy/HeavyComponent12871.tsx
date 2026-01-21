'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12871<T> = T extends (infer U)[]
  ? DeepReadonlyArray12871<U>
  : T extends object
  ? DeepReadonlyObject12871<T>
  : T;

interface DeepReadonlyArray12871<T> extends ReadonlyArray<DeepReadonly12871<T>> {}

type DeepReadonlyObject12871<T> = {
  readonly [P in keyof T]: DeepReadonly12871<T[P]>;
};

type UnionToIntersection12871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12871<T> = UnionToIntersection12871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12871<T extends unknown[], V> = [...T, V];

type TuplifyUnion12871<T, L = LastOf12871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12871<TuplifyUnion12871<Exclude<T, L>>, L>;

type DeepPartial12871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12871<T[P]> }
  : T;

type Paths12871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12871<K, Paths12871<T[K], Prev12871[D]>> : never }[keyof T]
  : never;

type Prev12871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12871 {
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

type ConfigPaths12871 = Paths12871<NestedConfig12871>;

interface HeavyProps12871 {
  config: DeepPartial12871<NestedConfig12871>;
  path?: ConfigPaths12871;
}

const HeavyComponent12871 = memo(function HeavyComponent12871({ config }: HeavyProps12871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12871.displayName = 'HeavyComponent12871';
export default HeavyComponent12871;

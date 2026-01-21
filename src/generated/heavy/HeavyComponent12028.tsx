'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12028<T> = T extends (infer U)[]
  ? DeepReadonlyArray12028<U>
  : T extends object
  ? DeepReadonlyObject12028<T>
  : T;

interface DeepReadonlyArray12028<T> extends ReadonlyArray<DeepReadonly12028<T>> {}

type DeepReadonlyObject12028<T> = {
  readonly [P in keyof T]: DeepReadonly12028<T[P]>;
};

type UnionToIntersection12028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12028<T> = UnionToIntersection12028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12028<T extends unknown[], V> = [...T, V];

type TuplifyUnion12028<T, L = LastOf12028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12028<TuplifyUnion12028<Exclude<T, L>>, L>;

type DeepPartial12028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12028<T[P]> }
  : T;

type Paths12028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12028<K, Paths12028<T[K], Prev12028[D]>> : never }[keyof T]
  : never;

type Prev12028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12028 {
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

type ConfigPaths12028 = Paths12028<NestedConfig12028>;

interface HeavyProps12028 {
  config: DeepPartial12028<NestedConfig12028>;
  path?: ConfigPaths12028;
}

const HeavyComponent12028 = memo(function HeavyComponent12028({ config }: HeavyProps12028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12028.displayName = 'HeavyComponent12028';
export default HeavyComponent12028;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12249<T> = T extends (infer U)[]
  ? DeepReadonlyArray12249<U>
  : T extends object
  ? DeepReadonlyObject12249<T>
  : T;

interface DeepReadonlyArray12249<T> extends ReadonlyArray<DeepReadonly12249<T>> {}

type DeepReadonlyObject12249<T> = {
  readonly [P in keyof T]: DeepReadonly12249<T[P]>;
};

type UnionToIntersection12249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12249<T> = UnionToIntersection12249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12249<T extends unknown[], V> = [...T, V];

type TuplifyUnion12249<T, L = LastOf12249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12249<TuplifyUnion12249<Exclude<T, L>>, L>;

type DeepPartial12249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12249<T[P]> }
  : T;

type Paths12249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12249<K, Paths12249<T[K], Prev12249[D]>> : never }[keyof T]
  : never;

type Prev12249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12249 {
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

type ConfigPaths12249 = Paths12249<NestedConfig12249>;

interface HeavyProps12249 {
  config: DeepPartial12249<NestedConfig12249>;
  path?: ConfigPaths12249;
}

const HeavyComponent12249 = memo(function HeavyComponent12249({ config }: HeavyProps12249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12249.displayName = 'HeavyComponent12249';
export default HeavyComponent12249;

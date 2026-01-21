'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7249<T> = T extends (infer U)[]
  ? DeepReadonlyArray7249<U>
  : T extends object
  ? DeepReadonlyObject7249<T>
  : T;

interface DeepReadonlyArray7249<T> extends ReadonlyArray<DeepReadonly7249<T>> {}

type DeepReadonlyObject7249<T> = {
  readonly [P in keyof T]: DeepReadonly7249<T[P]>;
};

type UnionToIntersection7249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7249<T> = UnionToIntersection7249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7249<T extends unknown[], V> = [...T, V];

type TuplifyUnion7249<T, L = LastOf7249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7249<TuplifyUnion7249<Exclude<T, L>>, L>;

type DeepPartial7249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7249<T[P]> }
  : T;

type Paths7249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7249<K, Paths7249<T[K], Prev7249[D]>> : never }[keyof T]
  : never;

type Prev7249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7249 {
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

type ConfigPaths7249 = Paths7249<NestedConfig7249>;

interface HeavyProps7249 {
  config: DeepPartial7249<NestedConfig7249>;
  path?: ConfigPaths7249;
}

const HeavyComponent7249 = memo(function HeavyComponent7249({ config }: HeavyProps7249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7249.displayName = 'HeavyComponent7249';
export default HeavyComponent7249;

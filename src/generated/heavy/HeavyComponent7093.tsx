'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7093<T> = T extends (infer U)[]
  ? DeepReadonlyArray7093<U>
  : T extends object
  ? DeepReadonlyObject7093<T>
  : T;

interface DeepReadonlyArray7093<T> extends ReadonlyArray<DeepReadonly7093<T>> {}

type DeepReadonlyObject7093<T> = {
  readonly [P in keyof T]: DeepReadonly7093<T[P]>;
};

type UnionToIntersection7093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7093<T> = UnionToIntersection7093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7093<T extends unknown[], V> = [...T, V];

type TuplifyUnion7093<T, L = LastOf7093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7093<TuplifyUnion7093<Exclude<T, L>>, L>;

type DeepPartial7093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7093<T[P]> }
  : T;

type Paths7093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7093<K, Paths7093<T[K], Prev7093[D]>> : never }[keyof T]
  : never;

type Prev7093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7093 {
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

type ConfigPaths7093 = Paths7093<NestedConfig7093>;

interface HeavyProps7093 {
  config: DeepPartial7093<NestedConfig7093>;
  path?: ConfigPaths7093;
}

const HeavyComponent7093 = memo(function HeavyComponent7093({ config }: HeavyProps7093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7093.displayName = 'HeavyComponent7093';
export default HeavyComponent7093;

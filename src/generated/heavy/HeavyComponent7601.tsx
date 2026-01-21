'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7601<T> = T extends (infer U)[]
  ? DeepReadonlyArray7601<U>
  : T extends object
  ? DeepReadonlyObject7601<T>
  : T;

interface DeepReadonlyArray7601<T> extends ReadonlyArray<DeepReadonly7601<T>> {}

type DeepReadonlyObject7601<T> = {
  readonly [P in keyof T]: DeepReadonly7601<T[P]>;
};

type UnionToIntersection7601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7601<T> = UnionToIntersection7601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7601<T extends unknown[], V> = [...T, V];

type TuplifyUnion7601<T, L = LastOf7601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7601<TuplifyUnion7601<Exclude<T, L>>, L>;

type DeepPartial7601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7601<T[P]> }
  : T;

type Paths7601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7601<K, Paths7601<T[K], Prev7601[D]>> : never }[keyof T]
  : never;

type Prev7601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7601 {
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

type ConfigPaths7601 = Paths7601<NestedConfig7601>;

interface HeavyProps7601 {
  config: DeepPartial7601<NestedConfig7601>;
  path?: ConfigPaths7601;
}

const HeavyComponent7601 = memo(function HeavyComponent7601({ config }: HeavyProps7601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7601.displayName = 'HeavyComponent7601';
export default HeavyComponent7601;

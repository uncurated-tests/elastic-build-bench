'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7380<T> = T extends (infer U)[]
  ? DeepReadonlyArray7380<U>
  : T extends object
  ? DeepReadonlyObject7380<T>
  : T;

interface DeepReadonlyArray7380<T> extends ReadonlyArray<DeepReadonly7380<T>> {}

type DeepReadonlyObject7380<T> = {
  readonly [P in keyof T]: DeepReadonly7380<T[P]>;
};

type UnionToIntersection7380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7380<T> = UnionToIntersection7380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7380<T extends unknown[], V> = [...T, V];

type TuplifyUnion7380<T, L = LastOf7380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7380<TuplifyUnion7380<Exclude<T, L>>, L>;

type DeepPartial7380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7380<T[P]> }
  : T;

type Paths7380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7380<K, Paths7380<T[K], Prev7380[D]>> : never }[keyof T]
  : never;

type Prev7380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7380 {
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

type ConfigPaths7380 = Paths7380<NestedConfig7380>;

interface HeavyProps7380 {
  config: DeepPartial7380<NestedConfig7380>;
  path?: ConfigPaths7380;
}

const HeavyComponent7380 = memo(function HeavyComponent7380({ config }: HeavyProps7380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7380.displayName = 'HeavyComponent7380';
export default HeavyComponent7380;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7678<T> = T extends (infer U)[]
  ? DeepReadonlyArray7678<U>
  : T extends object
  ? DeepReadonlyObject7678<T>
  : T;

interface DeepReadonlyArray7678<T> extends ReadonlyArray<DeepReadonly7678<T>> {}

type DeepReadonlyObject7678<T> = {
  readonly [P in keyof T]: DeepReadonly7678<T[P]>;
};

type UnionToIntersection7678<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7678<T> = UnionToIntersection7678<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7678<T extends unknown[], V> = [...T, V];

type TuplifyUnion7678<T, L = LastOf7678<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7678<TuplifyUnion7678<Exclude<T, L>>, L>;

type DeepPartial7678<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7678<T[P]> }
  : T;

type Paths7678<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7678<K, Paths7678<T[K], Prev7678[D]>> : never }[keyof T]
  : never;

type Prev7678 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7678<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7678 {
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

type ConfigPaths7678 = Paths7678<NestedConfig7678>;

interface HeavyProps7678 {
  config: DeepPartial7678<NestedConfig7678>;
  path?: ConfigPaths7678;
}

const HeavyComponent7678 = memo(function HeavyComponent7678({ config }: HeavyProps7678) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7678) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7678 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7678: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7678.displayName = 'HeavyComponent7678';
export default HeavyComponent7678;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7365<T> = T extends (infer U)[]
  ? DeepReadonlyArray7365<U>
  : T extends object
  ? DeepReadonlyObject7365<T>
  : T;

interface DeepReadonlyArray7365<T> extends ReadonlyArray<DeepReadonly7365<T>> {}

type DeepReadonlyObject7365<T> = {
  readonly [P in keyof T]: DeepReadonly7365<T[P]>;
};

type UnionToIntersection7365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7365<T> = UnionToIntersection7365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7365<T extends unknown[], V> = [...T, V];

type TuplifyUnion7365<T, L = LastOf7365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7365<TuplifyUnion7365<Exclude<T, L>>, L>;

type DeepPartial7365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7365<T[P]> }
  : T;

type Paths7365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7365<K, Paths7365<T[K], Prev7365[D]>> : never }[keyof T]
  : never;

type Prev7365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7365 {
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

type ConfigPaths7365 = Paths7365<NestedConfig7365>;

interface HeavyProps7365 {
  config: DeepPartial7365<NestedConfig7365>;
  path?: ConfigPaths7365;
}

const HeavyComponent7365 = memo(function HeavyComponent7365({ config }: HeavyProps7365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7365.displayName = 'HeavyComponent7365';
export default HeavyComponent7365;

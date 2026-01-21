'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7002<T> = T extends (infer U)[]
  ? DeepReadonlyArray7002<U>
  : T extends object
  ? DeepReadonlyObject7002<T>
  : T;

interface DeepReadonlyArray7002<T> extends ReadonlyArray<DeepReadonly7002<T>> {}

type DeepReadonlyObject7002<T> = {
  readonly [P in keyof T]: DeepReadonly7002<T[P]>;
};

type UnionToIntersection7002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7002<T> = UnionToIntersection7002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7002<T extends unknown[], V> = [...T, V];

type TuplifyUnion7002<T, L = LastOf7002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7002<TuplifyUnion7002<Exclude<T, L>>, L>;

type DeepPartial7002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7002<T[P]> }
  : T;

type Paths7002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7002<K, Paths7002<T[K], Prev7002[D]>> : never }[keyof T]
  : never;

type Prev7002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7002 {
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

type ConfigPaths7002 = Paths7002<NestedConfig7002>;

interface HeavyProps7002 {
  config: DeepPartial7002<NestedConfig7002>;
  path?: ConfigPaths7002;
}

const HeavyComponent7002 = memo(function HeavyComponent7002({ config }: HeavyProps7002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7002.displayName = 'HeavyComponent7002';
export default HeavyComponent7002;

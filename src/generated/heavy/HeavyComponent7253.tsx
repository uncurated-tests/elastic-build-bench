'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7253<T> = T extends (infer U)[]
  ? DeepReadonlyArray7253<U>
  : T extends object
  ? DeepReadonlyObject7253<T>
  : T;

interface DeepReadonlyArray7253<T> extends ReadonlyArray<DeepReadonly7253<T>> {}

type DeepReadonlyObject7253<T> = {
  readonly [P in keyof T]: DeepReadonly7253<T[P]>;
};

type UnionToIntersection7253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7253<T> = UnionToIntersection7253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7253<T extends unknown[], V> = [...T, V];

type TuplifyUnion7253<T, L = LastOf7253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7253<TuplifyUnion7253<Exclude<T, L>>, L>;

type DeepPartial7253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7253<T[P]> }
  : T;

type Paths7253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7253<K, Paths7253<T[K], Prev7253[D]>> : never }[keyof T]
  : never;

type Prev7253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7253 {
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

type ConfigPaths7253 = Paths7253<NestedConfig7253>;

interface HeavyProps7253 {
  config: DeepPartial7253<NestedConfig7253>;
  path?: ConfigPaths7253;
}

const HeavyComponent7253 = memo(function HeavyComponent7253({ config }: HeavyProps7253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7253.displayName = 'HeavyComponent7253';
export default HeavyComponent7253;

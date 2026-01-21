'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7382<T> = T extends (infer U)[]
  ? DeepReadonlyArray7382<U>
  : T extends object
  ? DeepReadonlyObject7382<T>
  : T;

interface DeepReadonlyArray7382<T> extends ReadonlyArray<DeepReadonly7382<T>> {}

type DeepReadonlyObject7382<T> = {
  readonly [P in keyof T]: DeepReadonly7382<T[P]>;
};

type UnionToIntersection7382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7382<T> = UnionToIntersection7382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7382<T extends unknown[], V> = [...T, V];

type TuplifyUnion7382<T, L = LastOf7382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7382<TuplifyUnion7382<Exclude<T, L>>, L>;

type DeepPartial7382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7382<T[P]> }
  : T;

type Paths7382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7382<K, Paths7382<T[K], Prev7382[D]>> : never }[keyof T]
  : never;

type Prev7382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7382 {
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

type ConfigPaths7382 = Paths7382<NestedConfig7382>;

interface HeavyProps7382 {
  config: DeepPartial7382<NestedConfig7382>;
  path?: ConfigPaths7382;
}

const HeavyComponent7382 = memo(function HeavyComponent7382({ config }: HeavyProps7382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7382.displayName = 'HeavyComponent7382';
export default HeavyComponent7382;

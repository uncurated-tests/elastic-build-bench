'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7898<T> = T extends (infer U)[]
  ? DeepReadonlyArray7898<U>
  : T extends object
  ? DeepReadonlyObject7898<T>
  : T;

interface DeepReadonlyArray7898<T> extends ReadonlyArray<DeepReadonly7898<T>> {}

type DeepReadonlyObject7898<T> = {
  readonly [P in keyof T]: DeepReadonly7898<T[P]>;
};

type UnionToIntersection7898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7898<T> = UnionToIntersection7898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7898<T extends unknown[], V> = [...T, V];

type TuplifyUnion7898<T, L = LastOf7898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7898<TuplifyUnion7898<Exclude<T, L>>, L>;

type DeepPartial7898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7898<T[P]> }
  : T;

type Paths7898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7898<K, Paths7898<T[K], Prev7898[D]>> : never }[keyof T]
  : never;

type Prev7898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7898 {
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

type ConfigPaths7898 = Paths7898<NestedConfig7898>;

interface HeavyProps7898 {
  config: DeepPartial7898<NestedConfig7898>;
  path?: ConfigPaths7898;
}

const HeavyComponent7898 = memo(function HeavyComponent7898({ config }: HeavyProps7898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7898.displayName = 'HeavyComponent7898';
export default HeavyComponent7898;

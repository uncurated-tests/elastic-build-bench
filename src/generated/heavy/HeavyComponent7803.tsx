'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7803<T> = T extends (infer U)[]
  ? DeepReadonlyArray7803<U>
  : T extends object
  ? DeepReadonlyObject7803<T>
  : T;

interface DeepReadonlyArray7803<T> extends ReadonlyArray<DeepReadonly7803<T>> {}

type DeepReadonlyObject7803<T> = {
  readonly [P in keyof T]: DeepReadonly7803<T[P]>;
};

type UnionToIntersection7803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7803<T> = UnionToIntersection7803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7803<T extends unknown[], V> = [...T, V];

type TuplifyUnion7803<T, L = LastOf7803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7803<TuplifyUnion7803<Exclude<T, L>>, L>;

type DeepPartial7803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7803<T[P]> }
  : T;

type Paths7803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7803<K, Paths7803<T[K], Prev7803[D]>> : never }[keyof T]
  : never;

type Prev7803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7803 {
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

type ConfigPaths7803 = Paths7803<NestedConfig7803>;

interface HeavyProps7803 {
  config: DeepPartial7803<NestedConfig7803>;
  path?: ConfigPaths7803;
}

const HeavyComponent7803 = memo(function HeavyComponent7803({ config }: HeavyProps7803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7803.displayName = 'HeavyComponent7803';
export default HeavyComponent7803;

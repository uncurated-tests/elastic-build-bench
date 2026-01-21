'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7062<T> = T extends (infer U)[]
  ? DeepReadonlyArray7062<U>
  : T extends object
  ? DeepReadonlyObject7062<T>
  : T;

interface DeepReadonlyArray7062<T> extends ReadonlyArray<DeepReadonly7062<T>> {}

type DeepReadonlyObject7062<T> = {
  readonly [P in keyof T]: DeepReadonly7062<T[P]>;
};

type UnionToIntersection7062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7062<T> = UnionToIntersection7062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7062<T extends unknown[], V> = [...T, V];

type TuplifyUnion7062<T, L = LastOf7062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7062<TuplifyUnion7062<Exclude<T, L>>, L>;

type DeepPartial7062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7062<T[P]> }
  : T;

type Paths7062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7062<K, Paths7062<T[K], Prev7062[D]>> : never }[keyof T]
  : never;

type Prev7062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7062 {
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

type ConfigPaths7062 = Paths7062<NestedConfig7062>;

interface HeavyProps7062 {
  config: DeepPartial7062<NestedConfig7062>;
  path?: ConfigPaths7062;
}

const HeavyComponent7062 = memo(function HeavyComponent7062({ config }: HeavyProps7062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7062.displayName = 'HeavyComponent7062';
export default HeavyComponent7062;

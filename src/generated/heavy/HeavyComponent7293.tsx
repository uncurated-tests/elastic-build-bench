'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7293<T> = T extends (infer U)[]
  ? DeepReadonlyArray7293<U>
  : T extends object
  ? DeepReadonlyObject7293<T>
  : T;

interface DeepReadonlyArray7293<T> extends ReadonlyArray<DeepReadonly7293<T>> {}

type DeepReadonlyObject7293<T> = {
  readonly [P in keyof T]: DeepReadonly7293<T[P]>;
};

type UnionToIntersection7293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7293<T> = UnionToIntersection7293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7293<T extends unknown[], V> = [...T, V];

type TuplifyUnion7293<T, L = LastOf7293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7293<TuplifyUnion7293<Exclude<T, L>>, L>;

type DeepPartial7293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7293<T[P]> }
  : T;

type Paths7293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7293<K, Paths7293<T[K], Prev7293[D]>> : never }[keyof T]
  : never;

type Prev7293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7293 {
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

type ConfigPaths7293 = Paths7293<NestedConfig7293>;

interface HeavyProps7293 {
  config: DeepPartial7293<NestedConfig7293>;
  path?: ConfigPaths7293;
}

const HeavyComponent7293 = memo(function HeavyComponent7293({ config }: HeavyProps7293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7293.displayName = 'HeavyComponent7293';
export default HeavyComponent7293;

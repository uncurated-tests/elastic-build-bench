'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7810<T> = T extends (infer U)[]
  ? DeepReadonlyArray7810<U>
  : T extends object
  ? DeepReadonlyObject7810<T>
  : T;

interface DeepReadonlyArray7810<T> extends ReadonlyArray<DeepReadonly7810<T>> {}

type DeepReadonlyObject7810<T> = {
  readonly [P in keyof T]: DeepReadonly7810<T[P]>;
};

type UnionToIntersection7810<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7810<T> = UnionToIntersection7810<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7810<T extends unknown[], V> = [...T, V];

type TuplifyUnion7810<T, L = LastOf7810<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7810<TuplifyUnion7810<Exclude<T, L>>, L>;

type DeepPartial7810<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7810<T[P]> }
  : T;

type Paths7810<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7810<K, Paths7810<T[K], Prev7810[D]>> : never }[keyof T]
  : never;

type Prev7810 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7810<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7810 {
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

type ConfigPaths7810 = Paths7810<NestedConfig7810>;

interface HeavyProps7810 {
  config: DeepPartial7810<NestedConfig7810>;
  path?: ConfigPaths7810;
}

const HeavyComponent7810 = memo(function HeavyComponent7810({ config }: HeavyProps7810) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7810) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7810 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7810: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7810.displayName = 'HeavyComponent7810';
export default HeavyComponent7810;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7620<T> = T extends (infer U)[]
  ? DeepReadonlyArray7620<U>
  : T extends object
  ? DeepReadonlyObject7620<T>
  : T;

interface DeepReadonlyArray7620<T> extends ReadonlyArray<DeepReadonly7620<T>> {}

type DeepReadonlyObject7620<T> = {
  readonly [P in keyof T]: DeepReadonly7620<T[P]>;
};

type UnionToIntersection7620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7620<T> = UnionToIntersection7620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7620<T extends unknown[], V> = [...T, V];

type TuplifyUnion7620<T, L = LastOf7620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7620<TuplifyUnion7620<Exclude<T, L>>, L>;

type DeepPartial7620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7620<T[P]> }
  : T;

type Paths7620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7620<K, Paths7620<T[K], Prev7620[D]>> : never }[keyof T]
  : never;

type Prev7620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7620 {
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

type ConfigPaths7620 = Paths7620<NestedConfig7620>;

interface HeavyProps7620 {
  config: DeepPartial7620<NestedConfig7620>;
  path?: ConfigPaths7620;
}

const HeavyComponent7620 = memo(function HeavyComponent7620({ config }: HeavyProps7620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7620.displayName = 'HeavyComponent7620';
export default HeavyComponent7620;

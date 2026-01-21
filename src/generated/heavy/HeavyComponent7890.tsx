'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7890<T> = T extends (infer U)[]
  ? DeepReadonlyArray7890<U>
  : T extends object
  ? DeepReadonlyObject7890<T>
  : T;

interface DeepReadonlyArray7890<T> extends ReadonlyArray<DeepReadonly7890<T>> {}

type DeepReadonlyObject7890<T> = {
  readonly [P in keyof T]: DeepReadonly7890<T[P]>;
};

type UnionToIntersection7890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7890<T> = UnionToIntersection7890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7890<T extends unknown[], V> = [...T, V];

type TuplifyUnion7890<T, L = LastOf7890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7890<TuplifyUnion7890<Exclude<T, L>>, L>;

type DeepPartial7890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7890<T[P]> }
  : T;

type Paths7890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7890<K, Paths7890<T[K], Prev7890[D]>> : never }[keyof T]
  : never;

type Prev7890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7890 {
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

type ConfigPaths7890 = Paths7890<NestedConfig7890>;

interface HeavyProps7890 {
  config: DeepPartial7890<NestedConfig7890>;
  path?: ConfigPaths7890;
}

const HeavyComponent7890 = memo(function HeavyComponent7890({ config }: HeavyProps7890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7890.displayName = 'HeavyComponent7890';
export default HeavyComponent7890;

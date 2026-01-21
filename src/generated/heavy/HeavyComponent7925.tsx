'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7925<T> = T extends (infer U)[]
  ? DeepReadonlyArray7925<U>
  : T extends object
  ? DeepReadonlyObject7925<T>
  : T;

interface DeepReadonlyArray7925<T> extends ReadonlyArray<DeepReadonly7925<T>> {}

type DeepReadonlyObject7925<T> = {
  readonly [P in keyof T]: DeepReadonly7925<T[P]>;
};

type UnionToIntersection7925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7925<T> = UnionToIntersection7925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7925<T extends unknown[], V> = [...T, V];

type TuplifyUnion7925<T, L = LastOf7925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7925<TuplifyUnion7925<Exclude<T, L>>, L>;

type DeepPartial7925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7925<T[P]> }
  : T;

type Paths7925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7925<K, Paths7925<T[K], Prev7925[D]>> : never }[keyof T]
  : never;

type Prev7925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7925 {
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

type ConfigPaths7925 = Paths7925<NestedConfig7925>;

interface HeavyProps7925 {
  config: DeepPartial7925<NestedConfig7925>;
  path?: ConfigPaths7925;
}

const HeavyComponent7925 = memo(function HeavyComponent7925({ config }: HeavyProps7925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7925.displayName = 'HeavyComponent7925';
export default HeavyComponent7925;

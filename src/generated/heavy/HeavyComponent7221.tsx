'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7221<T> = T extends (infer U)[]
  ? DeepReadonlyArray7221<U>
  : T extends object
  ? DeepReadonlyObject7221<T>
  : T;

interface DeepReadonlyArray7221<T> extends ReadonlyArray<DeepReadonly7221<T>> {}

type DeepReadonlyObject7221<T> = {
  readonly [P in keyof T]: DeepReadonly7221<T[P]>;
};

type UnionToIntersection7221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7221<T> = UnionToIntersection7221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7221<T extends unknown[], V> = [...T, V];

type TuplifyUnion7221<T, L = LastOf7221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7221<TuplifyUnion7221<Exclude<T, L>>, L>;

type DeepPartial7221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7221<T[P]> }
  : T;

type Paths7221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7221<K, Paths7221<T[K], Prev7221[D]>> : never }[keyof T]
  : never;

type Prev7221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7221 {
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

type ConfigPaths7221 = Paths7221<NestedConfig7221>;

interface HeavyProps7221 {
  config: DeepPartial7221<NestedConfig7221>;
  path?: ConfigPaths7221;
}

const HeavyComponent7221 = memo(function HeavyComponent7221({ config }: HeavyProps7221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7221.displayName = 'HeavyComponent7221';
export default HeavyComponent7221;

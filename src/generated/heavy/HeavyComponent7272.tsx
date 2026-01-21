'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7272<T> = T extends (infer U)[]
  ? DeepReadonlyArray7272<U>
  : T extends object
  ? DeepReadonlyObject7272<T>
  : T;

interface DeepReadonlyArray7272<T> extends ReadonlyArray<DeepReadonly7272<T>> {}

type DeepReadonlyObject7272<T> = {
  readonly [P in keyof T]: DeepReadonly7272<T[P]>;
};

type UnionToIntersection7272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7272<T> = UnionToIntersection7272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7272<T extends unknown[], V> = [...T, V];

type TuplifyUnion7272<T, L = LastOf7272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7272<TuplifyUnion7272<Exclude<T, L>>, L>;

type DeepPartial7272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7272<T[P]> }
  : T;

type Paths7272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7272<K, Paths7272<T[K], Prev7272[D]>> : never }[keyof T]
  : never;

type Prev7272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7272 {
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

type ConfigPaths7272 = Paths7272<NestedConfig7272>;

interface HeavyProps7272 {
  config: DeepPartial7272<NestedConfig7272>;
  path?: ConfigPaths7272;
}

const HeavyComponent7272 = memo(function HeavyComponent7272({ config }: HeavyProps7272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7272.displayName = 'HeavyComponent7272';
export default HeavyComponent7272;

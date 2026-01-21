'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7769<T> = T extends (infer U)[]
  ? DeepReadonlyArray7769<U>
  : T extends object
  ? DeepReadonlyObject7769<T>
  : T;

interface DeepReadonlyArray7769<T> extends ReadonlyArray<DeepReadonly7769<T>> {}

type DeepReadonlyObject7769<T> = {
  readonly [P in keyof T]: DeepReadonly7769<T[P]>;
};

type UnionToIntersection7769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7769<T> = UnionToIntersection7769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7769<T extends unknown[], V> = [...T, V];

type TuplifyUnion7769<T, L = LastOf7769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7769<TuplifyUnion7769<Exclude<T, L>>, L>;

type DeepPartial7769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7769<T[P]> }
  : T;

type Paths7769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7769<K, Paths7769<T[K], Prev7769[D]>> : never }[keyof T]
  : never;

type Prev7769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7769 {
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

type ConfigPaths7769 = Paths7769<NestedConfig7769>;

interface HeavyProps7769 {
  config: DeepPartial7769<NestedConfig7769>;
  path?: ConfigPaths7769;
}

const HeavyComponent7769 = memo(function HeavyComponent7769({ config }: HeavyProps7769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7769.displayName = 'HeavyComponent7769';
export default HeavyComponent7769;

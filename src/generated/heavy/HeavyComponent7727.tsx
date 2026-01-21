'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7727<T> = T extends (infer U)[]
  ? DeepReadonlyArray7727<U>
  : T extends object
  ? DeepReadonlyObject7727<T>
  : T;

interface DeepReadonlyArray7727<T> extends ReadonlyArray<DeepReadonly7727<T>> {}

type DeepReadonlyObject7727<T> = {
  readonly [P in keyof T]: DeepReadonly7727<T[P]>;
};

type UnionToIntersection7727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7727<T> = UnionToIntersection7727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7727<T extends unknown[], V> = [...T, V];

type TuplifyUnion7727<T, L = LastOf7727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7727<TuplifyUnion7727<Exclude<T, L>>, L>;

type DeepPartial7727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7727<T[P]> }
  : T;

type Paths7727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7727<K, Paths7727<T[K], Prev7727[D]>> : never }[keyof T]
  : never;

type Prev7727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7727 {
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

type ConfigPaths7727 = Paths7727<NestedConfig7727>;

interface HeavyProps7727 {
  config: DeepPartial7727<NestedConfig7727>;
  path?: ConfigPaths7727;
}

const HeavyComponent7727 = memo(function HeavyComponent7727({ config }: HeavyProps7727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7727.displayName = 'HeavyComponent7727';
export default HeavyComponent7727;

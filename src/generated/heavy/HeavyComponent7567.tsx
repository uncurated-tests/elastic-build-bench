'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7567<T> = T extends (infer U)[]
  ? DeepReadonlyArray7567<U>
  : T extends object
  ? DeepReadonlyObject7567<T>
  : T;

interface DeepReadonlyArray7567<T> extends ReadonlyArray<DeepReadonly7567<T>> {}

type DeepReadonlyObject7567<T> = {
  readonly [P in keyof T]: DeepReadonly7567<T[P]>;
};

type UnionToIntersection7567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7567<T> = UnionToIntersection7567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7567<T extends unknown[], V> = [...T, V];

type TuplifyUnion7567<T, L = LastOf7567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7567<TuplifyUnion7567<Exclude<T, L>>, L>;

type DeepPartial7567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7567<T[P]> }
  : T;

type Paths7567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7567<K, Paths7567<T[K], Prev7567[D]>> : never }[keyof T]
  : never;

type Prev7567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7567 {
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

type ConfigPaths7567 = Paths7567<NestedConfig7567>;

interface HeavyProps7567 {
  config: DeepPartial7567<NestedConfig7567>;
  path?: ConfigPaths7567;
}

const HeavyComponent7567 = memo(function HeavyComponent7567({ config }: HeavyProps7567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7567.displayName = 'HeavyComponent7567';
export default HeavyComponent7567;

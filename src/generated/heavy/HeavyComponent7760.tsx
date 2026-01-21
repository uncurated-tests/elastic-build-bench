'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7760<T> = T extends (infer U)[]
  ? DeepReadonlyArray7760<U>
  : T extends object
  ? DeepReadonlyObject7760<T>
  : T;

interface DeepReadonlyArray7760<T> extends ReadonlyArray<DeepReadonly7760<T>> {}

type DeepReadonlyObject7760<T> = {
  readonly [P in keyof T]: DeepReadonly7760<T[P]>;
};

type UnionToIntersection7760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7760<T> = UnionToIntersection7760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7760<T extends unknown[], V> = [...T, V];

type TuplifyUnion7760<T, L = LastOf7760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7760<TuplifyUnion7760<Exclude<T, L>>, L>;

type DeepPartial7760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7760<T[P]> }
  : T;

type Paths7760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7760<K, Paths7760<T[K], Prev7760[D]>> : never }[keyof T]
  : never;

type Prev7760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7760 {
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

type ConfigPaths7760 = Paths7760<NestedConfig7760>;

interface HeavyProps7760 {
  config: DeepPartial7760<NestedConfig7760>;
  path?: ConfigPaths7760;
}

const HeavyComponent7760 = memo(function HeavyComponent7760({ config }: HeavyProps7760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7760.displayName = 'HeavyComponent7760';
export default HeavyComponent7760;

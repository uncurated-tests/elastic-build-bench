'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7390<T> = T extends (infer U)[]
  ? DeepReadonlyArray7390<U>
  : T extends object
  ? DeepReadonlyObject7390<T>
  : T;

interface DeepReadonlyArray7390<T> extends ReadonlyArray<DeepReadonly7390<T>> {}

type DeepReadonlyObject7390<T> = {
  readonly [P in keyof T]: DeepReadonly7390<T[P]>;
};

type UnionToIntersection7390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7390<T> = UnionToIntersection7390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7390<T extends unknown[], V> = [...T, V];

type TuplifyUnion7390<T, L = LastOf7390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7390<TuplifyUnion7390<Exclude<T, L>>, L>;

type DeepPartial7390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7390<T[P]> }
  : T;

type Paths7390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7390<K, Paths7390<T[K], Prev7390[D]>> : never }[keyof T]
  : never;

type Prev7390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7390 {
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

type ConfigPaths7390 = Paths7390<NestedConfig7390>;

interface HeavyProps7390 {
  config: DeepPartial7390<NestedConfig7390>;
  path?: ConfigPaths7390;
}

const HeavyComponent7390 = memo(function HeavyComponent7390({ config }: HeavyProps7390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7390.displayName = 'HeavyComponent7390';
export default HeavyComponent7390;

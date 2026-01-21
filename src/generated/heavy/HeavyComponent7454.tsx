'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7454<T> = T extends (infer U)[]
  ? DeepReadonlyArray7454<U>
  : T extends object
  ? DeepReadonlyObject7454<T>
  : T;

interface DeepReadonlyArray7454<T> extends ReadonlyArray<DeepReadonly7454<T>> {}

type DeepReadonlyObject7454<T> = {
  readonly [P in keyof T]: DeepReadonly7454<T[P]>;
};

type UnionToIntersection7454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7454<T> = UnionToIntersection7454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7454<T extends unknown[], V> = [...T, V];

type TuplifyUnion7454<T, L = LastOf7454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7454<TuplifyUnion7454<Exclude<T, L>>, L>;

type DeepPartial7454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7454<T[P]> }
  : T;

type Paths7454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7454<K, Paths7454<T[K], Prev7454[D]>> : never }[keyof T]
  : never;

type Prev7454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7454 {
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

type ConfigPaths7454 = Paths7454<NestedConfig7454>;

interface HeavyProps7454 {
  config: DeepPartial7454<NestedConfig7454>;
  path?: ConfigPaths7454;
}

const HeavyComponent7454 = memo(function HeavyComponent7454({ config }: HeavyProps7454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7454.displayName = 'HeavyComponent7454';
export default HeavyComponent7454;

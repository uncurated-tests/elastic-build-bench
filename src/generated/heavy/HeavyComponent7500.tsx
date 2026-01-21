'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7500<T> = T extends (infer U)[]
  ? DeepReadonlyArray7500<U>
  : T extends object
  ? DeepReadonlyObject7500<T>
  : T;

interface DeepReadonlyArray7500<T> extends ReadonlyArray<DeepReadonly7500<T>> {}

type DeepReadonlyObject7500<T> = {
  readonly [P in keyof T]: DeepReadonly7500<T[P]>;
};

type UnionToIntersection7500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7500<T> = UnionToIntersection7500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7500<T extends unknown[], V> = [...T, V];

type TuplifyUnion7500<T, L = LastOf7500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7500<TuplifyUnion7500<Exclude<T, L>>, L>;

type DeepPartial7500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7500<T[P]> }
  : T;

type Paths7500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7500<K, Paths7500<T[K], Prev7500[D]>> : never }[keyof T]
  : never;

type Prev7500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7500 {
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

type ConfigPaths7500 = Paths7500<NestedConfig7500>;

interface HeavyProps7500 {
  config: DeepPartial7500<NestedConfig7500>;
  path?: ConfigPaths7500;
}

const HeavyComponent7500 = memo(function HeavyComponent7500({ config }: HeavyProps7500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7500.displayName = 'HeavyComponent7500';
export default HeavyComponent7500;

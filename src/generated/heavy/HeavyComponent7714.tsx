'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7714<T> = T extends (infer U)[]
  ? DeepReadonlyArray7714<U>
  : T extends object
  ? DeepReadonlyObject7714<T>
  : T;

interface DeepReadonlyArray7714<T> extends ReadonlyArray<DeepReadonly7714<T>> {}

type DeepReadonlyObject7714<T> = {
  readonly [P in keyof T]: DeepReadonly7714<T[P]>;
};

type UnionToIntersection7714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7714<T> = UnionToIntersection7714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7714<T extends unknown[], V> = [...T, V];

type TuplifyUnion7714<T, L = LastOf7714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7714<TuplifyUnion7714<Exclude<T, L>>, L>;

type DeepPartial7714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7714<T[P]> }
  : T;

type Paths7714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7714<K, Paths7714<T[K], Prev7714[D]>> : never }[keyof T]
  : never;

type Prev7714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7714 {
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

type ConfigPaths7714 = Paths7714<NestedConfig7714>;

interface HeavyProps7714 {
  config: DeepPartial7714<NestedConfig7714>;
  path?: ConfigPaths7714;
}

const HeavyComponent7714 = memo(function HeavyComponent7714({ config }: HeavyProps7714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7714.displayName = 'HeavyComponent7714';
export default HeavyComponent7714;

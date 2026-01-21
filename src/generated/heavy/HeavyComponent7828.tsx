'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7828<T> = T extends (infer U)[]
  ? DeepReadonlyArray7828<U>
  : T extends object
  ? DeepReadonlyObject7828<T>
  : T;

interface DeepReadonlyArray7828<T> extends ReadonlyArray<DeepReadonly7828<T>> {}

type DeepReadonlyObject7828<T> = {
  readonly [P in keyof T]: DeepReadonly7828<T[P]>;
};

type UnionToIntersection7828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7828<T> = UnionToIntersection7828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7828<T extends unknown[], V> = [...T, V];

type TuplifyUnion7828<T, L = LastOf7828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7828<TuplifyUnion7828<Exclude<T, L>>, L>;

type DeepPartial7828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7828<T[P]> }
  : T;

type Paths7828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7828<K, Paths7828<T[K], Prev7828[D]>> : never }[keyof T]
  : never;

type Prev7828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7828 {
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

type ConfigPaths7828 = Paths7828<NestedConfig7828>;

interface HeavyProps7828 {
  config: DeepPartial7828<NestedConfig7828>;
  path?: ConfigPaths7828;
}

const HeavyComponent7828 = memo(function HeavyComponent7828({ config }: HeavyProps7828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7828.displayName = 'HeavyComponent7828';
export default HeavyComponent7828;

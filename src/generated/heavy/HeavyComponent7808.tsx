'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7808<T> = T extends (infer U)[]
  ? DeepReadonlyArray7808<U>
  : T extends object
  ? DeepReadonlyObject7808<T>
  : T;

interface DeepReadonlyArray7808<T> extends ReadonlyArray<DeepReadonly7808<T>> {}

type DeepReadonlyObject7808<T> = {
  readonly [P in keyof T]: DeepReadonly7808<T[P]>;
};

type UnionToIntersection7808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7808<T> = UnionToIntersection7808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7808<T extends unknown[], V> = [...T, V];

type TuplifyUnion7808<T, L = LastOf7808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7808<TuplifyUnion7808<Exclude<T, L>>, L>;

type DeepPartial7808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7808<T[P]> }
  : T;

type Paths7808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7808<K, Paths7808<T[K], Prev7808[D]>> : never }[keyof T]
  : never;

type Prev7808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7808 {
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

type ConfigPaths7808 = Paths7808<NestedConfig7808>;

interface HeavyProps7808 {
  config: DeepPartial7808<NestedConfig7808>;
  path?: ConfigPaths7808;
}

const HeavyComponent7808 = memo(function HeavyComponent7808({ config }: HeavyProps7808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7808.displayName = 'HeavyComponent7808';
export default HeavyComponent7808;

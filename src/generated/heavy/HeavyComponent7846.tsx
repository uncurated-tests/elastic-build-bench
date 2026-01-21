'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7846<T> = T extends (infer U)[]
  ? DeepReadonlyArray7846<U>
  : T extends object
  ? DeepReadonlyObject7846<T>
  : T;

interface DeepReadonlyArray7846<T> extends ReadonlyArray<DeepReadonly7846<T>> {}

type DeepReadonlyObject7846<T> = {
  readonly [P in keyof T]: DeepReadonly7846<T[P]>;
};

type UnionToIntersection7846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7846<T> = UnionToIntersection7846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7846<T extends unknown[], V> = [...T, V];

type TuplifyUnion7846<T, L = LastOf7846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7846<TuplifyUnion7846<Exclude<T, L>>, L>;

type DeepPartial7846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7846<T[P]> }
  : T;

type Paths7846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7846<K, Paths7846<T[K], Prev7846[D]>> : never }[keyof T]
  : never;

type Prev7846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7846 {
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

type ConfigPaths7846 = Paths7846<NestedConfig7846>;

interface HeavyProps7846 {
  config: DeepPartial7846<NestedConfig7846>;
  path?: ConfigPaths7846;
}

const HeavyComponent7846 = memo(function HeavyComponent7846({ config }: HeavyProps7846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7846.displayName = 'HeavyComponent7846';
export default HeavyComponent7846;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7170<T> = T extends (infer U)[]
  ? DeepReadonlyArray7170<U>
  : T extends object
  ? DeepReadonlyObject7170<T>
  : T;

interface DeepReadonlyArray7170<T> extends ReadonlyArray<DeepReadonly7170<T>> {}

type DeepReadonlyObject7170<T> = {
  readonly [P in keyof T]: DeepReadonly7170<T[P]>;
};

type UnionToIntersection7170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7170<T> = UnionToIntersection7170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7170<T extends unknown[], V> = [...T, V];

type TuplifyUnion7170<T, L = LastOf7170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7170<TuplifyUnion7170<Exclude<T, L>>, L>;

type DeepPartial7170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7170<T[P]> }
  : T;

type Paths7170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7170<K, Paths7170<T[K], Prev7170[D]>> : never }[keyof T]
  : never;

type Prev7170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7170 {
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

type ConfigPaths7170 = Paths7170<NestedConfig7170>;

interface HeavyProps7170 {
  config: DeepPartial7170<NestedConfig7170>;
  path?: ConfigPaths7170;
}

const HeavyComponent7170 = memo(function HeavyComponent7170({ config }: HeavyProps7170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7170.displayName = 'HeavyComponent7170';
export default HeavyComponent7170;

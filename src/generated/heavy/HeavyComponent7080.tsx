'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7080<T> = T extends (infer U)[]
  ? DeepReadonlyArray7080<U>
  : T extends object
  ? DeepReadonlyObject7080<T>
  : T;

interface DeepReadonlyArray7080<T> extends ReadonlyArray<DeepReadonly7080<T>> {}

type DeepReadonlyObject7080<T> = {
  readonly [P in keyof T]: DeepReadonly7080<T[P]>;
};

type UnionToIntersection7080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7080<T> = UnionToIntersection7080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7080<T extends unknown[], V> = [...T, V];

type TuplifyUnion7080<T, L = LastOf7080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7080<TuplifyUnion7080<Exclude<T, L>>, L>;

type DeepPartial7080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7080<T[P]> }
  : T;

type Paths7080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7080<K, Paths7080<T[K], Prev7080[D]>> : never }[keyof T]
  : never;

type Prev7080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7080 {
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

type ConfigPaths7080 = Paths7080<NestedConfig7080>;

interface HeavyProps7080 {
  config: DeepPartial7080<NestedConfig7080>;
  path?: ConfigPaths7080;
}

const HeavyComponent7080 = memo(function HeavyComponent7080({ config }: HeavyProps7080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7080.displayName = 'HeavyComponent7080';
export default HeavyComponent7080;

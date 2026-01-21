'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7352<T> = T extends (infer U)[]
  ? DeepReadonlyArray7352<U>
  : T extends object
  ? DeepReadonlyObject7352<T>
  : T;

interface DeepReadonlyArray7352<T> extends ReadonlyArray<DeepReadonly7352<T>> {}

type DeepReadonlyObject7352<T> = {
  readonly [P in keyof T]: DeepReadonly7352<T[P]>;
};

type UnionToIntersection7352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7352<T> = UnionToIntersection7352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7352<T extends unknown[], V> = [...T, V];

type TuplifyUnion7352<T, L = LastOf7352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7352<TuplifyUnion7352<Exclude<T, L>>, L>;

type DeepPartial7352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7352<T[P]> }
  : T;

type Paths7352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7352<K, Paths7352<T[K], Prev7352[D]>> : never }[keyof T]
  : never;

type Prev7352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7352 {
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

type ConfigPaths7352 = Paths7352<NestedConfig7352>;

interface HeavyProps7352 {
  config: DeepPartial7352<NestedConfig7352>;
  path?: ConfigPaths7352;
}

const HeavyComponent7352 = memo(function HeavyComponent7352({ config }: HeavyProps7352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7352.displayName = 'HeavyComponent7352';
export default HeavyComponent7352;

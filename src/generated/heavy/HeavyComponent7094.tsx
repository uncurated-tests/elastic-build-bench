'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7094<T> = T extends (infer U)[]
  ? DeepReadonlyArray7094<U>
  : T extends object
  ? DeepReadonlyObject7094<T>
  : T;

interface DeepReadonlyArray7094<T> extends ReadonlyArray<DeepReadonly7094<T>> {}

type DeepReadonlyObject7094<T> = {
  readonly [P in keyof T]: DeepReadonly7094<T[P]>;
};

type UnionToIntersection7094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7094<T> = UnionToIntersection7094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7094<T extends unknown[], V> = [...T, V];

type TuplifyUnion7094<T, L = LastOf7094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7094<TuplifyUnion7094<Exclude<T, L>>, L>;

type DeepPartial7094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7094<T[P]> }
  : T;

type Paths7094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7094<K, Paths7094<T[K], Prev7094[D]>> : never }[keyof T]
  : never;

type Prev7094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7094 {
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

type ConfigPaths7094 = Paths7094<NestedConfig7094>;

interface HeavyProps7094 {
  config: DeepPartial7094<NestedConfig7094>;
  path?: ConfigPaths7094;
}

const HeavyComponent7094 = memo(function HeavyComponent7094({ config }: HeavyProps7094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7094.displayName = 'HeavyComponent7094';
export default HeavyComponent7094;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7854<T> = T extends (infer U)[]
  ? DeepReadonlyArray7854<U>
  : T extends object
  ? DeepReadonlyObject7854<T>
  : T;

interface DeepReadonlyArray7854<T> extends ReadonlyArray<DeepReadonly7854<T>> {}

type DeepReadonlyObject7854<T> = {
  readonly [P in keyof T]: DeepReadonly7854<T[P]>;
};

type UnionToIntersection7854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7854<T> = UnionToIntersection7854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7854<T extends unknown[], V> = [...T, V];

type TuplifyUnion7854<T, L = LastOf7854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7854<TuplifyUnion7854<Exclude<T, L>>, L>;

type DeepPartial7854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7854<T[P]> }
  : T;

type Paths7854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7854<K, Paths7854<T[K], Prev7854[D]>> : never }[keyof T]
  : never;

type Prev7854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7854 {
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

type ConfigPaths7854 = Paths7854<NestedConfig7854>;

interface HeavyProps7854 {
  config: DeepPartial7854<NestedConfig7854>;
  path?: ConfigPaths7854;
}

const HeavyComponent7854 = memo(function HeavyComponent7854({ config }: HeavyProps7854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7854.displayName = 'HeavyComponent7854';
export default HeavyComponent7854;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7913<T> = T extends (infer U)[]
  ? DeepReadonlyArray7913<U>
  : T extends object
  ? DeepReadonlyObject7913<T>
  : T;

interface DeepReadonlyArray7913<T> extends ReadonlyArray<DeepReadonly7913<T>> {}

type DeepReadonlyObject7913<T> = {
  readonly [P in keyof T]: DeepReadonly7913<T[P]>;
};

type UnionToIntersection7913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7913<T> = UnionToIntersection7913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7913<T extends unknown[], V> = [...T, V];

type TuplifyUnion7913<T, L = LastOf7913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7913<TuplifyUnion7913<Exclude<T, L>>, L>;

type DeepPartial7913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7913<T[P]> }
  : T;

type Paths7913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7913<K, Paths7913<T[K], Prev7913[D]>> : never }[keyof T]
  : never;

type Prev7913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7913 {
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

type ConfigPaths7913 = Paths7913<NestedConfig7913>;

interface HeavyProps7913 {
  config: DeepPartial7913<NestedConfig7913>;
  path?: ConfigPaths7913;
}

const HeavyComponent7913 = memo(function HeavyComponent7913({ config }: HeavyProps7913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7913.displayName = 'HeavyComponent7913';
export default HeavyComponent7913;

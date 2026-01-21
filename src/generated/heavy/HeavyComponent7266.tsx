'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7266<T> = T extends (infer U)[]
  ? DeepReadonlyArray7266<U>
  : T extends object
  ? DeepReadonlyObject7266<T>
  : T;

interface DeepReadonlyArray7266<T> extends ReadonlyArray<DeepReadonly7266<T>> {}

type DeepReadonlyObject7266<T> = {
  readonly [P in keyof T]: DeepReadonly7266<T[P]>;
};

type UnionToIntersection7266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7266<T> = UnionToIntersection7266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7266<T extends unknown[], V> = [...T, V];

type TuplifyUnion7266<T, L = LastOf7266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7266<TuplifyUnion7266<Exclude<T, L>>, L>;

type DeepPartial7266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7266<T[P]> }
  : T;

type Paths7266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7266<K, Paths7266<T[K], Prev7266[D]>> : never }[keyof T]
  : never;

type Prev7266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7266 {
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

type ConfigPaths7266 = Paths7266<NestedConfig7266>;

interface HeavyProps7266 {
  config: DeepPartial7266<NestedConfig7266>;
  path?: ConfigPaths7266;
}

const HeavyComponent7266 = memo(function HeavyComponent7266({ config }: HeavyProps7266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7266.displayName = 'HeavyComponent7266';
export default HeavyComponent7266;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7648<T> = T extends (infer U)[]
  ? DeepReadonlyArray7648<U>
  : T extends object
  ? DeepReadonlyObject7648<T>
  : T;

interface DeepReadonlyArray7648<T> extends ReadonlyArray<DeepReadonly7648<T>> {}

type DeepReadonlyObject7648<T> = {
  readonly [P in keyof T]: DeepReadonly7648<T[P]>;
};

type UnionToIntersection7648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7648<T> = UnionToIntersection7648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7648<T extends unknown[], V> = [...T, V];

type TuplifyUnion7648<T, L = LastOf7648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7648<TuplifyUnion7648<Exclude<T, L>>, L>;

type DeepPartial7648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7648<T[P]> }
  : T;

type Paths7648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7648<K, Paths7648<T[K], Prev7648[D]>> : never }[keyof T]
  : never;

type Prev7648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7648 {
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

type ConfigPaths7648 = Paths7648<NestedConfig7648>;

interface HeavyProps7648 {
  config: DeepPartial7648<NestedConfig7648>;
  path?: ConfigPaths7648;
}

const HeavyComponent7648 = memo(function HeavyComponent7648({ config }: HeavyProps7648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7648.displayName = 'HeavyComponent7648';
export default HeavyComponent7648;

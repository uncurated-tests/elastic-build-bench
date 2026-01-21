'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7945<T> = T extends (infer U)[]
  ? DeepReadonlyArray7945<U>
  : T extends object
  ? DeepReadonlyObject7945<T>
  : T;

interface DeepReadonlyArray7945<T> extends ReadonlyArray<DeepReadonly7945<T>> {}

type DeepReadonlyObject7945<T> = {
  readonly [P in keyof T]: DeepReadonly7945<T[P]>;
};

type UnionToIntersection7945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7945<T> = UnionToIntersection7945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7945<T extends unknown[], V> = [...T, V];

type TuplifyUnion7945<T, L = LastOf7945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7945<TuplifyUnion7945<Exclude<T, L>>, L>;

type DeepPartial7945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7945<T[P]> }
  : T;

type Paths7945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7945<K, Paths7945<T[K], Prev7945[D]>> : never }[keyof T]
  : never;

type Prev7945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7945 {
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

type ConfigPaths7945 = Paths7945<NestedConfig7945>;

interface HeavyProps7945 {
  config: DeepPartial7945<NestedConfig7945>;
  path?: ConfigPaths7945;
}

const HeavyComponent7945 = memo(function HeavyComponent7945({ config }: HeavyProps7945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7945.displayName = 'HeavyComponent7945';
export default HeavyComponent7945;

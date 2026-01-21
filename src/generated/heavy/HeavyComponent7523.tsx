'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7523<T> = T extends (infer U)[]
  ? DeepReadonlyArray7523<U>
  : T extends object
  ? DeepReadonlyObject7523<T>
  : T;

interface DeepReadonlyArray7523<T> extends ReadonlyArray<DeepReadonly7523<T>> {}

type DeepReadonlyObject7523<T> = {
  readonly [P in keyof T]: DeepReadonly7523<T[P]>;
};

type UnionToIntersection7523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7523<T> = UnionToIntersection7523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7523<T extends unknown[], V> = [...T, V];

type TuplifyUnion7523<T, L = LastOf7523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7523<TuplifyUnion7523<Exclude<T, L>>, L>;

type DeepPartial7523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7523<T[P]> }
  : T;

type Paths7523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7523<K, Paths7523<T[K], Prev7523[D]>> : never }[keyof T]
  : never;

type Prev7523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7523 {
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

type ConfigPaths7523 = Paths7523<NestedConfig7523>;

interface HeavyProps7523 {
  config: DeepPartial7523<NestedConfig7523>;
  path?: ConfigPaths7523;
}

const HeavyComponent7523 = memo(function HeavyComponent7523({ config }: HeavyProps7523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7523.displayName = 'HeavyComponent7523';
export default HeavyComponent7523;

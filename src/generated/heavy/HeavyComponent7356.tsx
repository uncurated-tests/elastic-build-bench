'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7356<T> = T extends (infer U)[]
  ? DeepReadonlyArray7356<U>
  : T extends object
  ? DeepReadonlyObject7356<T>
  : T;

interface DeepReadonlyArray7356<T> extends ReadonlyArray<DeepReadonly7356<T>> {}

type DeepReadonlyObject7356<T> = {
  readonly [P in keyof T]: DeepReadonly7356<T[P]>;
};

type UnionToIntersection7356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7356<T> = UnionToIntersection7356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7356<T extends unknown[], V> = [...T, V];

type TuplifyUnion7356<T, L = LastOf7356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7356<TuplifyUnion7356<Exclude<T, L>>, L>;

type DeepPartial7356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7356<T[P]> }
  : T;

type Paths7356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7356<K, Paths7356<T[K], Prev7356[D]>> : never }[keyof T]
  : never;

type Prev7356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7356 {
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

type ConfigPaths7356 = Paths7356<NestedConfig7356>;

interface HeavyProps7356 {
  config: DeepPartial7356<NestedConfig7356>;
  path?: ConfigPaths7356;
}

const HeavyComponent7356 = memo(function HeavyComponent7356({ config }: HeavyProps7356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7356.displayName = 'HeavyComponent7356';
export default HeavyComponent7356;

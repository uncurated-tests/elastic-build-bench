'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7248<T> = T extends (infer U)[]
  ? DeepReadonlyArray7248<U>
  : T extends object
  ? DeepReadonlyObject7248<T>
  : T;

interface DeepReadonlyArray7248<T> extends ReadonlyArray<DeepReadonly7248<T>> {}

type DeepReadonlyObject7248<T> = {
  readonly [P in keyof T]: DeepReadonly7248<T[P]>;
};

type UnionToIntersection7248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7248<T> = UnionToIntersection7248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7248<T extends unknown[], V> = [...T, V];

type TuplifyUnion7248<T, L = LastOf7248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7248<TuplifyUnion7248<Exclude<T, L>>, L>;

type DeepPartial7248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7248<T[P]> }
  : T;

type Paths7248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7248<K, Paths7248<T[K], Prev7248[D]>> : never }[keyof T]
  : never;

type Prev7248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7248 {
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

type ConfigPaths7248 = Paths7248<NestedConfig7248>;

interface HeavyProps7248 {
  config: DeepPartial7248<NestedConfig7248>;
  path?: ConfigPaths7248;
}

const HeavyComponent7248 = memo(function HeavyComponent7248({ config }: HeavyProps7248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7248.displayName = 'HeavyComponent7248';
export default HeavyComponent7248;

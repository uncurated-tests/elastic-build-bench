'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7881<T> = T extends (infer U)[]
  ? DeepReadonlyArray7881<U>
  : T extends object
  ? DeepReadonlyObject7881<T>
  : T;

interface DeepReadonlyArray7881<T> extends ReadonlyArray<DeepReadonly7881<T>> {}

type DeepReadonlyObject7881<T> = {
  readonly [P in keyof T]: DeepReadonly7881<T[P]>;
};

type UnionToIntersection7881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7881<T> = UnionToIntersection7881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7881<T extends unknown[], V> = [...T, V];

type TuplifyUnion7881<T, L = LastOf7881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7881<TuplifyUnion7881<Exclude<T, L>>, L>;

type DeepPartial7881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7881<T[P]> }
  : T;

type Paths7881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7881<K, Paths7881<T[K], Prev7881[D]>> : never }[keyof T]
  : never;

type Prev7881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7881 {
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

type ConfigPaths7881 = Paths7881<NestedConfig7881>;

interface HeavyProps7881 {
  config: DeepPartial7881<NestedConfig7881>;
  path?: ConfigPaths7881;
}

const HeavyComponent7881 = memo(function HeavyComponent7881({ config }: HeavyProps7881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7881.displayName = 'HeavyComponent7881';
export default HeavyComponent7881;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7137<T> = T extends (infer U)[]
  ? DeepReadonlyArray7137<U>
  : T extends object
  ? DeepReadonlyObject7137<T>
  : T;

interface DeepReadonlyArray7137<T> extends ReadonlyArray<DeepReadonly7137<T>> {}

type DeepReadonlyObject7137<T> = {
  readonly [P in keyof T]: DeepReadonly7137<T[P]>;
};

type UnionToIntersection7137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7137<T> = UnionToIntersection7137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7137<T extends unknown[], V> = [...T, V];

type TuplifyUnion7137<T, L = LastOf7137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7137<TuplifyUnion7137<Exclude<T, L>>, L>;

type DeepPartial7137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7137<T[P]> }
  : T;

type Paths7137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7137<K, Paths7137<T[K], Prev7137[D]>> : never }[keyof T]
  : never;

type Prev7137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7137 {
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

type ConfigPaths7137 = Paths7137<NestedConfig7137>;

interface HeavyProps7137 {
  config: DeepPartial7137<NestedConfig7137>;
  path?: ConfigPaths7137;
}

const HeavyComponent7137 = memo(function HeavyComponent7137({ config }: HeavyProps7137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7137.displayName = 'HeavyComponent7137';
export default HeavyComponent7137;

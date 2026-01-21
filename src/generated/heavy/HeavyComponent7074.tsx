'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7074<T> = T extends (infer U)[]
  ? DeepReadonlyArray7074<U>
  : T extends object
  ? DeepReadonlyObject7074<T>
  : T;

interface DeepReadonlyArray7074<T> extends ReadonlyArray<DeepReadonly7074<T>> {}

type DeepReadonlyObject7074<T> = {
  readonly [P in keyof T]: DeepReadonly7074<T[P]>;
};

type UnionToIntersection7074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7074<T> = UnionToIntersection7074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7074<T extends unknown[], V> = [...T, V];

type TuplifyUnion7074<T, L = LastOf7074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7074<TuplifyUnion7074<Exclude<T, L>>, L>;

type DeepPartial7074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7074<T[P]> }
  : T;

type Paths7074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7074<K, Paths7074<T[K], Prev7074[D]>> : never }[keyof T]
  : never;

type Prev7074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7074 {
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

type ConfigPaths7074 = Paths7074<NestedConfig7074>;

interface HeavyProps7074 {
  config: DeepPartial7074<NestedConfig7074>;
  path?: ConfigPaths7074;
}

const HeavyComponent7074 = memo(function HeavyComponent7074({ config }: HeavyProps7074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7074.displayName = 'HeavyComponent7074';
export default HeavyComponent7074;

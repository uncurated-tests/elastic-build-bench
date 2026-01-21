'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7023<T> = T extends (infer U)[]
  ? DeepReadonlyArray7023<U>
  : T extends object
  ? DeepReadonlyObject7023<T>
  : T;

interface DeepReadonlyArray7023<T> extends ReadonlyArray<DeepReadonly7023<T>> {}

type DeepReadonlyObject7023<T> = {
  readonly [P in keyof T]: DeepReadonly7023<T[P]>;
};

type UnionToIntersection7023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7023<T> = UnionToIntersection7023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7023<T extends unknown[], V> = [...T, V];

type TuplifyUnion7023<T, L = LastOf7023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7023<TuplifyUnion7023<Exclude<T, L>>, L>;

type DeepPartial7023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7023<T[P]> }
  : T;

type Paths7023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7023<K, Paths7023<T[K], Prev7023[D]>> : never }[keyof T]
  : never;

type Prev7023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7023 {
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

type ConfigPaths7023 = Paths7023<NestedConfig7023>;

interface HeavyProps7023 {
  config: DeepPartial7023<NestedConfig7023>;
  path?: ConfigPaths7023;
}

const HeavyComponent7023 = memo(function HeavyComponent7023({ config }: HeavyProps7023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7023.displayName = 'HeavyComponent7023';
export default HeavyComponent7023;

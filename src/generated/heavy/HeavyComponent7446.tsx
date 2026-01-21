'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7446<T> = T extends (infer U)[]
  ? DeepReadonlyArray7446<U>
  : T extends object
  ? DeepReadonlyObject7446<T>
  : T;

interface DeepReadonlyArray7446<T> extends ReadonlyArray<DeepReadonly7446<T>> {}

type DeepReadonlyObject7446<T> = {
  readonly [P in keyof T]: DeepReadonly7446<T[P]>;
};

type UnionToIntersection7446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7446<T> = UnionToIntersection7446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7446<T extends unknown[], V> = [...T, V];

type TuplifyUnion7446<T, L = LastOf7446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7446<TuplifyUnion7446<Exclude<T, L>>, L>;

type DeepPartial7446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7446<T[P]> }
  : T;

type Paths7446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7446<K, Paths7446<T[K], Prev7446[D]>> : never }[keyof T]
  : never;

type Prev7446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7446 {
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

type ConfigPaths7446 = Paths7446<NestedConfig7446>;

interface HeavyProps7446 {
  config: DeepPartial7446<NestedConfig7446>;
  path?: ConfigPaths7446;
}

const HeavyComponent7446 = memo(function HeavyComponent7446({ config }: HeavyProps7446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7446.displayName = 'HeavyComponent7446';
export default HeavyComponent7446;

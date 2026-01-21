'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7247<T> = T extends (infer U)[]
  ? DeepReadonlyArray7247<U>
  : T extends object
  ? DeepReadonlyObject7247<T>
  : T;

interface DeepReadonlyArray7247<T> extends ReadonlyArray<DeepReadonly7247<T>> {}

type DeepReadonlyObject7247<T> = {
  readonly [P in keyof T]: DeepReadonly7247<T[P]>;
};

type UnionToIntersection7247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7247<T> = UnionToIntersection7247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7247<T extends unknown[], V> = [...T, V];

type TuplifyUnion7247<T, L = LastOf7247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7247<TuplifyUnion7247<Exclude<T, L>>, L>;

type DeepPartial7247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7247<T[P]> }
  : T;

type Paths7247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7247<K, Paths7247<T[K], Prev7247[D]>> : never }[keyof T]
  : never;

type Prev7247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7247 {
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

type ConfigPaths7247 = Paths7247<NestedConfig7247>;

interface HeavyProps7247 {
  config: DeepPartial7247<NestedConfig7247>;
  path?: ConfigPaths7247;
}

const HeavyComponent7247 = memo(function HeavyComponent7247({ config }: HeavyProps7247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7247.displayName = 'HeavyComponent7247';
export default HeavyComponent7247;

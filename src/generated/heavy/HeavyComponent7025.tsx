'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7025<T> = T extends (infer U)[]
  ? DeepReadonlyArray7025<U>
  : T extends object
  ? DeepReadonlyObject7025<T>
  : T;

interface DeepReadonlyArray7025<T> extends ReadonlyArray<DeepReadonly7025<T>> {}

type DeepReadonlyObject7025<T> = {
  readonly [P in keyof T]: DeepReadonly7025<T[P]>;
};

type UnionToIntersection7025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7025<T> = UnionToIntersection7025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7025<T extends unknown[], V> = [...T, V];

type TuplifyUnion7025<T, L = LastOf7025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7025<TuplifyUnion7025<Exclude<T, L>>, L>;

type DeepPartial7025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7025<T[P]> }
  : T;

type Paths7025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7025<K, Paths7025<T[K], Prev7025[D]>> : never }[keyof T]
  : never;

type Prev7025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7025 {
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

type ConfigPaths7025 = Paths7025<NestedConfig7025>;

interface HeavyProps7025 {
  config: DeepPartial7025<NestedConfig7025>;
  path?: ConfigPaths7025;
}

const HeavyComponent7025 = memo(function HeavyComponent7025({ config }: HeavyProps7025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7025.displayName = 'HeavyComponent7025';
export default HeavyComponent7025;

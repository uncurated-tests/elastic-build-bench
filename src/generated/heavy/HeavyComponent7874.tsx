'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7874<T> = T extends (infer U)[]
  ? DeepReadonlyArray7874<U>
  : T extends object
  ? DeepReadonlyObject7874<T>
  : T;

interface DeepReadonlyArray7874<T> extends ReadonlyArray<DeepReadonly7874<T>> {}

type DeepReadonlyObject7874<T> = {
  readonly [P in keyof T]: DeepReadonly7874<T[P]>;
};

type UnionToIntersection7874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7874<T> = UnionToIntersection7874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7874<T extends unknown[], V> = [...T, V];

type TuplifyUnion7874<T, L = LastOf7874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7874<TuplifyUnion7874<Exclude<T, L>>, L>;

type DeepPartial7874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7874<T[P]> }
  : T;

type Paths7874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7874<K, Paths7874<T[K], Prev7874[D]>> : never }[keyof T]
  : never;

type Prev7874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7874 {
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

type ConfigPaths7874 = Paths7874<NestedConfig7874>;

interface HeavyProps7874 {
  config: DeepPartial7874<NestedConfig7874>;
  path?: ConfigPaths7874;
}

const HeavyComponent7874 = memo(function HeavyComponent7874({ config }: HeavyProps7874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7874.displayName = 'HeavyComponent7874';
export default HeavyComponent7874;

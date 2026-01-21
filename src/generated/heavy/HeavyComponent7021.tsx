'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7021<T> = T extends (infer U)[]
  ? DeepReadonlyArray7021<U>
  : T extends object
  ? DeepReadonlyObject7021<T>
  : T;

interface DeepReadonlyArray7021<T> extends ReadonlyArray<DeepReadonly7021<T>> {}

type DeepReadonlyObject7021<T> = {
  readonly [P in keyof T]: DeepReadonly7021<T[P]>;
};

type UnionToIntersection7021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7021<T> = UnionToIntersection7021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7021<T extends unknown[], V> = [...T, V];

type TuplifyUnion7021<T, L = LastOf7021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7021<TuplifyUnion7021<Exclude<T, L>>, L>;

type DeepPartial7021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7021<T[P]> }
  : T;

type Paths7021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7021<K, Paths7021<T[K], Prev7021[D]>> : never }[keyof T]
  : never;

type Prev7021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7021 {
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

type ConfigPaths7021 = Paths7021<NestedConfig7021>;

interface HeavyProps7021 {
  config: DeepPartial7021<NestedConfig7021>;
  path?: ConfigPaths7021;
}

const HeavyComponent7021 = memo(function HeavyComponent7021({ config }: HeavyProps7021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7021.displayName = 'HeavyComponent7021';
export default HeavyComponent7021;

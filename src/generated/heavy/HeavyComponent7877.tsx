'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7877<T> = T extends (infer U)[]
  ? DeepReadonlyArray7877<U>
  : T extends object
  ? DeepReadonlyObject7877<T>
  : T;

interface DeepReadonlyArray7877<T> extends ReadonlyArray<DeepReadonly7877<T>> {}

type DeepReadonlyObject7877<T> = {
  readonly [P in keyof T]: DeepReadonly7877<T[P]>;
};

type UnionToIntersection7877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7877<T> = UnionToIntersection7877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7877<T extends unknown[], V> = [...T, V];

type TuplifyUnion7877<T, L = LastOf7877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7877<TuplifyUnion7877<Exclude<T, L>>, L>;

type DeepPartial7877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7877<T[P]> }
  : T;

type Paths7877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7877<K, Paths7877<T[K], Prev7877[D]>> : never }[keyof T]
  : never;

type Prev7877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7877 {
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

type ConfigPaths7877 = Paths7877<NestedConfig7877>;

interface HeavyProps7877 {
  config: DeepPartial7877<NestedConfig7877>;
  path?: ConfigPaths7877;
}

const HeavyComponent7877 = memo(function HeavyComponent7877({ config }: HeavyProps7877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7877.displayName = 'HeavyComponent7877';
export default HeavyComponent7877;

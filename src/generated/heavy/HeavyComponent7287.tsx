'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7287<T> = T extends (infer U)[]
  ? DeepReadonlyArray7287<U>
  : T extends object
  ? DeepReadonlyObject7287<T>
  : T;

interface DeepReadonlyArray7287<T> extends ReadonlyArray<DeepReadonly7287<T>> {}

type DeepReadonlyObject7287<T> = {
  readonly [P in keyof T]: DeepReadonly7287<T[P]>;
};

type UnionToIntersection7287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7287<T> = UnionToIntersection7287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7287<T extends unknown[], V> = [...T, V];

type TuplifyUnion7287<T, L = LastOf7287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7287<TuplifyUnion7287<Exclude<T, L>>, L>;

type DeepPartial7287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7287<T[P]> }
  : T;

type Paths7287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7287<K, Paths7287<T[K], Prev7287[D]>> : never }[keyof T]
  : never;

type Prev7287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7287 {
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

type ConfigPaths7287 = Paths7287<NestedConfig7287>;

interface HeavyProps7287 {
  config: DeepPartial7287<NestedConfig7287>;
  path?: ConfigPaths7287;
}

const HeavyComponent7287 = memo(function HeavyComponent7287({ config }: HeavyProps7287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7287.displayName = 'HeavyComponent7287';
export default HeavyComponent7287;

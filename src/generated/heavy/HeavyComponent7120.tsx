'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7120<T> = T extends (infer U)[]
  ? DeepReadonlyArray7120<U>
  : T extends object
  ? DeepReadonlyObject7120<T>
  : T;

interface DeepReadonlyArray7120<T> extends ReadonlyArray<DeepReadonly7120<T>> {}

type DeepReadonlyObject7120<T> = {
  readonly [P in keyof T]: DeepReadonly7120<T[P]>;
};

type UnionToIntersection7120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7120<T> = UnionToIntersection7120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7120<T extends unknown[], V> = [...T, V];

type TuplifyUnion7120<T, L = LastOf7120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7120<TuplifyUnion7120<Exclude<T, L>>, L>;

type DeepPartial7120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7120<T[P]> }
  : T;

type Paths7120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7120<K, Paths7120<T[K], Prev7120[D]>> : never }[keyof T]
  : never;

type Prev7120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7120 {
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

type ConfigPaths7120 = Paths7120<NestedConfig7120>;

interface HeavyProps7120 {
  config: DeepPartial7120<NestedConfig7120>;
  path?: ConfigPaths7120;
}

const HeavyComponent7120 = memo(function HeavyComponent7120({ config }: HeavyProps7120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7120.displayName = 'HeavyComponent7120';
export default HeavyComponent7120;

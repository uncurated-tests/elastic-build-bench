'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7897<T> = T extends (infer U)[]
  ? DeepReadonlyArray7897<U>
  : T extends object
  ? DeepReadonlyObject7897<T>
  : T;

interface DeepReadonlyArray7897<T> extends ReadonlyArray<DeepReadonly7897<T>> {}

type DeepReadonlyObject7897<T> = {
  readonly [P in keyof T]: DeepReadonly7897<T[P]>;
};

type UnionToIntersection7897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7897<T> = UnionToIntersection7897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7897<T extends unknown[], V> = [...T, V];

type TuplifyUnion7897<T, L = LastOf7897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7897<TuplifyUnion7897<Exclude<T, L>>, L>;

type DeepPartial7897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7897<T[P]> }
  : T;

type Paths7897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7897<K, Paths7897<T[K], Prev7897[D]>> : never }[keyof T]
  : never;

type Prev7897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7897 {
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

type ConfigPaths7897 = Paths7897<NestedConfig7897>;

interface HeavyProps7897 {
  config: DeepPartial7897<NestedConfig7897>;
  path?: ConfigPaths7897;
}

const HeavyComponent7897 = memo(function HeavyComponent7897({ config }: HeavyProps7897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7897.displayName = 'HeavyComponent7897';
export default HeavyComponent7897;

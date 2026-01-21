'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7940<T> = T extends (infer U)[]
  ? DeepReadonlyArray7940<U>
  : T extends object
  ? DeepReadonlyObject7940<T>
  : T;

interface DeepReadonlyArray7940<T> extends ReadonlyArray<DeepReadonly7940<T>> {}

type DeepReadonlyObject7940<T> = {
  readonly [P in keyof T]: DeepReadonly7940<T[P]>;
};

type UnionToIntersection7940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7940<T> = UnionToIntersection7940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7940<T extends unknown[], V> = [...T, V];

type TuplifyUnion7940<T, L = LastOf7940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7940<TuplifyUnion7940<Exclude<T, L>>, L>;

type DeepPartial7940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7940<T[P]> }
  : T;

type Paths7940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7940<K, Paths7940<T[K], Prev7940[D]>> : never }[keyof T]
  : never;

type Prev7940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7940 {
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

type ConfigPaths7940 = Paths7940<NestedConfig7940>;

interface HeavyProps7940 {
  config: DeepPartial7940<NestedConfig7940>;
  path?: ConfigPaths7940;
}

const HeavyComponent7940 = memo(function HeavyComponent7940({ config }: HeavyProps7940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7940.displayName = 'HeavyComponent7940';
export default HeavyComponent7940;

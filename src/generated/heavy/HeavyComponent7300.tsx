'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7300<T> = T extends (infer U)[]
  ? DeepReadonlyArray7300<U>
  : T extends object
  ? DeepReadonlyObject7300<T>
  : T;

interface DeepReadonlyArray7300<T> extends ReadonlyArray<DeepReadonly7300<T>> {}

type DeepReadonlyObject7300<T> = {
  readonly [P in keyof T]: DeepReadonly7300<T[P]>;
};

type UnionToIntersection7300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7300<T> = UnionToIntersection7300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7300<T extends unknown[], V> = [...T, V];

type TuplifyUnion7300<T, L = LastOf7300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7300<TuplifyUnion7300<Exclude<T, L>>, L>;

type DeepPartial7300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7300<T[P]> }
  : T;

type Paths7300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7300<K, Paths7300<T[K], Prev7300[D]>> : never }[keyof T]
  : never;

type Prev7300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7300 {
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

type ConfigPaths7300 = Paths7300<NestedConfig7300>;

interface HeavyProps7300 {
  config: DeepPartial7300<NestedConfig7300>;
  path?: ConfigPaths7300;
}

const HeavyComponent7300 = memo(function HeavyComponent7300({ config }: HeavyProps7300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7300.displayName = 'HeavyComponent7300';
export default HeavyComponent7300;

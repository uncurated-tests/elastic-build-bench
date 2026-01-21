'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7458<T> = T extends (infer U)[]
  ? DeepReadonlyArray7458<U>
  : T extends object
  ? DeepReadonlyObject7458<T>
  : T;

interface DeepReadonlyArray7458<T> extends ReadonlyArray<DeepReadonly7458<T>> {}

type DeepReadonlyObject7458<T> = {
  readonly [P in keyof T]: DeepReadonly7458<T[P]>;
};

type UnionToIntersection7458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7458<T> = UnionToIntersection7458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7458<T extends unknown[], V> = [...T, V];

type TuplifyUnion7458<T, L = LastOf7458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7458<TuplifyUnion7458<Exclude<T, L>>, L>;

type DeepPartial7458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7458<T[P]> }
  : T;

type Paths7458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7458<K, Paths7458<T[K], Prev7458[D]>> : never }[keyof T]
  : never;

type Prev7458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7458 {
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

type ConfigPaths7458 = Paths7458<NestedConfig7458>;

interface HeavyProps7458 {
  config: DeepPartial7458<NestedConfig7458>;
  path?: ConfigPaths7458;
}

const HeavyComponent7458 = memo(function HeavyComponent7458({ config }: HeavyProps7458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7458.displayName = 'HeavyComponent7458';
export default HeavyComponent7458;

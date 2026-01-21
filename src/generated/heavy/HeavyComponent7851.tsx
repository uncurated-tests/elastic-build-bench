'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7851<T> = T extends (infer U)[]
  ? DeepReadonlyArray7851<U>
  : T extends object
  ? DeepReadonlyObject7851<T>
  : T;

interface DeepReadonlyArray7851<T> extends ReadonlyArray<DeepReadonly7851<T>> {}

type DeepReadonlyObject7851<T> = {
  readonly [P in keyof T]: DeepReadonly7851<T[P]>;
};

type UnionToIntersection7851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7851<T> = UnionToIntersection7851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7851<T extends unknown[], V> = [...T, V];

type TuplifyUnion7851<T, L = LastOf7851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7851<TuplifyUnion7851<Exclude<T, L>>, L>;

type DeepPartial7851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7851<T[P]> }
  : T;

type Paths7851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7851<K, Paths7851<T[K], Prev7851[D]>> : never }[keyof T]
  : never;

type Prev7851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7851 {
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

type ConfigPaths7851 = Paths7851<NestedConfig7851>;

interface HeavyProps7851 {
  config: DeepPartial7851<NestedConfig7851>;
  path?: ConfigPaths7851;
}

const HeavyComponent7851 = memo(function HeavyComponent7851({ config }: HeavyProps7851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7851.displayName = 'HeavyComponent7851';
export default HeavyComponent7851;

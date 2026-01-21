'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7337<T> = T extends (infer U)[]
  ? DeepReadonlyArray7337<U>
  : T extends object
  ? DeepReadonlyObject7337<T>
  : T;

interface DeepReadonlyArray7337<T> extends ReadonlyArray<DeepReadonly7337<T>> {}

type DeepReadonlyObject7337<T> = {
  readonly [P in keyof T]: DeepReadonly7337<T[P]>;
};

type UnionToIntersection7337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7337<T> = UnionToIntersection7337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7337<T extends unknown[], V> = [...T, V];

type TuplifyUnion7337<T, L = LastOf7337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7337<TuplifyUnion7337<Exclude<T, L>>, L>;

type DeepPartial7337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7337<T[P]> }
  : T;

type Paths7337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7337<K, Paths7337<T[K], Prev7337[D]>> : never }[keyof T]
  : never;

type Prev7337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7337 {
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

type ConfigPaths7337 = Paths7337<NestedConfig7337>;

interface HeavyProps7337 {
  config: DeepPartial7337<NestedConfig7337>;
  path?: ConfigPaths7337;
}

const HeavyComponent7337 = memo(function HeavyComponent7337({ config }: HeavyProps7337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7337.displayName = 'HeavyComponent7337';
export default HeavyComponent7337;

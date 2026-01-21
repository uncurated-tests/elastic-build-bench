'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7713<T> = T extends (infer U)[]
  ? DeepReadonlyArray7713<U>
  : T extends object
  ? DeepReadonlyObject7713<T>
  : T;

interface DeepReadonlyArray7713<T> extends ReadonlyArray<DeepReadonly7713<T>> {}

type DeepReadonlyObject7713<T> = {
  readonly [P in keyof T]: DeepReadonly7713<T[P]>;
};

type UnionToIntersection7713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7713<T> = UnionToIntersection7713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7713<T extends unknown[], V> = [...T, V];

type TuplifyUnion7713<T, L = LastOf7713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7713<TuplifyUnion7713<Exclude<T, L>>, L>;

type DeepPartial7713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7713<T[P]> }
  : T;

type Paths7713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7713<K, Paths7713<T[K], Prev7713[D]>> : never }[keyof T]
  : never;

type Prev7713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7713 {
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

type ConfigPaths7713 = Paths7713<NestedConfig7713>;

interface HeavyProps7713 {
  config: DeepPartial7713<NestedConfig7713>;
  path?: ConfigPaths7713;
}

const HeavyComponent7713 = memo(function HeavyComponent7713({ config }: HeavyProps7713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7713.displayName = 'HeavyComponent7713';
export default HeavyComponent7713;

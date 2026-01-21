'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7893<T> = T extends (infer U)[]
  ? DeepReadonlyArray7893<U>
  : T extends object
  ? DeepReadonlyObject7893<T>
  : T;

interface DeepReadonlyArray7893<T> extends ReadonlyArray<DeepReadonly7893<T>> {}

type DeepReadonlyObject7893<T> = {
  readonly [P in keyof T]: DeepReadonly7893<T[P]>;
};

type UnionToIntersection7893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7893<T> = UnionToIntersection7893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7893<T extends unknown[], V> = [...T, V];

type TuplifyUnion7893<T, L = LastOf7893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7893<TuplifyUnion7893<Exclude<T, L>>, L>;

type DeepPartial7893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7893<T[P]> }
  : T;

type Paths7893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7893<K, Paths7893<T[K], Prev7893[D]>> : never }[keyof T]
  : never;

type Prev7893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7893 {
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

type ConfigPaths7893 = Paths7893<NestedConfig7893>;

interface HeavyProps7893 {
  config: DeepPartial7893<NestedConfig7893>;
  path?: ConfigPaths7893;
}

const HeavyComponent7893 = memo(function HeavyComponent7893({ config }: HeavyProps7893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7893.displayName = 'HeavyComponent7893';
export default HeavyComponent7893;

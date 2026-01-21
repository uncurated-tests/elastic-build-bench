'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7396<T> = T extends (infer U)[]
  ? DeepReadonlyArray7396<U>
  : T extends object
  ? DeepReadonlyObject7396<T>
  : T;

interface DeepReadonlyArray7396<T> extends ReadonlyArray<DeepReadonly7396<T>> {}

type DeepReadonlyObject7396<T> = {
  readonly [P in keyof T]: DeepReadonly7396<T[P]>;
};

type UnionToIntersection7396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7396<T> = UnionToIntersection7396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7396<T extends unknown[], V> = [...T, V];

type TuplifyUnion7396<T, L = LastOf7396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7396<TuplifyUnion7396<Exclude<T, L>>, L>;

type DeepPartial7396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7396<T[P]> }
  : T;

type Paths7396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7396<K, Paths7396<T[K], Prev7396[D]>> : never }[keyof T]
  : never;

type Prev7396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7396 {
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

type ConfigPaths7396 = Paths7396<NestedConfig7396>;

interface HeavyProps7396 {
  config: DeepPartial7396<NestedConfig7396>;
  path?: ConfigPaths7396;
}

const HeavyComponent7396 = memo(function HeavyComponent7396({ config }: HeavyProps7396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7396.displayName = 'HeavyComponent7396';
export default HeavyComponent7396;

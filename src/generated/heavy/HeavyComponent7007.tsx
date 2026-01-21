'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7007<T> = T extends (infer U)[]
  ? DeepReadonlyArray7007<U>
  : T extends object
  ? DeepReadonlyObject7007<T>
  : T;

interface DeepReadonlyArray7007<T> extends ReadonlyArray<DeepReadonly7007<T>> {}

type DeepReadonlyObject7007<T> = {
  readonly [P in keyof T]: DeepReadonly7007<T[P]>;
};

type UnionToIntersection7007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7007<T> = UnionToIntersection7007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7007<T extends unknown[], V> = [...T, V];

type TuplifyUnion7007<T, L = LastOf7007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7007<TuplifyUnion7007<Exclude<T, L>>, L>;

type DeepPartial7007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7007<T[P]> }
  : T;

type Paths7007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7007<K, Paths7007<T[K], Prev7007[D]>> : never }[keyof T]
  : never;

type Prev7007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7007 {
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

type ConfigPaths7007 = Paths7007<NestedConfig7007>;

interface HeavyProps7007 {
  config: DeepPartial7007<NestedConfig7007>;
  path?: ConfigPaths7007;
}

const HeavyComponent7007 = memo(function HeavyComponent7007({ config }: HeavyProps7007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7007.displayName = 'HeavyComponent7007';
export default HeavyComponent7007;

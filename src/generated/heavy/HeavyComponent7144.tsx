'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7144<T> = T extends (infer U)[]
  ? DeepReadonlyArray7144<U>
  : T extends object
  ? DeepReadonlyObject7144<T>
  : T;

interface DeepReadonlyArray7144<T> extends ReadonlyArray<DeepReadonly7144<T>> {}

type DeepReadonlyObject7144<T> = {
  readonly [P in keyof T]: DeepReadonly7144<T[P]>;
};

type UnionToIntersection7144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7144<T> = UnionToIntersection7144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7144<T extends unknown[], V> = [...T, V];

type TuplifyUnion7144<T, L = LastOf7144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7144<TuplifyUnion7144<Exclude<T, L>>, L>;

type DeepPartial7144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7144<T[P]> }
  : T;

type Paths7144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7144<K, Paths7144<T[K], Prev7144[D]>> : never }[keyof T]
  : never;

type Prev7144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7144 {
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

type ConfigPaths7144 = Paths7144<NestedConfig7144>;

interface HeavyProps7144 {
  config: DeepPartial7144<NestedConfig7144>;
  path?: ConfigPaths7144;
}

const HeavyComponent7144 = memo(function HeavyComponent7144({ config }: HeavyProps7144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7144.displayName = 'HeavyComponent7144';
export default HeavyComponent7144;

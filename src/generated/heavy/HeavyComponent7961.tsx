'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7961<T> = T extends (infer U)[]
  ? DeepReadonlyArray7961<U>
  : T extends object
  ? DeepReadonlyObject7961<T>
  : T;

interface DeepReadonlyArray7961<T> extends ReadonlyArray<DeepReadonly7961<T>> {}

type DeepReadonlyObject7961<T> = {
  readonly [P in keyof T]: DeepReadonly7961<T[P]>;
};

type UnionToIntersection7961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7961<T> = UnionToIntersection7961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7961<T extends unknown[], V> = [...T, V];

type TuplifyUnion7961<T, L = LastOf7961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7961<TuplifyUnion7961<Exclude<T, L>>, L>;

type DeepPartial7961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7961<T[P]> }
  : T;

type Paths7961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7961<K, Paths7961<T[K], Prev7961[D]>> : never }[keyof T]
  : never;

type Prev7961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7961 {
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

type ConfigPaths7961 = Paths7961<NestedConfig7961>;

interface HeavyProps7961 {
  config: DeepPartial7961<NestedConfig7961>;
  path?: ConfigPaths7961;
}

const HeavyComponent7961 = memo(function HeavyComponent7961({ config }: HeavyProps7961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7961.displayName = 'HeavyComponent7961';
export default HeavyComponent7961;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7347<T> = T extends (infer U)[]
  ? DeepReadonlyArray7347<U>
  : T extends object
  ? DeepReadonlyObject7347<T>
  : T;

interface DeepReadonlyArray7347<T> extends ReadonlyArray<DeepReadonly7347<T>> {}

type DeepReadonlyObject7347<T> = {
  readonly [P in keyof T]: DeepReadonly7347<T[P]>;
};

type UnionToIntersection7347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7347<T> = UnionToIntersection7347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7347<T extends unknown[], V> = [...T, V];

type TuplifyUnion7347<T, L = LastOf7347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7347<TuplifyUnion7347<Exclude<T, L>>, L>;

type DeepPartial7347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7347<T[P]> }
  : T;

type Paths7347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7347<K, Paths7347<T[K], Prev7347[D]>> : never }[keyof T]
  : never;

type Prev7347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7347 {
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

type ConfigPaths7347 = Paths7347<NestedConfig7347>;

interface HeavyProps7347 {
  config: DeepPartial7347<NestedConfig7347>;
  path?: ConfigPaths7347;
}

const HeavyComponent7347 = memo(function HeavyComponent7347({ config }: HeavyProps7347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7347.displayName = 'HeavyComponent7347';
export default HeavyComponent7347;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7058<T> = T extends (infer U)[]
  ? DeepReadonlyArray7058<U>
  : T extends object
  ? DeepReadonlyObject7058<T>
  : T;

interface DeepReadonlyArray7058<T> extends ReadonlyArray<DeepReadonly7058<T>> {}

type DeepReadonlyObject7058<T> = {
  readonly [P in keyof T]: DeepReadonly7058<T[P]>;
};

type UnionToIntersection7058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7058<T> = UnionToIntersection7058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7058<T extends unknown[], V> = [...T, V];

type TuplifyUnion7058<T, L = LastOf7058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7058<TuplifyUnion7058<Exclude<T, L>>, L>;

type DeepPartial7058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7058<T[P]> }
  : T;

type Paths7058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7058<K, Paths7058<T[K], Prev7058[D]>> : never }[keyof T]
  : never;

type Prev7058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7058 {
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

type ConfigPaths7058 = Paths7058<NestedConfig7058>;

interface HeavyProps7058 {
  config: DeepPartial7058<NestedConfig7058>;
  path?: ConfigPaths7058;
}

const HeavyComponent7058 = memo(function HeavyComponent7058({ config }: HeavyProps7058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7058.displayName = 'HeavyComponent7058';
export default HeavyComponent7058;

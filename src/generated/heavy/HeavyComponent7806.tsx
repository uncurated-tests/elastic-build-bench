'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7806<T> = T extends (infer U)[]
  ? DeepReadonlyArray7806<U>
  : T extends object
  ? DeepReadonlyObject7806<T>
  : T;

interface DeepReadonlyArray7806<T> extends ReadonlyArray<DeepReadonly7806<T>> {}

type DeepReadonlyObject7806<T> = {
  readonly [P in keyof T]: DeepReadonly7806<T[P]>;
};

type UnionToIntersection7806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7806<T> = UnionToIntersection7806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7806<T extends unknown[], V> = [...T, V];

type TuplifyUnion7806<T, L = LastOf7806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7806<TuplifyUnion7806<Exclude<T, L>>, L>;

type DeepPartial7806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7806<T[P]> }
  : T;

type Paths7806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7806<K, Paths7806<T[K], Prev7806[D]>> : never }[keyof T]
  : never;

type Prev7806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7806 {
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

type ConfigPaths7806 = Paths7806<NestedConfig7806>;

interface HeavyProps7806 {
  config: DeepPartial7806<NestedConfig7806>;
  path?: ConfigPaths7806;
}

const HeavyComponent7806 = memo(function HeavyComponent7806({ config }: HeavyProps7806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7806.displayName = 'HeavyComponent7806';
export default HeavyComponent7806;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7357<T> = T extends (infer U)[]
  ? DeepReadonlyArray7357<U>
  : T extends object
  ? DeepReadonlyObject7357<T>
  : T;

interface DeepReadonlyArray7357<T> extends ReadonlyArray<DeepReadonly7357<T>> {}

type DeepReadonlyObject7357<T> = {
  readonly [P in keyof T]: DeepReadonly7357<T[P]>;
};

type UnionToIntersection7357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7357<T> = UnionToIntersection7357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7357<T extends unknown[], V> = [...T, V];

type TuplifyUnion7357<T, L = LastOf7357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7357<TuplifyUnion7357<Exclude<T, L>>, L>;

type DeepPartial7357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7357<T[P]> }
  : T;

type Paths7357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7357<K, Paths7357<T[K], Prev7357[D]>> : never }[keyof T]
  : never;

type Prev7357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7357 {
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

type ConfigPaths7357 = Paths7357<NestedConfig7357>;

interface HeavyProps7357 {
  config: DeepPartial7357<NestedConfig7357>;
  path?: ConfigPaths7357;
}

const HeavyComponent7357 = memo(function HeavyComponent7357({ config }: HeavyProps7357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7357.displayName = 'HeavyComponent7357';
export default HeavyComponent7357;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7115<T> = T extends (infer U)[]
  ? DeepReadonlyArray7115<U>
  : T extends object
  ? DeepReadonlyObject7115<T>
  : T;

interface DeepReadonlyArray7115<T> extends ReadonlyArray<DeepReadonly7115<T>> {}

type DeepReadonlyObject7115<T> = {
  readonly [P in keyof T]: DeepReadonly7115<T[P]>;
};

type UnionToIntersection7115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7115<T> = UnionToIntersection7115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7115<T extends unknown[], V> = [...T, V];

type TuplifyUnion7115<T, L = LastOf7115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7115<TuplifyUnion7115<Exclude<T, L>>, L>;

type DeepPartial7115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7115<T[P]> }
  : T;

type Paths7115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7115<K, Paths7115<T[K], Prev7115[D]>> : never }[keyof T]
  : never;

type Prev7115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7115 {
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

type ConfigPaths7115 = Paths7115<NestedConfig7115>;

interface HeavyProps7115 {
  config: DeepPartial7115<NestedConfig7115>;
  path?: ConfigPaths7115;
}

const HeavyComponent7115 = memo(function HeavyComponent7115({ config }: HeavyProps7115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7115.displayName = 'HeavyComponent7115';
export default HeavyComponent7115;

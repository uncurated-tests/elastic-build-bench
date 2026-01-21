'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7123<T> = T extends (infer U)[]
  ? DeepReadonlyArray7123<U>
  : T extends object
  ? DeepReadonlyObject7123<T>
  : T;

interface DeepReadonlyArray7123<T> extends ReadonlyArray<DeepReadonly7123<T>> {}

type DeepReadonlyObject7123<T> = {
  readonly [P in keyof T]: DeepReadonly7123<T[P]>;
};

type UnionToIntersection7123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7123<T> = UnionToIntersection7123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7123<T extends unknown[], V> = [...T, V];

type TuplifyUnion7123<T, L = LastOf7123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7123<TuplifyUnion7123<Exclude<T, L>>, L>;

type DeepPartial7123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7123<T[P]> }
  : T;

type Paths7123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7123<K, Paths7123<T[K], Prev7123[D]>> : never }[keyof T]
  : never;

type Prev7123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7123 {
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

type ConfigPaths7123 = Paths7123<NestedConfig7123>;

interface HeavyProps7123 {
  config: DeepPartial7123<NestedConfig7123>;
  path?: ConfigPaths7123;
}

const HeavyComponent7123 = memo(function HeavyComponent7123({ config }: HeavyProps7123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7123.displayName = 'HeavyComponent7123';
export default HeavyComponent7123;

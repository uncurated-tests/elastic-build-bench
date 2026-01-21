'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7398<T> = T extends (infer U)[]
  ? DeepReadonlyArray7398<U>
  : T extends object
  ? DeepReadonlyObject7398<T>
  : T;

interface DeepReadonlyArray7398<T> extends ReadonlyArray<DeepReadonly7398<T>> {}

type DeepReadonlyObject7398<T> = {
  readonly [P in keyof T]: DeepReadonly7398<T[P]>;
};

type UnionToIntersection7398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7398<T> = UnionToIntersection7398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7398<T extends unknown[], V> = [...T, V];

type TuplifyUnion7398<T, L = LastOf7398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7398<TuplifyUnion7398<Exclude<T, L>>, L>;

type DeepPartial7398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7398<T[P]> }
  : T;

type Paths7398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7398<K, Paths7398<T[K], Prev7398[D]>> : never }[keyof T]
  : never;

type Prev7398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7398 {
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

type ConfigPaths7398 = Paths7398<NestedConfig7398>;

interface HeavyProps7398 {
  config: DeepPartial7398<NestedConfig7398>;
  path?: ConfigPaths7398;
}

const HeavyComponent7398 = memo(function HeavyComponent7398({ config }: HeavyProps7398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7398.displayName = 'HeavyComponent7398';
export default HeavyComponent7398;

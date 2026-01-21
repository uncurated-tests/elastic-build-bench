'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7152<T> = T extends (infer U)[]
  ? DeepReadonlyArray7152<U>
  : T extends object
  ? DeepReadonlyObject7152<T>
  : T;

interface DeepReadonlyArray7152<T> extends ReadonlyArray<DeepReadonly7152<T>> {}

type DeepReadonlyObject7152<T> = {
  readonly [P in keyof T]: DeepReadonly7152<T[P]>;
};

type UnionToIntersection7152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7152<T> = UnionToIntersection7152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7152<T extends unknown[], V> = [...T, V];

type TuplifyUnion7152<T, L = LastOf7152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7152<TuplifyUnion7152<Exclude<T, L>>, L>;

type DeepPartial7152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7152<T[P]> }
  : T;

type Paths7152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7152<K, Paths7152<T[K], Prev7152[D]>> : never }[keyof T]
  : never;

type Prev7152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7152 {
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

type ConfigPaths7152 = Paths7152<NestedConfig7152>;

interface HeavyProps7152 {
  config: DeepPartial7152<NestedConfig7152>;
  path?: ConfigPaths7152;
}

const HeavyComponent7152 = memo(function HeavyComponent7152({ config }: HeavyProps7152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7152.displayName = 'HeavyComponent7152';
export default HeavyComponent7152;

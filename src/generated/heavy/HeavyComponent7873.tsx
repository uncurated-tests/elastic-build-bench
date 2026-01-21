'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7873<T> = T extends (infer U)[]
  ? DeepReadonlyArray7873<U>
  : T extends object
  ? DeepReadonlyObject7873<T>
  : T;

interface DeepReadonlyArray7873<T> extends ReadonlyArray<DeepReadonly7873<T>> {}

type DeepReadonlyObject7873<T> = {
  readonly [P in keyof T]: DeepReadonly7873<T[P]>;
};

type UnionToIntersection7873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7873<T> = UnionToIntersection7873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7873<T extends unknown[], V> = [...T, V];

type TuplifyUnion7873<T, L = LastOf7873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7873<TuplifyUnion7873<Exclude<T, L>>, L>;

type DeepPartial7873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7873<T[P]> }
  : T;

type Paths7873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7873<K, Paths7873<T[K], Prev7873[D]>> : never }[keyof T]
  : never;

type Prev7873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7873 {
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

type ConfigPaths7873 = Paths7873<NestedConfig7873>;

interface HeavyProps7873 {
  config: DeepPartial7873<NestedConfig7873>;
  path?: ConfigPaths7873;
}

const HeavyComponent7873 = memo(function HeavyComponent7873({ config }: HeavyProps7873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7873.displayName = 'HeavyComponent7873';
export default HeavyComponent7873;

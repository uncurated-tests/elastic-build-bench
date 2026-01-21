'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7818<T> = T extends (infer U)[]
  ? DeepReadonlyArray7818<U>
  : T extends object
  ? DeepReadonlyObject7818<T>
  : T;

interface DeepReadonlyArray7818<T> extends ReadonlyArray<DeepReadonly7818<T>> {}

type DeepReadonlyObject7818<T> = {
  readonly [P in keyof T]: DeepReadonly7818<T[P]>;
};

type UnionToIntersection7818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7818<T> = UnionToIntersection7818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7818<T extends unknown[], V> = [...T, V];

type TuplifyUnion7818<T, L = LastOf7818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7818<TuplifyUnion7818<Exclude<T, L>>, L>;

type DeepPartial7818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7818<T[P]> }
  : T;

type Paths7818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7818<K, Paths7818<T[K], Prev7818[D]>> : never }[keyof T]
  : never;

type Prev7818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7818 {
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

type ConfigPaths7818 = Paths7818<NestedConfig7818>;

interface HeavyProps7818 {
  config: DeepPartial7818<NestedConfig7818>;
  path?: ConfigPaths7818;
}

const HeavyComponent7818 = memo(function HeavyComponent7818({ config }: HeavyProps7818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7818.displayName = 'HeavyComponent7818';
export default HeavyComponent7818;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7886<T> = T extends (infer U)[]
  ? DeepReadonlyArray7886<U>
  : T extends object
  ? DeepReadonlyObject7886<T>
  : T;

interface DeepReadonlyArray7886<T> extends ReadonlyArray<DeepReadonly7886<T>> {}

type DeepReadonlyObject7886<T> = {
  readonly [P in keyof T]: DeepReadonly7886<T[P]>;
};

type UnionToIntersection7886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7886<T> = UnionToIntersection7886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7886<T extends unknown[], V> = [...T, V];

type TuplifyUnion7886<T, L = LastOf7886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7886<TuplifyUnion7886<Exclude<T, L>>, L>;

type DeepPartial7886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7886<T[P]> }
  : T;

type Paths7886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7886<K, Paths7886<T[K], Prev7886[D]>> : never }[keyof T]
  : never;

type Prev7886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7886 {
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

type ConfigPaths7886 = Paths7886<NestedConfig7886>;

interface HeavyProps7886 {
  config: DeepPartial7886<NestedConfig7886>;
  path?: ConfigPaths7886;
}

const HeavyComponent7886 = memo(function HeavyComponent7886({ config }: HeavyProps7886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7886.displayName = 'HeavyComponent7886';
export default HeavyComponent7886;

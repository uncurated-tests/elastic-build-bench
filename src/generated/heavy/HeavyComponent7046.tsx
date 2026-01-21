'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7046<T> = T extends (infer U)[]
  ? DeepReadonlyArray7046<U>
  : T extends object
  ? DeepReadonlyObject7046<T>
  : T;

interface DeepReadonlyArray7046<T> extends ReadonlyArray<DeepReadonly7046<T>> {}

type DeepReadonlyObject7046<T> = {
  readonly [P in keyof T]: DeepReadonly7046<T[P]>;
};

type UnionToIntersection7046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7046<T> = UnionToIntersection7046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7046<T extends unknown[], V> = [...T, V];

type TuplifyUnion7046<T, L = LastOf7046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7046<TuplifyUnion7046<Exclude<T, L>>, L>;

type DeepPartial7046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7046<T[P]> }
  : T;

type Paths7046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7046<K, Paths7046<T[K], Prev7046[D]>> : never }[keyof T]
  : never;

type Prev7046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7046 {
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

type ConfigPaths7046 = Paths7046<NestedConfig7046>;

interface HeavyProps7046 {
  config: DeepPartial7046<NestedConfig7046>;
  path?: ConfigPaths7046;
}

const HeavyComponent7046 = memo(function HeavyComponent7046({ config }: HeavyProps7046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7046.displayName = 'HeavyComponent7046';
export default HeavyComponent7046;

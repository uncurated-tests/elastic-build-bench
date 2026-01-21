'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7036<T> = T extends (infer U)[]
  ? DeepReadonlyArray7036<U>
  : T extends object
  ? DeepReadonlyObject7036<T>
  : T;

interface DeepReadonlyArray7036<T> extends ReadonlyArray<DeepReadonly7036<T>> {}

type DeepReadonlyObject7036<T> = {
  readonly [P in keyof T]: DeepReadonly7036<T[P]>;
};

type UnionToIntersection7036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7036<T> = UnionToIntersection7036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7036<T extends unknown[], V> = [...T, V];

type TuplifyUnion7036<T, L = LastOf7036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7036<TuplifyUnion7036<Exclude<T, L>>, L>;

type DeepPartial7036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7036<T[P]> }
  : T;

type Paths7036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7036<K, Paths7036<T[K], Prev7036[D]>> : never }[keyof T]
  : never;

type Prev7036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7036 {
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

type ConfigPaths7036 = Paths7036<NestedConfig7036>;

interface HeavyProps7036 {
  config: DeepPartial7036<NestedConfig7036>;
  path?: ConfigPaths7036;
}

const HeavyComponent7036 = memo(function HeavyComponent7036({ config }: HeavyProps7036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7036.displayName = 'HeavyComponent7036';
export default HeavyComponent7036;

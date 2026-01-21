'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7504<T> = T extends (infer U)[]
  ? DeepReadonlyArray7504<U>
  : T extends object
  ? DeepReadonlyObject7504<T>
  : T;

interface DeepReadonlyArray7504<T> extends ReadonlyArray<DeepReadonly7504<T>> {}

type DeepReadonlyObject7504<T> = {
  readonly [P in keyof T]: DeepReadonly7504<T[P]>;
};

type UnionToIntersection7504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7504<T> = UnionToIntersection7504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7504<T extends unknown[], V> = [...T, V];

type TuplifyUnion7504<T, L = LastOf7504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7504<TuplifyUnion7504<Exclude<T, L>>, L>;

type DeepPartial7504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7504<T[P]> }
  : T;

type Paths7504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7504<K, Paths7504<T[K], Prev7504[D]>> : never }[keyof T]
  : never;

type Prev7504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7504 {
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

type ConfigPaths7504 = Paths7504<NestedConfig7504>;

interface HeavyProps7504 {
  config: DeepPartial7504<NestedConfig7504>;
  path?: ConfigPaths7504;
}

const HeavyComponent7504 = memo(function HeavyComponent7504({ config }: HeavyProps7504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7504.displayName = 'HeavyComponent7504';
export default HeavyComponent7504;

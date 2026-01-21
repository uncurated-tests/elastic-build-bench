'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7927<T> = T extends (infer U)[]
  ? DeepReadonlyArray7927<U>
  : T extends object
  ? DeepReadonlyObject7927<T>
  : T;

interface DeepReadonlyArray7927<T> extends ReadonlyArray<DeepReadonly7927<T>> {}

type DeepReadonlyObject7927<T> = {
  readonly [P in keyof T]: DeepReadonly7927<T[P]>;
};

type UnionToIntersection7927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7927<T> = UnionToIntersection7927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7927<T extends unknown[], V> = [...T, V];

type TuplifyUnion7927<T, L = LastOf7927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7927<TuplifyUnion7927<Exclude<T, L>>, L>;

type DeepPartial7927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7927<T[P]> }
  : T;

type Paths7927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7927<K, Paths7927<T[K], Prev7927[D]>> : never }[keyof T]
  : never;

type Prev7927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7927 {
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

type ConfigPaths7927 = Paths7927<NestedConfig7927>;

interface HeavyProps7927 {
  config: DeepPartial7927<NestedConfig7927>;
  path?: ConfigPaths7927;
}

const HeavyComponent7927 = memo(function HeavyComponent7927({ config }: HeavyProps7927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7927.displayName = 'HeavyComponent7927';
export default HeavyComponent7927;

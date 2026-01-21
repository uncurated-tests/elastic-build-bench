'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7586<T> = T extends (infer U)[]
  ? DeepReadonlyArray7586<U>
  : T extends object
  ? DeepReadonlyObject7586<T>
  : T;

interface DeepReadonlyArray7586<T> extends ReadonlyArray<DeepReadonly7586<T>> {}

type DeepReadonlyObject7586<T> = {
  readonly [P in keyof T]: DeepReadonly7586<T[P]>;
};

type UnionToIntersection7586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7586<T> = UnionToIntersection7586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7586<T extends unknown[], V> = [...T, V];

type TuplifyUnion7586<T, L = LastOf7586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7586<TuplifyUnion7586<Exclude<T, L>>, L>;

type DeepPartial7586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7586<T[P]> }
  : T;

type Paths7586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7586<K, Paths7586<T[K], Prev7586[D]>> : never }[keyof T]
  : never;

type Prev7586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7586 {
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

type ConfigPaths7586 = Paths7586<NestedConfig7586>;

interface HeavyProps7586 {
  config: DeepPartial7586<NestedConfig7586>;
  path?: ConfigPaths7586;
}

const HeavyComponent7586 = memo(function HeavyComponent7586({ config }: HeavyProps7586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7586.displayName = 'HeavyComponent7586';
export default HeavyComponent7586;

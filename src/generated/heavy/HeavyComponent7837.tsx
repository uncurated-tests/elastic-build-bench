'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7837<T> = T extends (infer U)[]
  ? DeepReadonlyArray7837<U>
  : T extends object
  ? DeepReadonlyObject7837<T>
  : T;

interface DeepReadonlyArray7837<T> extends ReadonlyArray<DeepReadonly7837<T>> {}

type DeepReadonlyObject7837<T> = {
  readonly [P in keyof T]: DeepReadonly7837<T[P]>;
};

type UnionToIntersection7837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7837<T> = UnionToIntersection7837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7837<T extends unknown[], V> = [...T, V];

type TuplifyUnion7837<T, L = LastOf7837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7837<TuplifyUnion7837<Exclude<T, L>>, L>;

type DeepPartial7837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7837<T[P]> }
  : T;

type Paths7837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7837<K, Paths7837<T[K], Prev7837[D]>> : never }[keyof T]
  : never;

type Prev7837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7837 {
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

type ConfigPaths7837 = Paths7837<NestedConfig7837>;

interface HeavyProps7837 {
  config: DeepPartial7837<NestedConfig7837>;
  path?: ConfigPaths7837;
}

const HeavyComponent7837 = memo(function HeavyComponent7837({ config }: HeavyProps7837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7837.displayName = 'HeavyComponent7837';
export default HeavyComponent7837;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7077<T> = T extends (infer U)[]
  ? DeepReadonlyArray7077<U>
  : T extends object
  ? DeepReadonlyObject7077<T>
  : T;

interface DeepReadonlyArray7077<T> extends ReadonlyArray<DeepReadonly7077<T>> {}

type DeepReadonlyObject7077<T> = {
  readonly [P in keyof T]: DeepReadonly7077<T[P]>;
};

type UnionToIntersection7077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7077<T> = UnionToIntersection7077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7077<T extends unknown[], V> = [...T, V];

type TuplifyUnion7077<T, L = LastOf7077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7077<TuplifyUnion7077<Exclude<T, L>>, L>;

type DeepPartial7077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7077<T[P]> }
  : T;

type Paths7077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7077<K, Paths7077<T[K], Prev7077[D]>> : never }[keyof T]
  : never;

type Prev7077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7077 {
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

type ConfigPaths7077 = Paths7077<NestedConfig7077>;

interface HeavyProps7077 {
  config: DeepPartial7077<NestedConfig7077>;
  path?: ConfigPaths7077;
}

const HeavyComponent7077 = memo(function HeavyComponent7077({ config }: HeavyProps7077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7077.displayName = 'HeavyComponent7077';
export default HeavyComponent7077;

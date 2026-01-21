'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7602<T> = T extends (infer U)[]
  ? DeepReadonlyArray7602<U>
  : T extends object
  ? DeepReadonlyObject7602<T>
  : T;

interface DeepReadonlyArray7602<T> extends ReadonlyArray<DeepReadonly7602<T>> {}

type DeepReadonlyObject7602<T> = {
  readonly [P in keyof T]: DeepReadonly7602<T[P]>;
};

type UnionToIntersection7602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7602<T> = UnionToIntersection7602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7602<T extends unknown[], V> = [...T, V];

type TuplifyUnion7602<T, L = LastOf7602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7602<TuplifyUnion7602<Exclude<T, L>>, L>;

type DeepPartial7602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7602<T[P]> }
  : T;

type Paths7602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7602<K, Paths7602<T[K], Prev7602[D]>> : never }[keyof T]
  : never;

type Prev7602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7602 {
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

type ConfigPaths7602 = Paths7602<NestedConfig7602>;

interface HeavyProps7602 {
  config: DeepPartial7602<NestedConfig7602>;
  path?: ConfigPaths7602;
}

const HeavyComponent7602 = memo(function HeavyComponent7602({ config }: HeavyProps7602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7602.displayName = 'HeavyComponent7602';
export default HeavyComponent7602;

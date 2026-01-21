'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7309<T> = T extends (infer U)[]
  ? DeepReadonlyArray7309<U>
  : T extends object
  ? DeepReadonlyObject7309<T>
  : T;

interface DeepReadonlyArray7309<T> extends ReadonlyArray<DeepReadonly7309<T>> {}

type DeepReadonlyObject7309<T> = {
  readonly [P in keyof T]: DeepReadonly7309<T[P]>;
};

type UnionToIntersection7309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7309<T> = UnionToIntersection7309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7309<T extends unknown[], V> = [...T, V];

type TuplifyUnion7309<T, L = LastOf7309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7309<TuplifyUnion7309<Exclude<T, L>>, L>;

type DeepPartial7309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7309<T[P]> }
  : T;

type Paths7309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7309<K, Paths7309<T[K], Prev7309[D]>> : never }[keyof T]
  : never;

type Prev7309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7309 {
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

type ConfigPaths7309 = Paths7309<NestedConfig7309>;

interface HeavyProps7309 {
  config: DeepPartial7309<NestedConfig7309>;
  path?: ConfigPaths7309;
}

const HeavyComponent7309 = memo(function HeavyComponent7309({ config }: HeavyProps7309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7309.displayName = 'HeavyComponent7309';
export default HeavyComponent7309;

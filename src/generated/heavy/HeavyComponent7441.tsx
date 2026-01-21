'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7441<T> = T extends (infer U)[]
  ? DeepReadonlyArray7441<U>
  : T extends object
  ? DeepReadonlyObject7441<T>
  : T;

interface DeepReadonlyArray7441<T> extends ReadonlyArray<DeepReadonly7441<T>> {}

type DeepReadonlyObject7441<T> = {
  readonly [P in keyof T]: DeepReadonly7441<T[P]>;
};

type UnionToIntersection7441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7441<T> = UnionToIntersection7441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7441<T extends unknown[], V> = [...T, V];

type TuplifyUnion7441<T, L = LastOf7441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7441<TuplifyUnion7441<Exclude<T, L>>, L>;

type DeepPartial7441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7441<T[P]> }
  : T;

type Paths7441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7441<K, Paths7441<T[K], Prev7441[D]>> : never }[keyof T]
  : never;

type Prev7441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7441 {
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

type ConfigPaths7441 = Paths7441<NestedConfig7441>;

interface HeavyProps7441 {
  config: DeepPartial7441<NestedConfig7441>;
  path?: ConfigPaths7441;
}

const HeavyComponent7441 = memo(function HeavyComponent7441({ config }: HeavyProps7441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7441.displayName = 'HeavyComponent7441';
export default HeavyComponent7441;

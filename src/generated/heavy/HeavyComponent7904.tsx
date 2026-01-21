'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7904<T> = T extends (infer U)[]
  ? DeepReadonlyArray7904<U>
  : T extends object
  ? DeepReadonlyObject7904<T>
  : T;

interface DeepReadonlyArray7904<T> extends ReadonlyArray<DeepReadonly7904<T>> {}

type DeepReadonlyObject7904<T> = {
  readonly [P in keyof T]: DeepReadonly7904<T[P]>;
};

type UnionToIntersection7904<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7904<T> = UnionToIntersection7904<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7904<T extends unknown[], V> = [...T, V];

type TuplifyUnion7904<T, L = LastOf7904<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7904<TuplifyUnion7904<Exclude<T, L>>, L>;

type DeepPartial7904<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7904<T[P]> }
  : T;

type Paths7904<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7904<K, Paths7904<T[K], Prev7904[D]>> : never }[keyof T]
  : never;

type Prev7904 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7904<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7904 {
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

type ConfigPaths7904 = Paths7904<NestedConfig7904>;

interface HeavyProps7904 {
  config: DeepPartial7904<NestedConfig7904>;
  path?: ConfigPaths7904;
}

const HeavyComponent7904 = memo(function HeavyComponent7904({ config }: HeavyProps7904) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7904) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7904 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7904: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7904.displayName = 'HeavyComponent7904';
export default HeavyComponent7904;

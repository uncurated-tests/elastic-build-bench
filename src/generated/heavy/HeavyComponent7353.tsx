'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7353<T> = T extends (infer U)[]
  ? DeepReadonlyArray7353<U>
  : T extends object
  ? DeepReadonlyObject7353<T>
  : T;

interface DeepReadonlyArray7353<T> extends ReadonlyArray<DeepReadonly7353<T>> {}

type DeepReadonlyObject7353<T> = {
  readonly [P in keyof T]: DeepReadonly7353<T[P]>;
};

type UnionToIntersection7353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7353<T> = UnionToIntersection7353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7353<T extends unknown[], V> = [...T, V];

type TuplifyUnion7353<T, L = LastOf7353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7353<TuplifyUnion7353<Exclude<T, L>>, L>;

type DeepPartial7353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7353<T[P]> }
  : T;

type Paths7353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7353<K, Paths7353<T[K], Prev7353[D]>> : never }[keyof T]
  : never;

type Prev7353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7353 {
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

type ConfigPaths7353 = Paths7353<NestedConfig7353>;

interface HeavyProps7353 {
  config: DeepPartial7353<NestedConfig7353>;
  path?: ConfigPaths7353;
}

const HeavyComponent7353 = memo(function HeavyComponent7353({ config }: HeavyProps7353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7353.displayName = 'HeavyComponent7353';
export default HeavyComponent7353;

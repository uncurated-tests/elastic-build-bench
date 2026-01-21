'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7876<T> = T extends (infer U)[]
  ? DeepReadonlyArray7876<U>
  : T extends object
  ? DeepReadonlyObject7876<T>
  : T;

interface DeepReadonlyArray7876<T> extends ReadonlyArray<DeepReadonly7876<T>> {}

type DeepReadonlyObject7876<T> = {
  readonly [P in keyof T]: DeepReadonly7876<T[P]>;
};

type UnionToIntersection7876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7876<T> = UnionToIntersection7876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7876<T extends unknown[], V> = [...T, V];

type TuplifyUnion7876<T, L = LastOf7876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7876<TuplifyUnion7876<Exclude<T, L>>, L>;

type DeepPartial7876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7876<T[P]> }
  : T;

type Paths7876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7876<K, Paths7876<T[K], Prev7876[D]>> : never }[keyof T]
  : never;

type Prev7876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7876 {
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

type ConfigPaths7876 = Paths7876<NestedConfig7876>;

interface HeavyProps7876 {
  config: DeepPartial7876<NestedConfig7876>;
  path?: ConfigPaths7876;
}

const HeavyComponent7876 = memo(function HeavyComponent7876({ config }: HeavyProps7876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7876.displayName = 'HeavyComponent7876';
export default HeavyComponent7876;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7527<T> = T extends (infer U)[]
  ? DeepReadonlyArray7527<U>
  : T extends object
  ? DeepReadonlyObject7527<T>
  : T;

interface DeepReadonlyArray7527<T> extends ReadonlyArray<DeepReadonly7527<T>> {}

type DeepReadonlyObject7527<T> = {
  readonly [P in keyof T]: DeepReadonly7527<T[P]>;
};

type UnionToIntersection7527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7527<T> = UnionToIntersection7527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7527<T extends unknown[], V> = [...T, V];

type TuplifyUnion7527<T, L = LastOf7527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7527<TuplifyUnion7527<Exclude<T, L>>, L>;

type DeepPartial7527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7527<T[P]> }
  : T;

type Paths7527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7527<K, Paths7527<T[K], Prev7527[D]>> : never }[keyof T]
  : never;

type Prev7527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7527 {
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

type ConfigPaths7527 = Paths7527<NestedConfig7527>;

interface HeavyProps7527 {
  config: DeepPartial7527<NestedConfig7527>;
  path?: ConfigPaths7527;
}

const HeavyComponent7527 = memo(function HeavyComponent7527({ config }: HeavyProps7527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7527.displayName = 'HeavyComponent7527';
export default HeavyComponent7527;

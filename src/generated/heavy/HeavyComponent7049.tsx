'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7049<T> = T extends (infer U)[]
  ? DeepReadonlyArray7049<U>
  : T extends object
  ? DeepReadonlyObject7049<T>
  : T;

interface DeepReadonlyArray7049<T> extends ReadonlyArray<DeepReadonly7049<T>> {}

type DeepReadonlyObject7049<T> = {
  readonly [P in keyof T]: DeepReadonly7049<T[P]>;
};

type UnionToIntersection7049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7049<T> = UnionToIntersection7049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7049<T extends unknown[], V> = [...T, V];

type TuplifyUnion7049<T, L = LastOf7049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7049<TuplifyUnion7049<Exclude<T, L>>, L>;

type DeepPartial7049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7049<T[P]> }
  : T;

type Paths7049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7049<K, Paths7049<T[K], Prev7049[D]>> : never }[keyof T]
  : never;

type Prev7049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7049 {
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

type ConfigPaths7049 = Paths7049<NestedConfig7049>;

interface HeavyProps7049 {
  config: DeepPartial7049<NestedConfig7049>;
  path?: ConfigPaths7049;
}

const HeavyComponent7049 = memo(function HeavyComponent7049({ config }: HeavyProps7049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7049.displayName = 'HeavyComponent7049';
export default HeavyComponent7049;

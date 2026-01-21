'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7840<T> = T extends (infer U)[]
  ? DeepReadonlyArray7840<U>
  : T extends object
  ? DeepReadonlyObject7840<T>
  : T;

interface DeepReadonlyArray7840<T> extends ReadonlyArray<DeepReadonly7840<T>> {}

type DeepReadonlyObject7840<T> = {
  readonly [P in keyof T]: DeepReadonly7840<T[P]>;
};

type UnionToIntersection7840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7840<T> = UnionToIntersection7840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7840<T extends unknown[], V> = [...T, V];

type TuplifyUnion7840<T, L = LastOf7840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7840<TuplifyUnion7840<Exclude<T, L>>, L>;

type DeepPartial7840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7840<T[P]> }
  : T;

type Paths7840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7840<K, Paths7840<T[K], Prev7840[D]>> : never }[keyof T]
  : never;

type Prev7840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7840 {
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

type ConfigPaths7840 = Paths7840<NestedConfig7840>;

interface HeavyProps7840 {
  config: DeepPartial7840<NestedConfig7840>;
  path?: ConfigPaths7840;
}

const HeavyComponent7840 = memo(function HeavyComponent7840({ config }: HeavyProps7840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7840.displayName = 'HeavyComponent7840';
export default HeavyComponent7840;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7921<T> = T extends (infer U)[]
  ? DeepReadonlyArray7921<U>
  : T extends object
  ? DeepReadonlyObject7921<T>
  : T;

interface DeepReadonlyArray7921<T> extends ReadonlyArray<DeepReadonly7921<T>> {}

type DeepReadonlyObject7921<T> = {
  readonly [P in keyof T]: DeepReadonly7921<T[P]>;
};

type UnionToIntersection7921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7921<T> = UnionToIntersection7921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7921<T extends unknown[], V> = [...T, V];

type TuplifyUnion7921<T, L = LastOf7921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7921<TuplifyUnion7921<Exclude<T, L>>, L>;

type DeepPartial7921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7921<T[P]> }
  : T;

type Paths7921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7921<K, Paths7921<T[K], Prev7921[D]>> : never }[keyof T]
  : never;

type Prev7921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7921 {
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

type ConfigPaths7921 = Paths7921<NestedConfig7921>;

interface HeavyProps7921 {
  config: DeepPartial7921<NestedConfig7921>;
  path?: ConfigPaths7921;
}

const HeavyComponent7921 = memo(function HeavyComponent7921({ config }: HeavyProps7921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7921.displayName = 'HeavyComponent7921';
export default HeavyComponent7921;

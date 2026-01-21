'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7102<T> = T extends (infer U)[]
  ? DeepReadonlyArray7102<U>
  : T extends object
  ? DeepReadonlyObject7102<T>
  : T;

interface DeepReadonlyArray7102<T> extends ReadonlyArray<DeepReadonly7102<T>> {}

type DeepReadonlyObject7102<T> = {
  readonly [P in keyof T]: DeepReadonly7102<T[P]>;
};

type UnionToIntersection7102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7102<T> = UnionToIntersection7102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7102<T extends unknown[], V> = [...T, V];

type TuplifyUnion7102<T, L = LastOf7102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7102<TuplifyUnion7102<Exclude<T, L>>, L>;

type DeepPartial7102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7102<T[P]> }
  : T;

type Paths7102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7102<K, Paths7102<T[K], Prev7102[D]>> : never }[keyof T]
  : never;

type Prev7102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7102 {
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

type ConfigPaths7102 = Paths7102<NestedConfig7102>;

interface HeavyProps7102 {
  config: DeepPartial7102<NestedConfig7102>;
  path?: ConfigPaths7102;
}

const HeavyComponent7102 = memo(function HeavyComponent7102({ config }: HeavyProps7102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7102.displayName = 'HeavyComponent7102';
export default HeavyComponent7102;

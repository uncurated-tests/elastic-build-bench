'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7048<T> = T extends (infer U)[]
  ? DeepReadonlyArray7048<U>
  : T extends object
  ? DeepReadonlyObject7048<T>
  : T;

interface DeepReadonlyArray7048<T> extends ReadonlyArray<DeepReadonly7048<T>> {}

type DeepReadonlyObject7048<T> = {
  readonly [P in keyof T]: DeepReadonly7048<T[P]>;
};

type UnionToIntersection7048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7048<T> = UnionToIntersection7048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7048<T extends unknown[], V> = [...T, V];

type TuplifyUnion7048<T, L = LastOf7048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7048<TuplifyUnion7048<Exclude<T, L>>, L>;

type DeepPartial7048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7048<T[P]> }
  : T;

type Paths7048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7048<K, Paths7048<T[K], Prev7048[D]>> : never }[keyof T]
  : never;

type Prev7048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7048 {
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

type ConfigPaths7048 = Paths7048<NestedConfig7048>;

interface HeavyProps7048 {
  config: DeepPartial7048<NestedConfig7048>;
  path?: ConfigPaths7048;
}

const HeavyComponent7048 = memo(function HeavyComponent7048({ config }: HeavyProps7048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7048.displayName = 'HeavyComponent7048';
export default HeavyComponent7048;

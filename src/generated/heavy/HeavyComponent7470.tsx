'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7470<T> = T extends (infer U)[]
  ? DeepReadonlyArray7470<U>
  : T extends object
  ? DeepReadonlyObject7470<T>
  : T;

interface DeepReadonlyArray7470<T> extends ReadonlyArray<DeepReadonly7470<T>> {}

type DeepReadonlyObject7470<T> = {
  readonly [P in keyof T]: DeepReadonly7470<T[P]>;
};

type UnionToIntersection7470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7470<T> = UnionToIntersection7470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7470<T extends unknown[], V> = [...T, V];

type TuplifyUnion7470<T, L = LastOf7470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7470<TuplifyUnion7470<Exclude<T, L>>, L>;

type DeepPartial7470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7470<T[P]> }
  : T;

type Paths7470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7470<K, Paths7470<T[K], Prev7470[D]>> : never }[keyof T]
  : never;

type Prev7470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7470 {
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

type ConfigPaths7470 = Paths7470<NestedConfig7470>;

interface HeavyProps7470 {
  config: DeepPartial7470<NestedConfig7470>;
  path?: ConfigPaths7470;
}

const HeavyComponent7470 = memo(function HeavyComponent7470({ config }: HeavyProps7470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7470.displayName = 'HeavyComponent7470';
export default HeavyComponent7470;

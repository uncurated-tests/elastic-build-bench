'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7134<T> = T extends (infer U)[]
  ? DeepReadonlyArray7134<U>
  : T extends object
  ? DeepReadonlyObject7134<T>
  : T;

interface DeepReadonlyArray7134<T> extends ReadonlyArray<DeepReadonly7134<T>> {}

type DeepReadonlyObject7134<T> = {
  readonly [P in keyof T]: DeepReadonly7134<T[P]>;
};

type UnionToIntersection7134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7134<T> = UnionToIntersection7134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7134<T extends unknown[], V> = [...T, V];

type TuplifyUnion7134<T, L = LastOf7134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7134<TuplifyUnion7134<Exclude<T, L>>, L>;

type DeepPartial7134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7134<T[P]> }
  : T;

type Paths7134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7134<K, Paths7134<T[K], Prev7134[D]>> : never }[keyof T]
  : never;

type Prev7134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7134 {
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

type ConfigPaths7134 = Paths7134<NestedConfig7134>;

interface HeavyProps7134 {
  config: DeepPartial7134<NestedConfig7134>;
  path?: ConfigPaths7134;
}

const HeavyComponent7134 = memo(function HeavyComponent7134({ config }: HeavyProps7134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7134.displayName = 'HeavyComponent7134';
export default HeavyComponent7134;

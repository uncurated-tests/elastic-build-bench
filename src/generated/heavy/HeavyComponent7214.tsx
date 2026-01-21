'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7214<T> = T extends (infer U)[]
  ? DeepReadonlyArray7214<U>
  : T extends object
  ? DeepReadonlyObject7214<T>
  : T;

interface DeepReadonlyArray7214<T> extends ReadonlyArray<DeepReadonly7214<T>> {}

type DeepReadonlyObject7214<T> = {
  readonly [P in keyof T]: DeepReadonly7214<T[P]>;
};

type UnionToIntersection7214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7214<T> = UnionToIntersection7214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7214<T extends unknown[], V> = [...T, V];

type TuplifyUnion7214<T, L = LastOf7214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7214<TuplifyUnion7214<Exclude<T, L>>, L>;

type DeepPartial7214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7214<T[P]> }
  : T;

type Paths7214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7214<K, Paths7214<T[K], Prev7214[D]>> : never }[keyof T]
  : never;

type Prev7214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7214 {
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

type ConfigPaths7214 = Paths7214<NestedConfig7214>;

interface HeavyProps7214 {
  config: DeepPartial7214<NestedConfig7214>;
  path?: ConfigPaths7214;
}

const HeavyComponent7214 = memo(function HeavyComponent7214({ config }: HeavyProps7214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7214.displayName = 'HeavyComponent7214';
export default HeavyComponent7214;

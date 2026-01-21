'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7416<T> = T extends (infer U)[]
  ? DeepReadonlyArray7416<U>
  : T extends object
  ? DeepReadonlyObject7416<T>
  : T;

interface DeepReadonlyArray7416<T> extends ReadonlyArray<DeepReadonly7416<T>> {}

type DeepReadonlyObject7416<T> = {
  readonly [P in keyof T]: DeepReadonly7416<T[P]>;
};

type UnionToIntersection7416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7416<T> = UnionToIntersection7416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7416<T extends unknown[], V> = [...T, V];

type TuplifyUnion7416<T, L = LastOf7416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7416<TuplifyUnion7416<Exclude<T, L>>, L>;

type DeepPartial7416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7416<T[P]> }
  : T;

type Paths7416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7416<K, Paths7416<T[K], Prev7416[D]>> : never }[keyof T]
  : never;

type Prev7416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7416 {
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

type ConfigPaths7416 = Paths7416<NestedConfig7416>;

interface HeavyProps7416 {
  config: DeepPartial7416<NestedConfig7416>;
  path?: ConfigPaths7416;
}

const HeavyComponent7416 = memo(function HeavyComponent7416({ config }: HeavyProps7416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7416.displayName = 'HeavyComponent7416';
export default HeavyComponent7416;

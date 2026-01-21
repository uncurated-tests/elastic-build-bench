'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7400<T> = T extends (infer U)[]
  ? DeepReadonlyArray7400<U>
  : T extends object
  ? DeepReadonlyObject7400<T>
  : T;

interface DeepReadonlyArray7400<T> extends ReadonlyArray<DeepReadonly7400<T>> {}

type DeepReadonlyObject7400<T> = {
  readonly [P in keyof T]: DeepReadonly7400<T[P]>;
};

type UnionToIntersection7400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7400<T> = UnionToIntersection7400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7400<T extends unknown[], V> = [...T, V];

type TuplifyUnion7400<T, L = LastOf7400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7400<TuplifyUnion7400<Exclude<T, L>>, L>;

type DeepPartial7400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7400<T[P]> }
  : T;

type Paths7400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7400<K, Paths7400<T[K], Prev7400[D]>> : never }[keyof T]
  : never;

type Prev7400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7400 {
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

type ConfigPaths7400 = Paths7400<NestedConfig7400>;

interface HeavyProps7400 {
  config: DeepPartial7400<NestedConfig7400>;
  path?: ConfigPaths7400;
}

const HeavyComponent7400 = memo(function HeavyComponent7400({ config }: HeavyProps7400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7400.displayName = 'HeavyComponent7400';
export default HeavyComponent7400;

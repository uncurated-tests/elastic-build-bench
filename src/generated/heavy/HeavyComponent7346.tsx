'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7346<T> = T extends (infer U)[]
  ? DeepReadonlyArray7346<U>
  : T extends object
  ? DeepReadonlyObject7346<T>
  : T;

interface DeepReadonlyArray7346<T> extends ReadonlyArray<DeepReadonly7346<T>> {}

type DeepReadonlyObject7346<T> = {
  readonly [P in keyof T]: DeepReadonly7346<T[P]>;
};

type UnionToIntersection7346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7346<T> = UnionToIntersection7346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7346<T extends unknown[], V> = [...T, V];

type TuplifyUnion7346<T, L = LastOf7346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7346<TuplifyUnion7346<Exclude<T, L>>, L>;

type DeepPartial7346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7346<T[P]> }
  : T;

type Paths7346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7346<K, Paths7346<T[K], Prev7346[D]>> : never }[keyof T]
  : never;

type Prev7346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7346 {
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

type ConfigPaths7346 = Paths7346<NestedConfig7346>;

interface HeavyProps7346 {
  config: DeepPartial7346<NestedConfig7346>;
  path?: ConfigPaths7346;
}

const HeavyComponent7346 = memo(function HeavyComponent7346({ config }: HeavyProps7346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7346.displayName = 'HeavyComponent7346';
export default HeavyComponent7346;

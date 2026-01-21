'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7354<T> = T extends (infer U)[]
  ? DeepReadonlyArray7354<U>
  : T extends object
  ? DeepReadonlyObject7354<T>
  : T;

interface DeepReadonlyArray7354<T> extends ReadonlyArray<DeepReadonly7354<T>> {}

type DeepReadonlyObject7354<T> = {
  readonly [P in keyof T]: DeepReadonly7354<T[P]>;
};

type UnionToIntersection7354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7354<T> = UnionToIntersection7354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7354<T extends unknown[], V> = [...T, V];

type TuplifyUnion7354<T, L = LastOf7354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7354<TuplifyUnion7354<Exclude<T, L>>, L>;

type DeepPartial7354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7354<T[P]> }
  : T;

type Paths7354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7354<K, Paths7354<T[K], Prev7354[D]>> : never }[keyof T]
  : never;

type Prev7354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7354 {
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

type ConfigPaths7354 = Paths7354<NestedConfig7354>;

interface HeavyProps7354 {
  config: DeepPartial7354<NestedConfig7354>;
  path?: ConfigPaths7354;
}

const HeavyComponent7354 = memo(function HeavyComponent7354({ config }: HeavyProps7354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7354.displayName = 'HeavyComponent7354';
export default HeavyComponent7354;

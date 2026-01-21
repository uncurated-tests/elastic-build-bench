'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7538<T> = T extends (infer U)[]
  ? DeepReadonlyArray7538<U>
  : T extends object
  ? DeepReadonlyObject7538<T>
  : T;

interface DeepReadonlyArray7538<T> extends ReadonlyArray<DeepReadonly7538<T>> {}

type DeepReadonlyObject7538<T> = {
  readonly [P in keyof T]: DeepReadonly7538<T[P]>;
};

type UnionToIntersection7538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7538<T> = UnionToIntersection7538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7538<T extends unknown[], V> = [...T, V];

type TuplifyUnion7538<T, L = LastOf7538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7538<TuplifyUnion7538<Exclude<T, L>>, L>;

type DeepPartial7538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7538<T[P]> }
  : T;

type Paths7538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7538<K, Paths7538<T[K], Prev7538[D]>> : never }[keyof T]
  : never;

type Prev7538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7538 {
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

type ConfigPaths7538 = Paths7538<NestedConfig7538>;

interface HeavyProps7538 {
  config: DeepPartial7538<NestedConfig7538>;
  path?: ConfigPaths7538;
}

const HeavyComponent7538 = memo(function HeavyComponent7538({ config }: HeavyProps7538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7538.displayName = 'HeavyComponent7538';
export default HeavyComponent7538;

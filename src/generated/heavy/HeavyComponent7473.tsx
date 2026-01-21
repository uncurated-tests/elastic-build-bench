'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7473<T> = T extends (infer U)[]
  ? DeepReadonlyArray7473<U>
  : T extends object
  ? DeepReadonlyObject7473<T>
  : T;

interface DeepReadonlyArray7473<T> extends ReadonlyArray<DeepReadonly7473<T>> {}

type DeepReadonlyObject7473<T> = {
  readonly [P in keyof T]: DeepReadonly7473<T[P]>;
};

type UnionToIntersection7473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7473<T> = UnionToIntersection7473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7473<T extends unknown[], V> = [...T, V];

type TuplifyUnion7473<T, L = LastOf7473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7473<TuplifyUnion7473<Exclude<T, L>>, L>;

type DeepPartial7473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7473<T[P]> }
  : T;

type Paths7473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7473<K, Paths7473<T[K], Prev7473[D]>> : never }[keyof T]
  : never;

type Prev7473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7473 {
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

type ConfigPaths7473 = Paths7473<NestedConfig7473>;

interface HeavyProps7473 {
  config: DeepPartial7473<NestedConfig7473>;
  path?: ConfigPaths7473;
}

const HeavyComponent7473 = memo(function HeavyComponent7473({ config }: HeavyProps7473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7473.displayName = 'HeavyComponent7473';
export default HeavyComponent7473;

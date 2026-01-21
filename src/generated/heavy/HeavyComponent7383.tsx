'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7383<T> = T extends (infer U)[]
  ? DeepReadonlyArray7383<U>
  : T extends object
  ? DeepReadonlyObject7383<T>
  : T;

interface DeepReadonlyArray7383<T> extends ReadonlyArray<DeepReadonly7383<T>> {}

type DeepReadonlyObject7383<T> = {
  readonly [P in keyof T]: DeepReadonly7383<T[P]>;
};

type UnionToIntersection7383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7383<T> = UnionToIntersection7383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7383<T extends unknown[], V> = [...T, V];

type TuplifyUnion7383<T, L = LastOf7383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7383<TuplifyUnion7383<Exclude<T, L>>, L>;

type DeepPartial7383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7383<T[P]> }
  : T;

type Paths7383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7383<K, Paths7383<T[K], Prev7383[D]>> : never }[keyof T]
  : never;

type Prev7383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7383 {
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

type ConfigPaths7383 = Paths7383<NestedConfig7383>;

interface HeavyProps7383 {
  config: DeepPartial7383<NestedConfig7383>;
  path?: ConfigPaths7383;
}

const HeavyComponent7383 = memo(function HeavyComponent7383({ config }: HeavyProps7383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7383.displayName = 'HeavyComponent7383';
export default HeavyComponent7383;

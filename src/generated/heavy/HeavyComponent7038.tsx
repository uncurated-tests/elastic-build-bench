'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7038<T> = T extends (infer U)[]
  ? DeepReadonlyArray7038<U>
  : T extends object
  ? DeepReadonlyObject7038<T>
  : T;

interface DeepReadonlyArray7038<T> extends ReadonlyArray<DeepReadonly7038<T>> {}

type DeepReadonlyObject7038<T> = {
  readonly [P in keyof T]: DeepReadonly7038<T[P]>;
};

type UnionToIntersection7038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7038<T> = UnionToIntersection7038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7038<T extends unknown[], V> = [...T, V];

type TuplifyUnion7038<T, L = LastOf7038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7038<TuplifyUnion7038<Exclude<T, L>>, L>;

type DeepPartial7038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7038<T[P]> }
  : T;

type Paths7038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7038<K, Paths7038<T[K], Prev7038[D]>> : never }[keyof T]
  : never;

type Prev7038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7038 {
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

type ConfigPaths7038 = Paths7038<NestedConfig7038>;

interface HeavyProps7038 {
  config: DeepPartial7038<NestedConfig7038>;
  path?: ConfigPaths7038;
}

const HeavyComponent7038 = memo(function HeavyComponent7038({ config }: HeavyProps7038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7038.displayName = 'HeavyComponent7038';
export default HeavyComponent7038;

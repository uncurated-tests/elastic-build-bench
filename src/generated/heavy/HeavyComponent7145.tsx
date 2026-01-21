'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7145<T> = T extends (infer U)[]
  ? DeepReadonlyArray7145<U>
  : T extends object
  ? DeepReadonlyObject7145<T>
  : T;

interface DeepReadonlyArray7145<T> extends ReadonlyArray<DeepReadonly7145<T>> {}

type DeepReadonlyObject7145<T> = {
  readonly [P in keyof T]: DeepReadonly7145<T[P]>;
};

type UnionToIntersection7145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7145<T> = UnionToIntersection7145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7145<T extends unknown[], V> = [...T, V];

type TuplifyUnion7145<T, L = LastOf7145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7145<TuplifyUnion7145<Exclude<T, L>>, L>;

type DeepPartial7145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7145<T[P]> }
  : T;

type Paths7145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7145<K, Paths7145<T[K], Prev7145[D]>> : never }[keyof T]
  : never;

type Prev7145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7145 {
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

type ConfigPaths7145 = Paths7145<NestedConfig7145>;

interface HeavyProps7145 {
  config: DeepPartial7145<NestedConfig7145>;
  path?: ConfigPaths7145;
}

const HeavyComponent7145 = memo(function HeavyComponent7145({ config }: HeavyProps7145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7145.displayName = 'HeavyComponent7145';
export default HeavyComponent7145;

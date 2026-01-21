'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7952<T> = T extends (infer U)[]
  ? DeepReadonlyArray7952<U>
  : T extends object
  ? DeepReadonlyObject7952<T>
  : T;

interface DeepReadonlyArray7952<T> extends ReadonlyArray<DeepReadonly7952<T>> {}

type DeepReadonlyObject7952<T> = {
  readonly [P in keyof T]: DeepReadonly7952<T[P]>;
};

type UnionToIntersection7952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7952<T> = UnionToIntersection7952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7952<T extends unknown[], V> = [...T, V];

type TuplifyUnion7952<T, L = LastOf7952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7952<TuplifyUnion7952<Exclude<T, L>>, L>;

type DeepPartial7952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7952<T[P]> }
  : T;

type Paths7952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7952<K, Paths7952<T[K], Prev7952[D]>> : never }[keyof T]
  : never;

type Prev7952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7952 {
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

type ConfigPaths7952 = Paths7952<NestedConfig7952>;

interface HeavyProps7952 {
  config: DeepPartial7952<NestedConfig7952>;
  path?: ConfigPaths7952;
}

const HeavyComponent7952 = memo(function HeavyComponent7952({ config }: HeavyProps7952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7952.displayName = 'HeavyComponent7952';
export default HeavyComponent7952;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7758<T> = T extends (infer U)[]
  ? DeepReadonlyArray7758<U>
  : T extends object
  ? DeepReadonlyObject7758<T>
  : T;

interface DeepReadonlyArray7758<T> extends ReadonlyArray<DeepReadonly7758<T>> {}

type DeepReadonlyObject7758<T> = {
  readonly [P in keyof T]: DeepReadonly7758<T[P]>;
};

type UnionToIntersection7758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7758<T> = UnionToIntersection7758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7758<T extends unknown[], V> = [...T, V];

type TuplifyUnion7758<T, L = LastOf7758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7758<TuplifyUnion7758<Exclude<T, L>>, L>;

type DeepPartial7758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7758<T[P]> }
  : T;

type Paths7758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7758<K, Paths7758<T[K], Prev7758[D]>> : never }[keyof T]
  : never;

type Prev7758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7758 {
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

type ConfigPaths7758 = Paths7758<NestedConfig7758>;

interface HeavyProps7758 {
  config: DeepPartial7758<NestedConfig7758>;
  path?: ConfigPaths7758;
}

const HeavyComponent7758 = memo(function HeavyComponent7758({ config }: HeavyProps7758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7758.displayName = 'HeavyComponent7758';
export default HeavyComponent7758;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7696<T> = T extends (infer U)[]
  ? DeepReadonlyArray7696<U>
  : T extends object
  ? DeepReadonlyObject7696<T>
  : T;

interface DeepReadonlyArray7696<T> extends ReadonlyArray<DeepReadonly7696<T>> {}

type DeepReadonlyObject7696<T> = {
  readonly [P in keyof T]: DeepReadonly7696<T[P]>;
};

type UnionToIntersection7696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7696<T> = UnionToIntersection7696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7696<T extends unknown[], V> = [...T, V];

type TuplifyUnion7696<T, L = LastOf7696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7696<TuplifyUnion7696<Exclude<T, L>>, L>;

type DeepPartial7696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7696<T[P]> }
  : T;

type Paths7696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7696<K, Paths7696<T[K], Prev7696[D]>> : never }[keyof T]
  : never;

type Prev7696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7696 {
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

type ConfigPaths7696 = Paths7696<NestedConfig7696>;

interface HeavyProps7696 {
  config: DeepPartial7696<NestedConfig7696>;
  path?: ConfigPaths7696;
}

const HeavyComponent7696 = memo(function HeavyComponent7696({ config }: HeavyProps7696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7696.displayName = 'HeavyComponent7696';
export default HeavyComponent7696;

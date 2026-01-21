'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7826<T> = T extends (infer U)[]
  ? DeepReadonlyArray7826<U>
  : T extends object
  ? DeepReadonlyObject7826<T>
  : T;

interface DeepReadonlyArray7826<T> extends ReadonlyArray<DeepReadonly7826<T>> {}

type DeepReadonlyObject7826<T> = {
  readonly [P in keyof T]: DeepReadonly7826<T[P]>;
};

type UnionToIntersection7826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7826<T> = UnionToIntersection7826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7826<T extends unknown[], V> = [...T, V];

type TuplifyUnion7826<T, L = LastOf7826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7826<TuplifyUnion7826<Exclude<T, L>>, L>;

type DeepPartial7826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7826<T[P]> }
  : T;

type Paths7826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7826<K, Paths7826<T[K], Prev7826[D]>> : never }[keyof T]
  : never;

type Prev7826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7826 {
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

type ConfigPaths7826 = Paths7826<NestedConfig7826>;

interface HeavyProps7826 {
  config: DeepPartial7826<NestedConfig7826>;
  path?: ConfigPaths7826;
}

const HeavyComponent7826 = memo(function HeavyComponent7826({ config }: HeavyProps7826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7826.displayName = 'HeavyComponent7826';
export default HeavyComponent7826;

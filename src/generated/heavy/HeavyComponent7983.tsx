'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7983<T> = T extends (infer U)[]
  ? DeepReadonlyArray7983<U>
  : T extends object
  ? DeepReadonlyObject7983<T>
  : T;

interface DeepReadonlyArray7983<T> extends ReadonlyArray<DeepReadonly7983<T>> {}

type DeepReadonlyObject7983<T> = {
  readonly [P in keyof T]: DeepReadonly7983<T[P]>;
};

type UnionToIntersection7983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7983<T> = UnionToIntersection7983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7983<T extends unknown[], V> = [...T, V];

type TuplifyUnion7983<T, L = LastOf7983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7983<TuplifyUnion7983<Exclude<T, L>>, L>;

type DeepPartial7983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7983<T[P]> }
  : T;

type Paths7983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7983<K, Paths7983<T[K], Prev7983[D]>> : never }[keyof T]
  : never;

type Prev7983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7983 {
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

type ConfigPaths7983 = Paths7983<NestedConfig7983>;

interface HeavyProps7983 {
  config: DeepPartial7983<NestedConfig7983>;
  path?: ConfigPaths7983;
}

const HeavyComponent7983 = memo(function HeavyComponent7983({ config }: HeavyProps7983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7983.displayName = 'HeavyComponent7983';
export default HeavyComponent7983;

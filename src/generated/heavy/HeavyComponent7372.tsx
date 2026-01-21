'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7372<T> = T extends (infer U)[]
  ? DeepReadonlyArray7372<U>
  : T extends object
  ? DeepReadonlyObject7372<T>
  : T;

interface DeepReadonlyArray7372<T> extends ReadonlyArray<DeepReadonly7372<T>> {}

type DeepReadonlyObject7372<T> = {
  readonly [P in keyof T]: DeepReadonly7372<T[P]>;
};

type UnionToIntersection7372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7372<T> = UnionToIntersection7372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7372<T extends unknown[], V> = [...T, V];

type TuplifyUnion7372<T, L = LastOf7372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7372<TuplifyUnion7372<Exclude<T, L>>, L>;

type DeepPartial7372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7372<T[P]> }
  : T;

type Paths7372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7372<K, Paths7372<T[K], Prev7372[D]>> : never }[keyof T]
  : never;

type Prev7372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7372 {
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

type ConfigPaths7372 = Paths7372<NestedConfig7372>;

interface HeavyProps7372 {
  config: DeepPartial7372<NestedConfig7372>;
  path?: ConfigPaths7372;
}

const HeavyComponent7372 = memo(function HeavyComponent7372({ config }: HeavyProps7372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7372.displayName = 'HeavyComponent7372';
export default HeavyComponent7372;

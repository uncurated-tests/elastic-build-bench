'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7<T> = T extends (infer U)[]
  ? DeepReadonlyArray7<U>
  : T extends object
  ? DeepReadonlyObject7<T>
  : T;

interface DeepReadonlyArray7<T> extends ReadonlyArray<DeepReadonly7<T>> {}

type DeepReadonlyObject7<T> = {
  readonly [P in keyof T]: DeepReadonly7<T[P]>;
};

type UnionToIntersection7<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7<T> = UnionToIntersection7<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7<T extends unknown[], V> = [...T, V];

type TuplifyUnion7<T, L = LastOf7<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7<TuplifyUnion7<Exclude<T, L>>, L>;

type DeepPartial7<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7<T[P]> }
  : T;

type Paths7<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7<K, Paths7<T[K], Prev7[D]>> : never }[keyof T]
  : never;

type Prev7 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7 {
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

type ConfigPaths7 = Paths7<NestedConfig7>;

interface HeavyProps7 {
  config: DeepPartial7<NestedConfig7>;
  path?: ConfigPaths7;
}

const HeavyComponent7 = memo(function HeavyComponent7({ config }: HeavyProps7) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7.displayName = 'HeavyComponent7';
export default HeavyComponent7;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7478<T> = T extends (infer U)[]
  ? DeepReadonlyArray7478<U>
  : T extends object
  ? DeepReadonlyObject7478<T>
  : T;

interface DeepReadonlyArray7478<T> extends ReadonlyArray<DeepReadonly7478<T>> {}

type DeepReadonlyObject7478<T> = {
  readonly [P in keyof T]: DeepReadonly7478<T[P]>;
};

type UnionToIntersection7478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7478<T> = UnionToIntersection7478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7478<T extends unknown[], V> = [...T, V];

type TuplifyUnion7478<T, L = LastOf7478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7478<TuplifyUnion7478<Exclude<T, L>>, L>;

type DeepPartial7478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7478<T[P]> }
  : T;

type Paths7478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7478<K, Paths7478<T[K], Prev7478[D]>> : never }[keyof T]
  : never;

type Prev7478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7478 {
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

type ConfigPaths7478 = Paths7478<NestedConfig7478>;

interface HeavyProps7478 {
  config: DeepPartial7478<NestedConfig7478>;
  path?: ConfigPaths7478;
}

const HeavyComponent7478 = memo(function HeavyComponent7478({ config }: HeavyProps7478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7478.displayName = 'HeavyComponent7478';
export default HeavyComponent7478;

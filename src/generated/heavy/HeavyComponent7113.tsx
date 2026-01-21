'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7113<T> = T extends (infer U)[]
  ? DeepReadonlyArray7113<U>
  : T extends object
  ? DeepReadonlyObject7113<T>
  : T;

interface DeepReadonlyArray7113<T> extends ReadonlyArray<DeepReadonly7113<T>> {}

type DeepReadonlyObject7113<T> = {
  readonly [P in keyof T]: DeepReadonly7113<T[P]>;
};

type UnionToIntersection7113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7113<T> = UnionToIntersection7113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7113<T extends unknown[], V> = [...T, V];

type TuplifyUnion7113<T, L = LastOf7113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7113<TuplifyUnion7113<Exclude<T, L>>, L>;

type DeepPartial7113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7113<T[P]> }
  : T;

type Paths7113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7113<K, Paths7113<T[K], Prev7113[D]>> : never }[keyof T]
  : never;

type Prev7113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7113 {
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

type ConfigPaths7113 = Paths7113<NestedConfig7113>;

interface HeavyProps7113 {
  config: DeepPartial7113<NestedConfig7113>;
  path?: ConfigPaths7113;
}

const HeavyComponent7113 = memo(function HeavyComponent7113({ config }: HeavyProps7113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7113.displayName = 'HeavyComponent7113';
export default HeavyComponent7113;

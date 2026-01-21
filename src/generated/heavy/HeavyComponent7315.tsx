'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7315<T> = T extends (infer U)[]
  ? DeepReadonlyArray7315<U>
  : T extends object
  ? DeepReadonlyObject7315<T>
  : T;

interface DeepReadonlyArray7315<T> extends ReadonlyArray<DeepReadonly7315<T>> {}

type DeepReadonlyObject7315<T> = {
  readonly [P in keyof T]: DeepReadonly7315<T[P]>;
};

type UnionToIntersection7315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7315<T> = UnionToIntersection7315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7315<T extends unknown[], V> = [...T, V];

type TuplifyUnion7315<T, L = LastOf7315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7315<TuplifyUnion7315<Exclude<T, L>>, L>;

type DeepPartial7315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7315<T[P]> }
  : T;

type Paths7315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7315<K, Paths7315<T[K], Prev7315[D]>> : never }[keyof T]
  : never;

type Prev7315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7315 {
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

type ConfigPaths7315 = Paths7315<NestedConfig7315>;

interface HeavyProps7315 {
  config: DeepPartial7315<NestedConfig7315>;
  path?: ConfigPaths7315;
}

const HeavyComponent7315 = memo(function HeavyComponent7315({ config }: HeavyProps7315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7315.displayName = 'HeavyComponent7315';
export default HeavyComponent7315;

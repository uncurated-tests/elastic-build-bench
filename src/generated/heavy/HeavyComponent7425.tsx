'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7425<T> = T extends (infer U)[]
  ? DeepReadonlyArray7425<U>
  : T extends object
  ? DeepReadonlyObject7425<T>
  : T;

interface DeepReadonlyArray7425<T> extends ReadonlyArray<DeepReadonly7425<T>> {}

type DeepReadonlyObject7425<T> = {
  readonly [P in keyof T]: DeepReadonly7425<T[P]>;
};

type UnionToIntersection7425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7425<T> = UnionToIntersection7425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7425<T extends unknown[], V> = [...T, V];

type TuplifyUnion7425<T, L = LastOf7425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7425<TuplifyUnion7425<Exclude<T, L>>, L>;

type DeepPartial7425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7425<T[P]> }
  : T;

type Paths7425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7425<K, Paths7425<T[K], Prev7425[D]>> : never }[keyof T]
  : never;

type Prev7425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7425 {
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

type ConfigPaths7425 = Paths7425<NestedConfig7425>;

interface HeavyProps7425 {
  config: DeepPartial7425<NestedConfig7425>;
  path?: ConfigPaths7425;
}

const HeavyComponent7425 = memo(function HeavyComponent7425({ config }: HeavyProps7425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7425.displayName = 'HeavyComponent7425';
export default HeavyComponent7425;

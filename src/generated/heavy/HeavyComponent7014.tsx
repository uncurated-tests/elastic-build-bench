'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7014<T> = T extends (infer U)[]
  ? DeepReadonlyArray7014<U>
  : T extends object
  ? DeepReadonlyObject7014<T>
  : T;

interface DeepReadonlyArray7014<T> extends ReadonlyArray<DeepReadonly7014<T>> {}

type DeepReadonlyObject7014<T> = {
  readonly [P in keyof T]: DeepReadonly7014<T[P]>;
};

type UnionToIntersection7014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7014<T> = UnionToIntersection7014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7014<T extends unknown[], V> = [...T, V];

type TuplifyUnion7014<T, L = LastOf7014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7014<TuplifyUnion7014<Exclude<T, L>>, L>;

type DeepPartial7014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7014<T[P]> }
  : T;

type Paths7014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7014<K, Paths7014<T[K], Prev7014[D]>> : never }[keyof T]
  : never;

type Prev7014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7014 {
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

type ConfigPaths7014 = Paths7014<NestedConfig7014>;

interface HeavyProps7014 {
  config: DeepPartial7014<NestedConfig7014>;
  path?: ConfigPaths7014;
}

const HeavyComponent7014 = memo(function HeavyComponent7014({ config }: HeavyProps7014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7014.displayName = 'HeavyComponent7014';
export default HeavyComponent7014;

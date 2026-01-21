'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7245<T> = T extends (infer U)[]
  ? DeepReadonlyArray7245<U>
  : T extends object
  ? DeepReadonlyObject7245<T>
  : T;

interface DeepReadonlyArray7245<T> extends ReadonlyArray<DeepReadonly7245<T>> {}

type DeepReadonlyObject7245<T> = {
  readonly [P in keyof T]: DeepReadonly7245<T[P]>;
};

type UnionToIntersection7245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7245<T> = UnionToIntersection7245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7245<T extends unknown[], V> = [...T, V];

type TuplifyUnion7245<T, L = LastOf7245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7245<TuplifyUnion7245<Exclude<T, L>>, L>;

type DeepPartial7245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7245<T[P]> }
  : T;

type Paths7245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7245<K, Paths7245<T[K], Prev7245[D]>> : never }[keyof T]
  : never;

type Prev7245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7245 {
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

type ConfigPaths7245 = Paths7245<NestedConfig7245>;

interface HeavyProps7245 {
  config: DeepPartial7245<NestedConfig7245>;
  path?: ConfigPaths7245;
}

const HeavyComponent7245 = memo(function HeavyComponent7245({ config }: HeavyProps7245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7245.displayName = 'HeavyComponent7245';
export default HeavyComponent7245;

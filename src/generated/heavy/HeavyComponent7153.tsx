'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7153<T> = T extends (infer U)[]
  ? DeepReadonlyArray7153<U>
  : T extends object
  ? DeepReadonlyObject7153<T>
  : T;

interface DeepReadonlyArray7153<T> extends ReadonlyArray<DeepReadonly7153<T>> {}

type DeepReadonlyObject7153<T> = {
  readonly [P in keyof T]: DeepReadonly7153<T[P]>;
};

type UnionToIntersection7153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7153<T> = UnionToIntersection7153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7153<T extends unknown[], V> = [...T, V];

type TuplifyUnion7153<T, L = LastOf7153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7153<TuplifyUnion7153<Exclude<T, L>>, L>;

type DeepPartial7153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7153<T[P]> }
  : T;

type Paths7153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7153<K, Paths7153<T[K], Prev7153[D]>> : never }[keyof T]
  : never;

type Prev7153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7153 {
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

type ConfigPaths7153 = Paths7153<NestedConfig7153>;

interface HeavyProps7153 {
  config: DeepPartial7153<NestedConfig7153>;
  path?: ConfigPaths7153;
}

const HeavyComponent7153 = memo(function HeavyComponent7153({ config }: HeavyProps7153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7153.displayName = 'HeavyComponent7153';
export default HeavyComponent7153;

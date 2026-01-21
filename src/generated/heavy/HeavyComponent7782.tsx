'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7782<T> = T extends (infer U)[]
  ? DeepReadonlyArray7782<U>
  : T extends object
  ? DeepReadonlyObject7782<T>
  : T;

interface DeepReadonlyArray7782<T> extends ReadonlyArray<DeepReadonly7782<T>> {}

type DeepReadonlyObject7782<T> = {
  readonly [P in keyof T]: DeepReadonly7782<T[P]>;
};

type UnionToIntersection7782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7782<T> = UnionToIntersection7782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7782<T extends unknown[], V> = [...T, V];

type TuplifyUnion7782<T, L = LastOf7782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7782<TuplifyUnion7782<Exclude<T, L>>, L>;

type DeepPartial7782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7782<T[P]> }
  : T;

type Paths7782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7782<K, Paths7782<T[K], Prev7782[D]>> : never }[keyof T]
  : never;

type Prev7782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7782 {
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

type ConfigPaths7782 = Paths7782<NestedConfig7782>;

interface HeavyProps7782 {
  config: DeepPartial7782<NestedConfig7782>;
  path?: ConfigPaths7782;
}

const HeavyComponent7782 = memo(function HeavyComponent7782({ config }: HeavyProps7782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7782.displayName = 'HeavyComponent7782';
export default HeavyComponent7782;

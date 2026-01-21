'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7041<T> = T extends (infer U)[]
  ? DeepReadonlyArray7041<U>
  : T extends object
  ? DeepReadonlyObject7041<T>
  : T;

interface DeepReadonlyArray7041<T> extends ReadonlyArray<DeepReadonly7041<T>> {}

type DeepReadonlyObject7041<T> = {
  readonly [P in keyof T]: DeepReadonly7041<T[P]>;
};

type UnionToIntersection7041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7041<T> = UnionToIntersection7041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7041<T extends unknown[], V> = [...T, V];

type TuplifyUnion7041<T, L = LastOf7041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7041<TuplifyUnion7041<Exclude<T, L>>, L>;

type DeepPartial7041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7041<T[P]> }
  : T;

type Paths7041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7041<K, Paths7041<T[K], Prev7041[D]>> : never }[keyof T]
  : never;

type Prev7041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7041 {
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

type ConfigPaths7041 = Paths7041<NestedConfig7041>;

interface HeavyProps7041 {
  config: DeepPartial7041<NestedConfig7041>;
  path?: ConfigPaths7041;
}

const HeavyComponent7041 = memo(function HeavyComponent7041({ config }: HeavyProps7041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7041.displayName = 'HeavyComponent7041';
export default HeavyComponent7041;

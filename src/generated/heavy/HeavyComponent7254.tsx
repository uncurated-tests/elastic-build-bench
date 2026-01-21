'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7254<T> = T extends (infer U)[]
  ? DeepReadonlyArray7254<U>
  : T extends object
  ? DeepReadonlyObject7254<T>
  : T;

interface DeepReadonlyArray7254<T> extends ReadonlyArray<DeepReadonly7254<T>> {}

type DeepReadonlyObject7254<T> = {
  readonly [P in keyof T]: DeepReadonly7254<T[P]>;
};

type UnionToIntersection7254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7254<T> = UnionToIntersection7254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7254<T extends unknown[], V> = [...T, V];

type TuplifyUnion7254<T, L = LastOf7254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7254<TuplifyUnion7254<Exclude<T, L>>, L>;

type DeepPartial7254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7254<T[P]> }
  : T;

type Paths7254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7254<K, Paths7254<T[K], Prev7254[D]>> : never }[keyof T]
  : never;

type Prev7254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7254 {
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

type ConfigPaths7254 = Paths7254<NestedConfig7254>;

interface HeavyProps7254 {
  config: DeepPartial7254<NestedConfig7254>;
  path?: ConfigPaths7254;
}

const HeavyComponent7254 = memo(function HeavyComponent7254({ config }: HeavyProps7254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7254.displayName = 'HeavyComponent7254';
export default HeavyComponent7254;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7936<T> = T extends (infer U)[]
  ? DeepReadonlyArray7936<U>
  : T extends object
  ? DeepReadonlyObject7936<T>
  : T;

interface DeepReadonlyArray7936<T> extends ReadonlyArray<DeepReadonly7936<T>> {}

type DeepReadonlyObject7936<T> = {
  readonly [P in keyof T]: DeepReadonly7936<T[P]>;
};

type UnionToIntersection7936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7936<T> = UnionToIntersection7936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7936<T extends unknown[], V> = [...T, V];

type TuplifyUnion7936<T, L = LastOf7936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7936<TuplifyUnion7936<Exclude<T, L>>, L>;

type DeepPartial7936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7936<T[P]> }
  : T;

type Paths7936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7936<K, Paths7936<T[K], Prev7936[D]>> : never }[keyof T]
  : never;

type Prev7936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7936 {
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

type ConfigPaths7936 = Paths7936<NestedConfig7936>;

interface HeavyProps7936 {
  config: DeepPartial7936<NestedConfig7936>;
  path?: ConfigPaths7936;
}

const HeavyComponent7936 = memo(function HeavyComponent7936({ config }: HeavyProps7936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7936.displayName = 'HeavyComponent7936';
export default HeavyComponent7936;

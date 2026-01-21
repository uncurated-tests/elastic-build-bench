'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7172<T> = T extends (infer U)[]
  ? DeepReadonlyArray7172<U>
  : T extends object
  ? DeepReadonlyObject7172<T>
  : T;

interface DeepReadonlyArray7172<T> extends ReadonlyArray<DeepReadonly7172<T>> {}

type DeepReadonlyObject7172<T> = {
  readonly [P in keyof T]: DeepReadonly7172<T[P]>;
};

type UnionToIntersection7172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7172<T> = UnionToIntersection7172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7172<T extends unknown[], V> = [...T, V];

type TuplifyUnion7172<T, L = LastOf7172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7172<TuplifyUnion7172<Exclude<T, L>>, L>;

type DeepPartial7172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7172<T[P]> }
  : T;

type Paths7172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7172<K, Paths7172<T[K], Prev7172[D]>> : never }[keyof T]
  : never;

type Prev7172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7172 {
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

type ConfigPaths7172 = Paths7172<NestedConfig7172>;

interface HeavyProps7172 {
  config: DeepPartial7172<NestedConfig7172>;
  path?: ConfigPaths7172;
}

const HeavyComponent7172 = memo(function HeavyComponent7172({ config }: HeavyProps7172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7172.displayName = 'HeavyComponent7172';
export default HeavyComponent7172;

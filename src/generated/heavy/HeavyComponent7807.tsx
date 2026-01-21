'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7807<T> = T extends (infer U)[]
  ? DeepReadonlyArray7807<U>
  : T extends object
  ? DeepReadonlyObject7807<T>
  : T;

interface DeepReadonlyArray7807<T> extends ReadonlyArray<DeepReadonly7807<T>> {}

type DeepReadonlyObject7807<T> = {
  readonly [P in keyof T]: DeepReadonly7807<T[P]>;
};

type UnionToIntersection7807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7807<T> = UnionToIntersection7807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7807<T extends unknown[], V> = [...T, V];

type TuplifyUnion7807<T, L = LastOf7807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7807<TuplifyUnion7807<Exclude<T, L>>, L>;

type DeepPartial7807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7807<T[P]> }
  : T;

type Paths7807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7807<K, Paths7807<T[K], Prev7807[D]>> : never }[keyof T]
  : never;

type Prev7807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7807 {
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

type ConfigPaths7807 = Paths7807<NestedConfig7807>;

interface HeavyProps7807 {
  config: DeepPartial7807<NestedConfig7807>;
  path?: ConfigPaths7807;
}

const HeavyComponent7807 = memo(function HeavyComponent7807({ config }: HeavyProps7807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7807.displayName = 'HeavyComponent7807';
export default HeavyComponent7807;

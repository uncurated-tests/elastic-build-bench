'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7765<T> = T extends (infer U)[]
  ? DeepReadonlyArray7765<U>
  : T extends object
  ? DeepReadonlyObject7765<T>
  : T;

interface DeepReadonlyArray7765<T> extends ReadonlyArray<DeepReadonly7765<T>> {}

type DeepReadonlyObject7765<T> = {
  readonly [P in keyof T]: DeepReadonly7765<T[P]>;
};

type UnionToIntersection7765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7765<T> = UnionToIntersection7765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7765<T extends unknown[], V> = [...T, V];

type TuplifyUnion7765<T, L = LastOf7765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7765<TuplifyUnion7765<Exclude<T, L>>, L>;

type DeepPartial7765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7765<T[P]> }
  : T;

type Paths7765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7765<K, Paths7765<T[K], Prev7765[D]>> : never }[keyof T]
  : never;

type Prev7765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7765 {
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

type ConfigPaths7765 = Paths7765<NestedConfig7765>;

interface HeavyProps7765 {
  config: DeepPartial7765<NestedConfig7765>;
  path?: ConfigPaths7765;
}

const HeavyComponent7765 = memo(function HeavyComponent7765({ config }: HeavyProps7765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7765.displayName = 'HeavyComponent7765';
export default HeavyComponent7765;

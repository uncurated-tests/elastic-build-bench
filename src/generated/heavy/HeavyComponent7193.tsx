'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7193<T> = T extends (infer U)[]
  ? DeepReadonlyArray7193<U>
  : T extends object
  ? DeepReadonlyObject7193<T>
  : T;

interface DeepReadonlyArray7193<T> extends ReadonlyArray<DeepReadonly7193<T>> {}

type DeepReadonlyObject7193<T> = {
  readonly [P in keyof T]: DeepReadonly7193<T[P]>;
};

type UnionToIntersection7193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7193<T> = UnionToIntersection7193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7193<T extends unknown[], V> = [...T, V];

type TuplifyUnion7193<T, L = LastOf7193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7193<TuplifyUnion7193<Exclude<T, L>>, L>;

type DeepPartial7193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7193<T[P]> }
  : T;

type Paths7193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7193<K, Paths7193<T[K], Prev7193[D]>> : never }[keyof T]
  : never;

type Prev7193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7193 {
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

type ConfigPaths7193 = Paths7193<NestedConfig7193>;

interface HeavyProps7193 {
  config: DeepPartial7193<NestedConfig7193>;
  path?: ConfigPaths7193;
}

const HeavyComponent7193 = memo(function HeavyComponent7193({ config }: HeavyProps7193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7193.displayName = 'HeavyComponent7193';
export default HeavyComponent7193;

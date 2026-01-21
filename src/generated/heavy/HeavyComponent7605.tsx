'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7605<T> = T extends (infer U)[]
  ? DeepReadonlyArray7605<U>
  : T extends object
  ? DeepReadonlyObject7605<T>
  : T;

interface DeepReadonlyArray7605<T> extends ReadonlyArray<DeepReadonly7605<T>> {}

type DeepReadonlyObject7605<T> = {
  readonly [P in keyof T]: DeepReadonly7605<T[P]>;
};

type UnionToIntersection7605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7605<T> = UnionToIntersection7605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7605<T extends unknown[], V> = [...T, V];

type TuplifyUnion7605<T, L = LastOf7605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7605<TuplifyUnion7605<Exclude<T, L>>, L>;

type DeepPartial7605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7605<T[P]> }
  : T;

type Paths7605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7605<K, Paths7605<T[K], Prev7605[D]>> : never }[keyof T]
  : never;

type Prev7605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7605 {
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

type ConfigPaths7605 = Paths7605<NestedConfig7605>;

interface HeavyProps7605 {
  config: DeepPartial7605<NestedConfig7605>;
  path?: ConfigPaths7605;
}

const HeavyComponent7605 = memo(function HeavyComponent7605({ config }: HeavyProps7605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7605.displayName = 'HeavyComponent7605';
export default HeavyComponent7605;

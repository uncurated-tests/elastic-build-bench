'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7728<T> = T extends (infer U)[]
  ? DeepReadonlyArray7728<U>
  : T extends object
  ? DeepReadonlyObject7728<T>
  : T;

interface DeepReadonlyArray7728<T> extends ReadonlyArray<DeepReadonly7728<T>> {}

type DeepReadonlyObject7728<T> = {
  readonly [P in keyof T]: DeepReadonly7728<T[P]>;
};

type UnionToIntersection7728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7728<T> = UnionToIntersection7728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7728<T extends unknown[], V> = [...T, V];

type TuplifyUnion7728<T, L = LastOf7728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7728<TuplifyUnion7728<Exclude<T, L>>, L>;

type DeepPartial7728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7728<T[P]> }
  : T;

type Paths7728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7728<K, Paths7728<T[K], Prev7728[D]>> : never }[keyof T]
  : never;

type Prev7728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7728 {
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

type ConfigPaths7728 = Paths7728<NestedConfig7728>;

interface HeavyProps7728 {
  config: DeepPartial7728<NestedConfig7728>;
  path?: ConfigPaths7728;
}

const HeavyComponent7728 = memo(function HeavyComponent7728({ config }: HeavyProps7728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7728.displayName = 'HeavyComponent7728';
export default HeavyComponent7728;

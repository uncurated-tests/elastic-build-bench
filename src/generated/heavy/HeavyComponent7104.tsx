'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7104<T> = T extends (infer U)[]
  ? DeepReadonlyArray7104<U>
  : T extends object
  ? DeepReadonlyObject7104<T>
  : T;

interface DeepReadonlyArray7104<T> extends ReadonlyArray<DeepReadonly7104<T>> {}

type DeepReadonlyObject7104<T> = {
  readonly [P in keyof T]: DeepReadonly7104<T[P]>;
};

type UnionToIntersection7104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7104<T> = UnionToIntersection7104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7104<T extends unknown[], V> = [...T, V];

type TuplifyUnion7104<T, L = LastOf7104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7104<TuplifyUnion7104<Exclude<T, L>>, L>;

type DeepPartial7104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7104<T[P]> }
  : T;

type Paths7104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7104<K, Paths7104<T[K], Prev7104[D]>> : never }[keyof T]
  : never;

type Prev7104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7104 {
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

type ConfigPaths7104 = Paths7104<NestedConfig7104>;

interface HeavyProps7104 {
  config: DeepPartial7104<NestedConfig7104>;
  path?: ConfigPaths7104;
}

const HeavyComponent7104 = memo(function HeavyComponent7104({ config }: HeavyProps7104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7104.displayName = 'HeavyComponent7104';
export default HeavyComponent7104;

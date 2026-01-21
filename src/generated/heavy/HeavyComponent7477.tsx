'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7477<T> = T extends (infer U)[]
  ? DeepReadonlyArray7477<U>
  : T extends object
  ? DeepReadonlyObject7477<T>
  : T;

interface DeepReadonlyArray7477<T> extends ReadonlyArray<DeepReadonly7477<T>> {}

type DeepReadonlyObject7477<T> = {
  readonly [P in keyof T]: DeepReadonly7477<T[P]>;
};

type UnionToIntersection7477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7477<T> = UnionToIntersection7477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7477<T extends unknown[], V> = [...T, V];

type TuplifyUnion7477<T, L = LastOf7477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7477<TuplifyUnion7477<Exclude<T, L>>, L>;

type DeepPartial7477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7477<T[P]> }
  : T;

type Paths7477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7477<K, Paths7477<T[K], Prev7477[D]>> : never }[keyof T]
  : never;

type Prev7477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7477 {
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

type ConfigPaths7477 = Paths7477<NestedConfig7477>;

interface HeavyProps7477 {
  config: DeepPartial7477<NestedConfig7477>;
  path?: ConfigPaths7477;
}

const HeavyComponent7477 = memo(function HeavyComponent7477({ config }: HeavyProps7477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7477.displayName = 'HeavyComponent7477';
export default HeavyComponent7477;

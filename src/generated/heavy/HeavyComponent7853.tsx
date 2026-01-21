'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7853<T> = T extends (infer U)[]
  ? DeepReadonlyArray7853<U>
  : T extends object
  ? DeepReadonlyObject7853<T>
  : T;

interface DeepReadonlyArray7853<T> extends ReadonlyArray<DeepReadonly7853<T>> {}

type DeepReadonlyObject7853<T> = {
  readonly [P in keyof T]: DeepReadonly7853<T[P]>;
};

type UnionToIntersection7853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7853<T> = UnionToIntersection7853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7853<T extends unknown[], V> = [...T, V];

type TuplifyUnion7853<T, L = LastOf7853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7853<TuplifyUnion7853<Exclude<T, L>>, L>;

type DeepPartial7853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7853<T[P]> }
  : T;

type Paths7853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7853<K, Paths7853<T[K], Prev7853[D]>> : never }[keyof T]
  : never;

type Prev7853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7853 {
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

type ConfigPaths7853 = Paths7853<NestedConfig7853>;

interface HeavyProps7853 {
  config: DeepPartial7853<NestedConfig7853>;
  path?: ConfigPaths7853;
}

const HeavyComponent7853 = memo(function HeavyComponent7853({ config }: HeavyProps7853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7853.displayName = 'HeavyComponent7853';
export default HeavyComponent7853;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7626<T> = T extends (infer U)[]
  ? DeepReadonlyArray7626<U>
  : T extends object
  ? DeepReadonlyObject7626<T>
  : T;

interface DeepReadonlyArray7626<T> extends ReadonlyArray<DeepReadonly7626<T>> {}

type DeepReadonlyObject7626<T> = {
  readonly [P in keyof T]: DeepReadonly7626<T[P]>;
};

type UnionToIntersection7626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7626<T> = UnionToIntersection7626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7626<T extends unknown[], V> = [...T, V];

type TuplifyUnion7626<T, L = LastOf7626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7626<TuplifyUnion7626<Exclude<T, L>>, L>;

type DeepPartial7626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7626<T[P]> }
  : T;

type Paths7626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7626<K, Paths7626<T[K], Prev7626[D]>> : never }[keyof T]
  : never;

type Prev7626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7626 {
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

type ConfigPaths7626 = Paths7626<NestedConfig7626>;

interface HeavyProps7626 {
  config: DeepPartial7626<NestedConfig7626>;
  path?: ConfigPaths7626;
}

const HeavyComponent7626 = memo(function HeavyComponent7626({ config }: HeavyProps7626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7626.displayName = 'HeavyComponent7626';
export default HeavyComponent7626;

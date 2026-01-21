'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7460<T> = T extends (infer U)[]
  ? DeepReadonlyArray7460<U>
  : T extends object
  ? DeepReadonlyObject7460<T>
  : T;

interface DeepReadonlyArray7460<T> extends ReadonlyArray<DeepReadonly7460<T>> {}

type DeepReadonlyObject7460<T> = {
  readonly [P in keyof T]: DeepReadonly7460<T[P]>;
};

type UnionToIntersection7460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7460<T> = UnionToIntersection7460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7460<T extends unknown[], V> = [...T, V];

type TuplifyUnion7460<T, L = LastOf7460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7460<TuplifyUnion7460<Exclude<T, L>>, L>;

type DeepPartial7460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7460<T[P]> }
  : T;

type Paths7460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7460<K, Paths7460<T[K], Prev7460[D]>> : never }[keyof T]
  : never;

type Prev7460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7460 {
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

type ConfigPaths7460 = Paths7460<NestedConfig7460>;

interface HeavyProps7460 {
  config: DeepPartial7460<NestedConfig7460>;
  path?: ConfigPaths7460;
}

const HeavyComponent7460 = memo(function HeavyComponent7460({ config }: HeavyProps7460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7460.displayName = 'HeavyComponent7460';
export default HeavyComponent7460;

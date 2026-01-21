'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7030<T> = T extends (infer U)[]
  ? DeepReadonlyArray7030<U>
  : T extends object
  ? DeepReadonlyObject7030<T>
  : T;

interface DeepReadonlyArray7030<T> extends ReadonlyArray<DeepReadonly7030<T>> {}

type DeepReadonlyObject7030<T> = {
  readonly [P in keyof T]: DeepReadonly7030<T[P]>;
};

type UnionToIntersection7030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7030<T> = UnionToIntersection7030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7030<T extends unknown[], V> = [...T, V];

type TuplifyUnion7030<T, L = LastOf7030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7030<TuplifyUnion7030<Exclude<T, L>>, L>;

type DeepPartial7030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7030<T[P]> }
  : T;

type Paths7030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7030<K, Paths7030<T[K], Prev7030[D]>> : never }[keyof T]
  : never;

type Prev7030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7030 {
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

type ConfigPaths7030 = Paths7030<NestedConfig7030>;

interface HeavyProps7030 {
  config: DeepPartial7030<NestedConfig7030>;
  path?: ConfigPaths7030;
}

const HeavyComponent7030 = memo(function HeavyComponent7030({ config }: HeavyProps7030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7030.displayName = 'HeavyComponent7030';
export default HeavyComponent7030;

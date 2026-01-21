'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7196<T> = T extends (infer U)[]
  ? DeepReadonlyArray7196<U>
  : T extends object
  ? DeepReadonlyObject7196<T>
  : T;

interface DeepReadonlyArray7196<T> extends ReadonlyArray<DeepReadonly7196<T>> {}

type DeepReadonlyObject7196<T> = {
  readonly [P in keyof T]: DeepReadonly7196<T[P]>;
};

type UnionToIntersection7196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7196<T> = UnionToIntersection7196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7196<T extends unknown[], V> = [...T, V];

type TuplifyUnion7196<T, L = LastOf7196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7196<TuplifyUnion7196<Exclude<T, L>>, L>;

type DeepPartial7196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7196<T[P]> }
  : T;

type Paths7196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7196<K, Paths7196<T[K], Prev7196[D]>> : never }[keyof T]
  : never;

type Prev7196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7196 {
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

type ConfigPaths7196 = Paths7196<NestedConfig7196>;

interface HeavyProps7196 {
  config: DeepPartial7196<NestedConfig7196>;
  path?: ConfigPaths7196;
}

const HeavyComponent7196 = memo(function HeavyComponent7196({ config }: HeavyProps7196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7196.displayName = 'HeavyComponent7196';
export default HeavyComponent7196;

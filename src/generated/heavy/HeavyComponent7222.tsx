'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7222<T> = T extends (infer U)[]
  ? DeepReadonlyArray7222<U>
  : T extends object
  ? DeepReadonlyObject7222<T>
  : T;

interface DeepReadonlyArray7222<T> extends ReadonlyArray<DeepReadonly7222<T>> {}

type DeepReadonlyObject7222<T> = {
  readonly [P in keyof T]: DeepReadonly7222<T[P]>;
};

type UnionToIntersection7222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7222<T> = UnionToIntersection7222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7222<T extends unknown[], V> = [...T, V];

type TuplifyUnion7222<T, L = LastOf7222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7222<TuplifyUnion7222<Exclude<T, L>>, L>;

type DeepPartial7222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7222<T[P]> }
  : T;

type Paths7222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7222<K, Paths7222<T[K], Prev7222[D]>> : never }[keyof T]
  : never;

type Prev7222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7222 {
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

type ConfigPaths7222 = Paths7222<NestedConfig7222>;

interface HeavyProps7222 {
  config: DeepPartial7222<NestedConfig7222>;
  path?: ConfigPaths7222;
}

const HeavyComponent7222 = memo(function HeavyComponent7222({ config }: HeavyProps7222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7222.displayName = 'HeavyComponent7222';
export default HeavyComponent7222;

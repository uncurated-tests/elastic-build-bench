'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7490<T> = T extends (infer U)[]
  ? DeepReadonlyArray7490<U>
  : T extends object
  ? DeepReadonlyObject7490<T>
  : T;

interface DeepReadonlyArray7490<T> extends ReadonlyArray<DeepReadonly7490<T>> {}

type DeepReadonlyObject7490<T> = {
  readonly [P in keyof T]: DeepReadonly7490<T[P]>;
};

type UnionToIntersection7490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7490<T> = UnionToIntersection7490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7490<T extends unknown[], V> = [...T, V];

type TuplifyUnion7490<T, L = LastOf7490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7490<TuplifyUnion7490<Exclude<T, L>>, L>;

type DeepPartial7490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7490<T[P]> }
  : T;

type Paths7490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7490<K, Paths7490<T[K], Prev7490[D]>> : never }[keyof T]
  : never;

type Prev7490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7490 {
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

type ConfigPaths7490 = Paths7490<NestedConfig7490>;

interface HeavyProps7490 {
  config: DeepPartial7490<NestedConfig7490>;
  path?: ConfigPaths7490;
}

const HeavyComponent7490 = memo(function HeavyComponent7490({ config }: HeavyProps7490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7490.displayName = 'HeavyComponent7490';
export default HeavyComponent7490;

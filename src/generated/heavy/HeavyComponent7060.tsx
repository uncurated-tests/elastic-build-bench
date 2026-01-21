'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7060<T> = T extends (infer U)[]
  ? DeepReadonlyArray7060<U>
  : T extends object
  ? DeepReadonlyObject7060<T>
  : T;

interface DeepReadonlyArray7060<T> extends ReadonlyArray<DeepReadonly7060<T>> {}

type DeepReadonlyObject7060<T> = {
  readonly [P in keyof T]: DeepReadonly7060<T[P]>;
};

type UnionToIntersection7060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7060<T> = UnionToIntersection7060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7060<T extends unknown[], V> = [...T, V];

type TuplifyUnion7060<T, L = LastOf7060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7060<TuplifyUnion7060<Exclude<T, L>>, L>;

type DeepPartial7060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7060<T[P]> }
  : T;

type Paths7060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7060<K, Paths7060<T[K], Prev7060[D]>> : never }[keyof T]
  : never;

type Prev7060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7060 {
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

type ConfigPaths7060 = Paths7060<NestedConfig7060>;

interface HeavyProps7060 {
  config: DeepPartial7060<NestedConfig7060>;
  path?: ConfigPaths7060;
}

const HeavyComponent7060 = memo(function HeavyComponent7060({ config }: HeavyProps7060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7060.displayName = 'HeavyComponent7060';
export default HeavyComponent7060;

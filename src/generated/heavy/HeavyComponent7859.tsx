'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7859<T> = T extends (infer U)[]
  ? DeepReadonlyArray7859<U>
  : T extends object
  ? DeepReadonlyObject7859<T>
  : T;

interface DeepReadonlyArray7859<T> extends ReadonlyArray<DeepReadonly7859<T>> {}

type DeepReadonlyObject7859<T> = {
  readonly [P in keyof T]: DeepReadonly7859<T[P]>;
};

type UnionToIntersection7859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7859<T> = UnionToIntersection7859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7859<T extends unknown[], V> = [...T, V];

type TuplifyUnion7859<T, L = LastOf7859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7859<TuplifyUnion7859<Exclude<T, L>>, L>;

type DeepPartial7859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7859<T[P]> }
  : T;

type Paths7859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7859<K, Paths7859<T[K], Prev7859[D]>> : never }[keyof T]
  : never;

type Prev7859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7859 {
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

type ConfigPaths7859 = Paths7859<NestedConfig7859>;

interface HeavyProps7859 {
  config: DeepPartial7859<NestedConfig7859>;
  path?: ConfigPaths7859;
}

const HeavyComponent7859 = memo(function HeavyComponent7859({ config }: HeavyProps7859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7859.displayName = 'HeavyComponent7859';
export default HeavyComponent7859;

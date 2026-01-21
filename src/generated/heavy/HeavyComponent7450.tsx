'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7450<T> = T extends (infer U)[]
  ? DeepReadonlyArray7450<U>
  : T extends object
  ? DeepReadonlyObject7450<T>
  : T;

interface DeepReadonlyArray7450<T> extends ReadonlyArray<DeepReadonly7450<T>> {}

type DeepReadonlyObject7450<T> = {
  readonly [P in keyof T]: DeepReadonly7450<T[P]>;
};

type UnionToIntersection7450<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7450<T> = UnionToIntersection7450<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7450<T extends unknown[], V> = [...T, V];

type TuplifyUnion7450<T, L = LastOf7450<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7450<TuplifyUnion7450<Exclude<T, L>>, L>;

type DeepPartial7450<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7450<T[P]> }
  : T;

type Paths7450<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7450<K, Paths7450<T[K], Prev7450[D]>> : never }[keyof T]
  : never;

type Prev7450 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7450<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7450 {
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

type ConfigPaths7450 = Paths7450<NestedConfig7450>;

interface HeavyProps7450 {
  config: DeepPartial7450<NestedConfig7450>;
  path?: ConfigPaths7450;
}

const HeavyComponent7450 = memo(function HeavyComponent7450({ config }: HeavyProps7450) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7450) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7450 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7450: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7450.displayName = 'HeavyComponent7450';
export default HeavyComponent7450;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7725<T> = T extends (infer U)[]
  ? DeepReadonlyArray7725<U>
  : T extends object
  ? DeepReadonlyObject7725<T>
  : T;

interface DeepReadonlyArray7725<T> extends ReadonlyArray<DeepReadonly7725<T>> {}

type DeepReadonlyObject7725<T> = {
  readonly [P in keyof T]: DeepReadonly7725<T[P]>;
};

type UnionToIntersection7725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7725<T> = UnionToIntersection7725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7725<T extends unknown[], V> = [...T, V];

type TuplifyUnion7725<T, L = LastOf7725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7725<TuplifyUnion7725<Exclude<T, L>>, L>;

type DeepPartial7725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7725<T[P]> }
  : T;

type Paths7725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7725<K, Paths7725<T[K], Prev7725[D]>> : never }[keyof T]
  : never;

type Prev7725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7725 {
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

type ConfigPaths7725 = Paths7725<NestedConfig7725>;

interface HeavyProps7725 {
  config: DeepPartial7725<NestedConfig7725>;
  path?: ConfigPaths7725;
}

const HeavyComponent7725 = memo(function HeavyComponent7725({ config }: HeavyProps7725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7725.displayName = 'HeavyComponent7725';
export default HeavyComponent7725;

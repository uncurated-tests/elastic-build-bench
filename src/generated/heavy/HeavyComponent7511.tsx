'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7511<T> = T extends (infer U)[]
  ? DeepReadonlyArray7511<U>
  : T extends object
  ? DeepReadonlyObject7511<T>
  : T;

interface DeepReadonlyArray7511<T> extends ReadonlyArray<DeepReadonly7511<T>> {}

type DeepReadonlyObject7511<T> = {
  readonly [P in keyof T]: DeepReadonly7511<T[P]>;
};

type UnionToIntersection7511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7511<T> = UnionToIntersection7511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7511<T extends unknown[], V> = [...T, V];

type TuplifyUnion7511<T, L = LastOf7511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7511<TuplifyUnion7511<Exclude<T, L>>, L>;

type DeepPartial7511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7511<T[P]> }
  : T;

type Paths7511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7511<K, Paths7511<T[K], Prev7511[D]>> : never }[keyof T]
  : never;

type Prev7511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7511 {
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

type ConfigPaths7511 = Paths7511<NestedConfig7511>;

interface HeavyProps7511 {
  config: DeepPartial7511<NestedConfig7511>;
  path?: ConfigPaths7511;
}

const HeavyComponent7511 = memo(function HeavyComponent7511({ config }: HeavyProps7511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7511.displayName = 'HeavyComponent7511';
export default HeavyComponent7511;

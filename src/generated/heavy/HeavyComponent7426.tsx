'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7426<T> = T extends (infer U)[]
  ? DeepReadonlyArray7426<U>
  : T extends object
  ? DeepReadonlyObject7426<T>
  : T;

interface DeepReadonlyArray7426<T> extends ReadonlyArray<DeepReadonly7426<T>> {}

type DeepReadonlyObject7426<T> = {
  readonly [P in keyof T]: DeepReadonly7426<T[P]>;
};

type UnionToIntersection7426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7426<T> = UnionToIntersection7426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7426<T extends unknown[], V> = [...T, V];

type TuplifyUnion7426<T, L = LastOf7426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7426<TuplifyUnion7426<Exclude<T, L>>, L>;

type DeepPartial7426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7426<T[P]> }
  : T;

type Paths7426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7426<K, Paths7426<T[K], Prev7426[D]>> : never }[keyof T]
  : never;

type Prev7426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7426 {
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

type ConfigPaths7426 = Paths7426<NestedConfig7426>;

interface HeavyProps7426 {
  config: DeepPartial7426<NestedConfig7426>;
  path?: ConfigPaths7426;
}

const HeavyComponent7426 = memo(function HeavyComponent7426({ config }: HeavyProps7426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7426.displayName = 'HeavyComponent7426';
export default HeavyComponent7426;

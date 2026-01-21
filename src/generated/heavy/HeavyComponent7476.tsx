'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7476<T> = T extends (infer U)[]
  ? DeepReadonlyArray7476<U>
  : T extends object
  ? DeepReadonlyObject7476<T>
  : T;

interface DeepReadonlyArray7476<T> extends ReadonlyArray<DeepReadonly7476<T>> {}

type DeepReadonlyObject7476<T> = {
  readonly [P in keyof T]: DeepReadonly7476<T[P]>;
};

type UnionToIntersection7476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7476<T> = UnionToIntersection7476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7476<T extends unknown[], V> = [...T, V];

type TuplifyUnion7476<T, L = LastOf7476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7476<TuplifyUnion7476<Exclude<T, L>>, L>;

type DeepPartial7476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7476<T[P]> }
  : T;

type Paths7476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7476<K, Paths7476<T[K], Prev7476[D]>> : never }[keyof T]
  : never;

type Prev7476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7476 {
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

type ConfigPaths7476 = Paths7476<NestedConfig7476>;

interface HeavyProps7476 {
  config: DeepPartial7476<NestedConfig7476>;
  path?: ConfigPaths7476;
}

const HeavyComponent7476 = memo(function HeavyComponent7476({ config }: HeavyProps7476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7476.displayName = 'HeavyComponent7476';
export default HeavyComponent7476;

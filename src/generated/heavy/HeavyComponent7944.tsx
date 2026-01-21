'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7944<T> = T extends (infer U)[]
  ? DeepReadonlyArray7944<U>
  : T extends object
  ? DeepReadonlyObject7944<T>
  : T;

interface DeepReadonlyArray7944<T> extends ReadonlyArray<DeepReadonly7944<T>> {}

type DeepReadonlyObject7944<T> = {
  readonly [P in keyof T]: DeepReadonly7944<T[P]>;
};

type UnionToIntersection7944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7944<T> = UnionToIntersection7944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7944<T extends unknown[], V> = [...T, V];

type TuplifyUnion7944<T, L = LastOf7944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7944<TuplifyUnion7944<Exclude<T, L>>, L>;

type DeepPartial7944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7944<T[P]> }
  : T;

type Paths7944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7944<K, Paths7944<T[K], Prev7944[D]>> : never }[keyof T]
  : never;

type Prev7944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7944 {
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

type ConfigPaths7944 = Paths7944<NestedConfig7944>;

interface HeavyProps7944 {
  config: DeepPartial7944<NestedConfig7944>;
  path?: ConfigPaths7944;
}

const HeavyComponent7944 = memo(function HeavyComponent7944({ config }: HeavyProps7944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7944.displayName = 'HeavyComponent7944';
export default HeavyComponent7944;

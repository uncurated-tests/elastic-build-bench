'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7908<T> = T extends (infer U)[]
  ? DeepReadonlyArray7908<U>
  : T extends object
  ? DeepReadonlyObject7908<T>
  : T;

interface DeepReadonlyArray7908<T> extends ReadonlyArray<DeepReadonly7908<T>> {}

type DeepReadonlyObject7908<T> = {
  readonly [P in keyof T]: DeepReadonly7908<T[P]>;
};

type UnionToIntersection7908<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7908<T> = UnionToIntersection7908<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7908<T extends unknown[], V> = [...T, V];

type TuplifyUnion7908<T, L = LastOf7908<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7908<TuplifyUnion7908<Exclude<T, L>>, L>;

type DeepPartial7908<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7908<T[P]> }
  : T;

type Paths7908<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7908<K, Paths7908<T[K], Prev7908[D]>> : never }[keyof T]
  : never;

type Prev7908 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7908<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7908 {
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

type ConfigPaths7908 = Paths7908<NestedConfig7908>;

interface HeavyProps7908 {
  config: DeepPartial7908<NestedConfig7908>;
  path?: ConfigPaths7908;
}

const HeavyComponent7908 = memo(function HeavyComponent7908({ config }: HeavyProps7908) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7908) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7908 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7908: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7908.displayName = 'HeavyComponent7908';
export default HeavyComponent7908;

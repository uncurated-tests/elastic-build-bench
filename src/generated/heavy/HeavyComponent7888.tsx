'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7888<T> = T extends (infer U)[]
  ? DeepReadonlyArray7888<U>
  : T extends object
  ? DeepReadonlyObject7888<T>
  : T;

interface DeepReadonlyArray7888<T> extends ReadonlyArray<DeepReadonly7888<T>> {}

type DeepReadonlyObject7888<T> = {
  readonly [P in keyof T]: DeepReadonly7888<T[P]>;
};

type UnionToIntersection7888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7888<T> = UnionToIntersection7888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7888<T extends unknown[], V> = [...T, V];

type TuplifyUnion7888<T, L = LastOf7888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7888<TuplifyUnion7888<Exclude<T, L>>, L>;

type DeepPartial7888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7888<T[P]> }
  : T;

type Paths7888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7888<K, Paths7888<T[K], Prev7888[D]>> : never }[keyof T]
  : never;

type Prev7888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7888 {
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

type ConfigPaths7888 = Paths7888<NestedConfig7888>;

interface HeavyProps7888 {
  config: DeepPartial7888<NestedConfig7888>;
  path?: ConfigPaths7888;
}

const HeavyComponent7888 = memo(function HeavyComponent7888({ config }: HeavyProps7888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7888.displayName = 'HeavyComponent7888';
export default HeavyComponent7888;

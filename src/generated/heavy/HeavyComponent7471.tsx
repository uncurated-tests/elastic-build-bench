'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7471<T> = T extends (infer U)[]
  ? DeepReadonlyArray7471<U>
  : T extends object
  ? DeepReadonlyObject7471<T>
  : T;

interface DeepReadonlyArray7471<T> extends ReadonlyArray<DeepReadonly7471<T>> {}

type DeepReadonlyObject7471<T> = {
  readonly [P in keyof T]: DeepReadonly7471<T[P]>;
};

type UnionToIntersection7471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7471<T> = UnionToIntersection7471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7471<T extends unknown[], V> = [...T, V];

type TuplifyUnion7471<T, L = LastOf7471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7471<TuplifyUnion7471<Exclude<T, L>>, L>;

type DeepPartial7471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7471<T[P]> }
  : T;

type Paths7471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7471<K, Paths7471<T[K], Prev7471[D]>> : never }[keyof T]
  : never;

type Prev7471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7471 {
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

type ConfigPaths7471 = Paths7471<NestedConfig7471>;

interface HeavyProps7471 {
  config: DeepPartial7471<NestedConfig7471>;
  path?: ConfigPaths7471;
}

const HeavyComponent7471 = memo(function HeavyComponent7471({ config }: HeavyProps7471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7471.displayName = 'HeavyComponent7471';
export default HeavyComponent7471;

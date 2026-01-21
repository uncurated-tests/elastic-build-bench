'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7960<T> = T extends (infer U)[]
  ? DeepReadonlyArray7960<U>
  : T extends object
  ? DeepReadonlyObject7960<T>
  : T;

interface DeepReadonlyArray7960<T> extends ReadonlyArray<DeepReadonly7960<T>> {}

type DeepReadonlyObject7960<T> = {
  readonly [P in keyof T]: DeepReadonly7960<T[P]>;
};

type UnionToIntersection7960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7960<T> = UnionToIntersection7960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7960<T extends unknown[], V> = [...T, V];

type TuplifyUnion7960<T, L = LastOf7960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7960<TuplifyUnion7960<Exclude<T, L>>, L>;

type DeepPartial7960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7960<T[P]> }
  : T;

type Paths7960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7960<K, Paths7960<T[K], Prev7960[D]>> : never }[keyof T]
  : never;

type Prev7960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7960 {
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

type ConfigPaths7960 = Paths7960<NestedConfig7960>;

interface HeavyProps7960 {
  config: DeepPartial7960<NestedConfig7960>;
  path?: ConfigPaths7960;
}

const HeavyComponent7960 = memo(function HeavyComponent7960({ config }: HeavyProps7960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7960.displayName = 'HeavyComponent7960';
export default HeavyComponent7960;

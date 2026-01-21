'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7181<T> = T extends (infer U)[]
  ? DeepReadonlyArray7181<U>
  : T extends object
  ? DeepReadonlyObject7181<T>
  : T;

interface DeepReadonlyArray7181<T> extends ReadonlyArray<DeepReadonly7181<T>> {}

type DeepReadonlyObject7181<T> = {
  readonly [P in keyof T]: DeepReadonly7181<T[P]>;
};

type UnionToIntersection7181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7181<T> = UnionToIntersection7181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7181<T extends unknown[], V> = [...T, V];

type TuplifyUnion7181<T, L = LastOf7181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7181<TuplifyUnion7181<Exclude<T, L>>, L>;

type DeepPartial7181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7181<T[P]> }
  : T;

type Paths7181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7181<K, Paths7181<T[K], Prev7181[D]>> : never }[keyof T]
  : never;

type Prev7181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7181 {
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

type ConfigPaths7181 = Paths7181<NestedConfig7181>;

interface HeavyProps7181 {
  config: DeepPartial7181<NestedConfig7181>;
  path?: ConfigPaths7181;
}

const HeavyComponent7181 = memo(function HeavyComponent7181({ config }: HeavyProps7181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7181.displayName = 'HeavyComponent7181';
export default HeavyComponent7181;

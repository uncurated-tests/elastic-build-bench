'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7022<T> = T extends (infer U)[]
  ? DeepReadonlyArray7022<U>
  : T extends object
  ? DeepReadonlyObject7022<T>
  : T;

interface DeepReadonlyArray7022<T> extends ReadonlyArray<DeepReadonly7022<T>> {}

type DeepReadonlyObject7022<T> = {
  readonly [P in keyof T]: DeepReadonly7022<T[P]>;
};

type UnionToIntersection7022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7022<T> = UnionToIntersection7022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7022<T extends unknown[], V> = [...T, V];

type TuplifyUnion7022<T, L = LastOf7022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7022<TuplifyUnion7022<Exclude<T, L>>, L>;

type DeepPartial7022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7022<T[P]> }
  : T;

type Paths7022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7022<K, Paths7022<T[K], Prev7022[D]>> : never }[keyof T]
  : never;

type Prev7022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7022 {
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

type ConfigPaths7022 = Paths7022<NestedConfig7022>;

interface HeavyProps7022 {
  config: DeepPartial7022<NestedConfig7022>;
  path?: ConfigPaths7022;
}

const HeavyComponent7022 = memo(function HeavyComponent7022({ config }: HeavyProps7022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7022.displayName = 'HeavyComponent7022';
export default HeavyComponent7022;

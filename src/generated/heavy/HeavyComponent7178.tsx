'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7178<T> = T extends (infer U)[]
  ? DeepReadonlyArray7178<U>
  : T extends object
  ? DeepReadonlyObject7178<T>
  : T;

interface DeepReadonlyArray7178<T> extends ReadonlyArray<DeepReadonly7178<T>> {}

type DeepReadonlyObject7178<T> = {
  readonly [P in keyof T]: DeepReadonly7178<T[P]>;
};

type UnionToIntersection7178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7178<T> = UnionToIntersection7178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7178<T extends unknown[], V> = [...T, V];

type TuplifyUnion7178<T, L = LastOf7178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7178<TuplifyUnion7178<Exclude<T, L>>, L>;

type DeepPartial7178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7178<T[P]> }
  : T;

type Paths7178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7178<K, Paths7178<T[K], Prev7178[D]>> : never }[keyof T]
  : never;

type Prev7178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7178 {
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

type ConfigPaths7178 = Paths7178<NestedConfig7178>;

interface HeavyProps7178 {
  config: DeepPartial7178<NestedConfig7178>;
  path?: ConfigPaths7178;
}

const HeavyComponent7178 = memo(function HeavyComponent7178({ config }: HeavyProps7178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7178.displayName = 'HeavyComponent7178';
export default HeavyComponent7178;

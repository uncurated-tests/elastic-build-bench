'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7351<T> = T extends (infer U)[]
  ? DeepReadonlyArray7351<U>
  : T extends object
  ? DeepReadonlyObject7351<T>
  : T;

interface DeepReadonlyArray7351<T> extends ReadonlyArray<DeepReadonly7351<T>> {}

type DeepReadonlyObject7351<T> = {
  readonly [P in keyof T]: DeepReadonly7351<T[P]>;
};

type UnionToIntersection7351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7351<T> = UnionToIntersection7351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7351<T extends unknown[], V> = [...T, V];

type TuplifyUnion7351<T, L = LastOf7351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7351<TuplifyUnion7351<Exclude<T, L>>, L>;

type DeepPartial7351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7351<T[P]> }
  : T;

type Paths7351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7351<K, Paths7351<T[K], Prev7351[D]>> : never }[keyof T]
  : never;

type Prev7351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7351 {
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

type ConfigPaths7351 = Paths7351<NestedConfig7351>;

interface HeavyProps7351 {
  config: DeepPartial7351<NestedConfig7351>;
  path?: ConfigPaths7351;
}

const HeavyComponent7351 = memo(function HeavyComponent7351({ config }: HeavyProps7351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7351.displayName = 'HeavyComponent7351';
export default HeavyComponent7351;

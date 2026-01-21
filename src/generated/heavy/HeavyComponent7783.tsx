'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7783<T> = T extends (infer U)[]
  ? DeepReadonlyArray7783<U>
  : T extends object
  ? DeepReadonlyObject7783<T>
  : T;

interface DeepReadonlyArray7783<T> extends ReadonlyArray<DeepReadonly7783<T>> {}

type DeepReadonlyObject7783<T> = {
  readonly [P in keyof T]: DeepReadonly7783<T[P]>;
};

type UnionToIntersection7783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7783<T> = UnionToIntersection7783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7783<T extends unknown[], V> = [...T, V];

type TuplifyUnion7783<T, L = LastOf7783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7783<TuplifyUnion7783<Exclude<T, L>>, L>;

type DeepPartial7783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7783<T[P]> }
  : T;

type Paths7783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7783<K, Paths7783<T[K], Prev7783[D]>> : never }[keyof T]
  : never;

type Prev7783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7783 {
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

type ConfigPaths7783 = Paths7783<NestedConfig7783>;

interface HeavyProps7783 {
  config: DeepPartial7783<NestedConfig7783>;
  path?: ConfigPaths7783;
}

const HeavyComponent7783 = memo(function HeavyComponent7783({ config }: HeavyProps7783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7783.displayName = 'HeavyComponent7783';
export default HeavyComponent7783;

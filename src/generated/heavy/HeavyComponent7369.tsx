'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7369<T> = T extends (infer U)[]
  ? DeepReadonlyArray7369<U>
  : T extends object
  ? DeepReadonlyObject7369<T>
  : T;

interface DeepReadonlyArray7369<T> extends ReadonlyArray<DeepReadonly7369<T>> {}

type DeepReadonlyObject7369<T> = {
  readonly [P in keyof T]: DeepReadonly7369<T[P]>;
};

type UnionToIntersection7369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7369<T> = UnionToIntersection7369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7369<T extends unknown[], V> = [...T, V];

type TuplifyUnion7369<T, L = LastOf7369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7369<TuplifyUnion7369<Exclude<T, L>>, L>;

type DeepPartial7369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7369<T[P]> }
  : T;

type Paths7369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7369<K, Paths7369<T[K], Prev7369[D]>> : never }[keyof T]
  : never;

type Prev7369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7369 {
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

type ConfigPaths7369 = Paths7369<NestedConfig7369>;

interface HeavyProps7369 {
  config: DeepPartial7369<NestedConfig7369>;
  path?: ConfigPaths7369;
}

const HeavyComponent7369 = memo(function HeavyComponent7369({ config }: HeavyProps7369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7369.displayName = 'HeavyComponent7369';
export default HeavyComponent7369;

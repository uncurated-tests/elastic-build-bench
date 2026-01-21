'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7263<T> = T extends (infer U)[]
  ? DeepReadonlyArray7263<U>
  : T extends object
  ? DeepReadonlyObject7263<T>
  : T;

interface DeepReadonlyArray7263<T> extends ReadonlyArray<DeepReadonly7263<T>> {}

type DeepReadonlyObject7263<T> = {
  readonly [P in keyof T]: DeepReadonly7263<T[P]>;
};

type UnionToIntersection7263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7263<T> = UnionToIntersection7263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7263<T extends unknown[], V> = [...T, V];

type TuplifyUnion7263<T, L = LastOf7263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7263<TuplifyUnion7263<Exclude<T, L>>, L>;

type DeepPartial7263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7263<T[P]> }
  : T;

type Paths7263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7263<K, Paths7263<T[K], Prev7263[D]>> : never }[keyof T]
  : never;

type Prev7263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7263 {
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

type ConfigPaths7263 = Paths7263<NestedConfig7263>;

interface HeavyProps7263 {
  config: DeepPartial7263<NestedConfig7263>;
  path?: ConfigPaths7263;
}

const HeavyComponent7263 = memo(function HeavyComponent7263({ config }: HeavyProps7263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7263.displayName = 'HeavyComponent7263';
export default HeavyComponent7263;

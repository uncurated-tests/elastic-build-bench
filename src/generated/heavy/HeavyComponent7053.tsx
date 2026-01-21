'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7053<T> = T extends (infer U)[]
  ? DeepReadonlyArray7053<U>
  : T extends object
  ? DeepReadonlyObject7053<T>
  : T;

interface DeepReadonlyArray7053<T> extends ReadonlyArray<DeepReadonly7053<T>> {}

type DeepReadonlyObject7053<T> = {
  readonly [P in keyof T]: DeepReadonly7053<T[P]>;
};

type UnionToIntersection7053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7053<T> = UnionToIntersection7053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7053<T extends unknown[], V> = [...T, V];

type TuplifyUnion7053<T, L = LastOf7053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7053<TuplifyUnion7053<Exclude<T, L>>, L>;

type DeepPartial7053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7053<T[P]> }
  : T;

type Paths7053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7053<K, Paths7053<T[K], Prev7053[D]>> : never }[keyof T]
  : never;

type Prev7053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7053 {
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

type ConfigPaths7053 = Paths7053<NestedConfig7053>;

interface HeavyProps7053 {
  config: DeepPartial7053<NestedConfig7053>;
  path?: ConfigPaths7053;
}

const HeavyComponent7053 = memo(function HeavyComponent7053({ config }: HeavyProps7053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7053.displayName = 'HeavyComponent7053';
export default HeavyComponent7053;

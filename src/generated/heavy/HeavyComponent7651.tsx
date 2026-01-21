'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7651<T> = T extends (infer U)[]
  ? DeepReadonlyArray7651<U>
  : T extends object
  ? DeepReadonlyObject7651<T>
  : T;

interface DeepReadonlyArray7651<T> extends ReadonlyArray<DeepReadonly7651<T>> {}

type DeepReadonlyObject7651<T> = {
  readonly [P in keyof T]: DeepReadonly7651<T[P]>;
};

type UnionToIntersection7651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7651<T> = UnionToIntersection7651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7651<T extends unknown[], V> = [...T, V];

type TuplifyUnion7651<T, L = LastOf7651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7651<TuplifyUnion7651<Exclude<T, L>>, L>;

type DeepPartial7651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7651<T[P]> }
  : T;

type Paths7651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7651<K, Paths7651<T[K], Prev7651[D]>> : never }[keyof T]
  : never;

type Prev7651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7651 {
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

type ConfigPaths7651 = Paths7651<NestedConfig7651>;

interface HeavyProps7651 {
  config: DeepPartial7651<NestedConfig7651>;
  path?: ConfigPaths7651;
}

const HeavyComponent7651 = memo(function HeavyComponent7651({ config }: HeavyProps7651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7651.displayName = 'HeavyComponent7651';
export default HeavyComponent7651;

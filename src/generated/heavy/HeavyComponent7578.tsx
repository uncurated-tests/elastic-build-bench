'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7578<T> = T extends (infer U)[]
  ? DeepReadonlyArray7578<U>
  : T extends object
  ? DeepReadonlyObject7578<T>
  : T;

interface DeepReadonlyArray7578<T> extends ReadonlyArray<DeepReadonly7578<T>> {}

type DeepReadonlyObject7578<T> = {
  readonly [P in keyof T]: DeepReadonly7578<T[P]>;
};

type UnionToIntersection7578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7578<T> = UnionToIntersection7578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7578<T extends unknown[], V> = [...T, V];

type TuplifyUnion7578<T, L = LastOf7578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7578<TuplifyUnion7578<Exclude<T, L>>, L>;

type DeepPartial7578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7578<T[P]> }
  : T;

type Paths7578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7578<K, Paths7578<T[K], Prev7578[D]>> : never }[keyof T]
  : never;

type Prev7578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7578 {
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

type ConfigPaths7578 = Paths7578<NestedConfig7578>;

interface HeavyProps7578 {
  config: DeepPartial7578<NestedConfig7578>;
  path?: ConfigPaths7578;
}

const HeavyComponent7578 = memo(function HeavyComponent7578({ config }: HeavyProps7578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7578.displayName = 'HeavyComponent7578';
export default HeavyComponent7578;

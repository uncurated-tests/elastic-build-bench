'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7012<T> = T extends (infer U)[]
  ? DeepReadonlyArray7012<U>
  : T extends object
  ? DeepReadonlyObject7012<T>
  : T;

interface DeepReadonlyArray7012<T> extends ReadonlyArray<DeepReadonly7012<T>> {}

type DeepReadonlyObject7012<T> = {
  readonly [P in keyof T]: DeepReadonly7012<T[P]>;
};

type UnionToIntersection7012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7012<T> = UnionToIntersection7012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7012<T extends unknown[], V> = [...T, V];

type TuplifyUnion7012<T, L = LastOf7012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7012<TuplifyUnion7012<Exclude<T, L>>, L>;

type DeepPartial7012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7012<T[P]> }
  : T;

type Paths7012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7012<K, Paths7012<T[K], Prev7012[D]>> : never }[keyof T]
  : never;

type Prev7012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7012 {
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

type ConfigPaths7012 = Paths7012<NestedConfig7012>;

interface HeavyProps7012 {
  config: DeepPartial7012<NestedConfig7012>;
  path?: ConfigPaths7012;
}

const HeavyComponent7012 = memo(function HeavyComponent7012({ config }: HeavyProps7012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7012.displayName = 'HeavyComponent7012';
export default HeavyComponent7012;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7649<T> = T extends (infer U)[]
  ? DeepReadonlyArray7649<U>
  : T extends object
  ? DeepReadonlyObject7649<T>
  : T;

interface DeepReadonlyArray7649<T> extends ReadonlyArray<DeepReadonly7649<T>> {}

type DeepReadonlyObject7649<T> = {
  readonly [P in keyof T]: DeepReadonly7649<T[P]>;
};

type UnionToIntersection7649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7649<T> = UnionToIntersection7649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7649<T extends unknown[], V> = [...T, V];

type TuplifyUnion7649<T, L = LastOf7649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7649<TuplifyUnion7649<Exclude<T, L>>, L>;

type DeepPartial7649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7649<T[P]> }
  : T;

type Paths7649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7649<K, Paths7649<T[K], Prev7649[D]>> : never }[keyof T]
  : never;

type Prev7649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7649 {
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

type ConfigPaths7649 = Paths7649<NestedConfig7649>;

interface HeavyProps7649 {
  config: DeepPartial7649<NestedConfig7649>;
  path?: ConfigPaths7649;
}

const HeavyComponent7649 = memo(function HeavyComponent7649({ config }: HeavyProps7649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7649.displayName = 'HeavyComponent7649';
export default HeavyComponent7649;

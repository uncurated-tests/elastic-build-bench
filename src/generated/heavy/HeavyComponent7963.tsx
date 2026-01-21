'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7963<T> = T extends (infer U)[]
  ? DeepReadonlyArray7963<U>
  : T extends object
  ? DeepReadonlyObject7963<T>
  : T;

interface DeepReadonlyArray7963<T> extends ReadonlyArray<DeepReadonly7963<T>> {}

type DeepReadonlyObject7963<T> = {
  readonly [P in keyof T]: DeepReadonly7963<T[P]>;
};

type UnionToIntersection7963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7963<T> = UnionToIntersection7963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7963<T extends unknown[], V> = [...T, V];

type TuplifyUnion7963<T, L = LastOf7963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7963<TuplifyUnion7963<Exclude<T, L>>, L>;

type DeepPartial7963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7963<T[P]> }
  : T;

type Paths7963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7963<K, Paths7963<T[K], Prev7963[D]>> : never }[keyof T]
  : never;

type Prev7963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7963 {
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

type ConfigPaths7963 = Paths7963<NestedConfig7963>;

interface HeavyProps7963 {
  config: DeepPartial7963<NestedConfig7963>;
  path?: ConfigPaths7963;
}

const HeavyComponent7963 = memo(function HeavyComponent7963({ config }: HeavyProps7963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7963.displayName = 'HeavyComponent7963';
export default HeavyComponent7963;

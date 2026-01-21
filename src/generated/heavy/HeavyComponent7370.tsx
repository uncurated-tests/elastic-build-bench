'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7370<T> = T extends (infer U)[]
  ? DeepReadonlyArray7370<U>
  : T extends object
  ? DeepReadonlyObject7370<T>
  : T;

interface DeepReadonlyArray7370<T> extends ReadonlyArray<DeepReadonly7370<T>> {}

type DeepReadonlyObject7370<T> = {
  readonly [P in keyof T]: DeepReadonly7370<T[P]>;
};

type UnionToIntersection7370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7370<T> = UnionToIntersection7370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7370<T extends unknown[], V> = [...T, V];

type TuplifyUnion7370<T, L = LastOf7370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7370<TuplifyUnion7370<Exclude<T, L>>, L>;

type DeepPartial7370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7370<T[P]> }
  : T;

type Paths7370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7370<K, Paths7370<T[K], Prev7370[D]>> : never }[keyof T]
  : never;

type Prev7370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7370 {
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

type ConfigPaths7370 = Paths7370<NestedConfig7370>;

interface HeavyProps7370 {
  config: DeepPartial7370<NestedConfig7370>;
  path?: ConfigPaths7370;
}

const HeavyComponent7370 = memo(function HeavyComponent7370({ config }: HeavyProps7370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7370.displayName = 'HeavyComponent7370';
export default HeavyComponent7370;

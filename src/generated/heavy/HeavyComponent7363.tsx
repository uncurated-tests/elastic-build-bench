'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7363<T> = T extends (infer U)[]
  ? DeepReadonlyArray7363<U>
  : T extends object
  ? DeepReadonlyObject7363<T>
  : T;

interface DeepReadonlyArray7363<T> extends ReadonlyArray<DeepReadonly7363<T>> {}

type DeepReadonlyObject7363<T> = {
  readonly [P in keyof T]: DeepReadonly7363<T[P]>;
};

type UnionToIntersection7363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7363<T> = UnionToIntersection7363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7363<T extends unknown[], V> = [...T, V];

type TuplifyUnion7363<T, L = LastOf7363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7363<TuplifyUnion7363<Exclude<T, L>>, L>;

type DeepPartial7363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7363<T[P]> }
  : T;

type Paths7363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7363<K, Paths7363<T[K], Prev7363[D]>> : never }[keyof T]
  : never;

type Prev7363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7363 {
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

type ConfigPaths7363 = Paths7363<NestedConfig7363>;

interface HeavyProps7363 {
  config: DeepPartial7363<NestedConfig7363>;
  path?: ConfigPaths7363;
}

const HeavyComponent7363 = memo(function HeavyComponent7363({ config }: HeavyProps7363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7363.displayName = 'HeavyComponent7363';
export default HeavyComponent7363;

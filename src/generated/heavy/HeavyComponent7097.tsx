'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7097<T> = T extends (infer U)[]
  ? DeepReadonlyArray7097<U>
  : T extends object
  ? DeepReadonlyObject7097<T>
  : T;

interface DeepReadonlyArray7097<T> extends ReadonlyArray<DeepReadonly7097<T>> {}

type DeepReadonlyObject7097<T> = {
  readonly [P in keyof T]: DeepReadonly7097<T[P]>;
};

type UnionToIntersection7097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7097<T> = UnionToIntersection7097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7097<T extends unknown[], V> = [...T, V];

type TuplifyUnion7097<T, L = LastOf7097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7097<TuplifyUnion7097<Exclude<T, L>>, L>;

type DeepPartial7097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7097<T[P]> }
  : T;

type Paths7097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7097<K, Paths7097<T[K], Prev7097[D]>> : never }[keyof T]
  : never;

type Prev7097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7097 {
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

type ConfigPaths7097 = Paths7097<NestedConfig7097>;

interface HeavyProps7097 {
  config: DeepPartial7097<NestedConfig7097>;
  path?: ConfigPaths7097;
}

const HeavyComponent7097 = memo(function HeavyComponent7097({ config }: HeavyProps7097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7097.displayName = 'HeavyComponent7097';
export default HeavyComponent7097;

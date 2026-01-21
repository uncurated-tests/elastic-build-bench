'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7745<T> = T extends (infer U)[]
  ? DeepReadonlyArray7745<U>
  : T extends object
  ? DeepReadonlyObject7745<T>
  : T;

interface DeepReadonlyArray7745<T> extends ReadonlyArray<DeepReadonly7745<T>> {}

type DeepReadonlyObject7745<T> = {
  readonly [P in keyof T]: DeepReadonly7745<T[P]>;
};

type UnionToIntersection7745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7745<T> = UnionToIntersection7745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7745<T extends unknown[], V> = [...T, V];

type TuplifyUnion7745<T, L = LastOf7745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7745<TuplifyUnion7745<Exclude<T, L>>, L>;

type DeepPartial7745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7745<T[P]> }
  : T;

type Paths7745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7745<K, Paths7745<T[K], Prev7745[D]>> : never }[keyof T]
  : never;

type Prev7745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7745 {
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

type ConfigPaths7745 = Paths7745<NestedConfig7745>;

interface HeavyProps7745 {
  config: DeepPartial7745<NestedConfig7745>;
  path?: ConfigPaths7745;
}

const HeavyComponent7745 = memo(function HeavyComponent7745({ config }: HeavyProps7745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7745.displayName = 'HeavyComponent7745';
export default HeavyComponent7745;

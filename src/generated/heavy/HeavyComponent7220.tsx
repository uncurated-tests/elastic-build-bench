'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7220<T> = T extends (infer U)[]
  ? DeepReadonlyArray7220<U>
  : T extends object
  ? DeepReadonlyObject7220<T>
  : T;

interface DeepReadonlyArray7220<T> extends ReadonlyArray<DeepReadonly7220<T>> {}

type DeepReadonlyObject7220<T> = {
  readonly [P in keyof T]: DeepReadonly7220<T[P]>;
};

type UnionToIntersection7220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7220<T> = UnionToIntersection7220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7220<T extends unknown[], V> = [...T, V];

type TuplifyUnion7220<T, L = LastOf7220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7220<TuplifyUnion7220<Exclude<T, L>>, L>;

type DeepPartial7220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7220<T[P]> }
  : T;

type Paths7220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7220<K, Paths7220<T[K], Prev7220[D]>> : never }[keyof T]
  : never;

type Prev7220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7220 {
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

type ConfigPaths7220 = Paths7220<NestedConfig7220>;

interface HeavyProps7220 {
  config: DeepPartial7220<NestedConfig7220>;
  path?: ConfigPaths7220;
}

const HeavyComponent7220 = memo(function HeavyComponent7220({ config }: HeavyProps7220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7220.displayName = 'HeavyComponent7220';
export default HeavyComponent7220;

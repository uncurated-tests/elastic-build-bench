'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7796<T> = T extends (infer U)[]
  ? DeepReadonlyArray7796<U>
  : T extends object
  ? DeepReadonlyObject7796<T>
  : T;

interface DeepReadonlyArray7796<T> extends ReadonlyArray<DeepReadonly7796<T>> {}

type DeepReadonlyObject7796<T> = {
  readonly [P in keyof T]: DeepReadonly7796<T[P]>;
};

type UnionToIntersection7796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7796<T> = UnionToIntersection7796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7796<T extends unknown[], V> = [...T, V];

type TuplifyUnion7796<T, L = LastOf7796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7796<TuplifyUnion7796<Exclude<T, L>>, L>;

type DeepPartial7796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7796<T[P]> }
  : T;

type Paths7796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7796<K, Paths7796<T[K], Prev7796[D]>> : never }[keyof T]
  : never;

type Prev7796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7796 {
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

type ConfigPaths7796 = Paths7796<NestedConfig7796>;

interface HeavyProps7796 {
  config: DeepPartial7796<NestedConfig7796>;
  path?: ConfigPaths7796;
}

const HeavyComponent7796 = memo(function HeavyComponent7796({ config }: HeavyProps7796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7796.displayName = 'HeavyComponent7796';
export default HeavyComponent7796;

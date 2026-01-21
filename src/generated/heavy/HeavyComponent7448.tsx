'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7448<T> = T extends (infer U)[]
  ? DeepReadonlyArray7448<U>
  : T extends object
  ? DeepReadonlyObject7448<T>
  : T;

interface DeepReadonlyArray7448<T> extends ReadonlyArray<DeepReadonly7448<T>> {}

type DeepReadonlyObject7448<T> = {
  readonly [P in keyof T]: DeepReadonly7448<T[P]>;
};

type UnionToIntersection7448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7448<T> = UnionToIntersection7448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7448<T extends unknown[], V> = [...T, V];

type TuplifyUnion7448<T, L = LastOf7448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7448<TuplifyUnion7448<Exclude<T, L>>, L>;

type DeepPartial7448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7448<T[P]> }
  : T;

type Paths7448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7448<K, Paths7448<T[K], Prev7448[D]>> : never }[keyof T]
  : never;

type Prev7448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7448 {
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

type ConfigPaths7448 = Paths7448<NestedConfig7448>;

interface HeavyProps7448 {
  config: DeepPartial7448<NestedConfig7448>;
  path?: ConfigPaths7448;
}

const HeavyComponent7448 = memo(function HeavyComponent7448({ config }: HeavyProps7448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7448.displayName = 'HeavyComponent7448';
export default HeavyComponent7448;

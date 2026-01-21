'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7528<T> = T extends (infer U)[]
  ? DeepReadonlyArray7528<U>
  : T extends object
  ? DeepReadonlyObject7528<T>
  : T;

interface DeepReadonlyArray7528<T> extends ReadonlyArray<DeepReadonly7528<T>> {}

type DeepReadonlyObject7528<T> = {
  readonly [P in keyof T]: DeepReadonly7528<T[P]>;
};

type UnionToIntersection7528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7528<T> = UnionToIntersection7528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7528<T extends unknown[], V> = [...T, V];

type TuplifyUnion7528<T, L = LastOf7528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7528<TuplifyUnion7528<Exclude<T, L>>, L>;

type DeepPartial7528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7528<T[P]> }
  : T;

type Paths7528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7528<K, Paths7528<T[K], Prev7528[D]>> : never }[keyof T]
  : never;

type Prev7528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7528 {
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

type ConfigPaths7528 = Paths7528<NestedConfig7528>;

interface HeavyProps7528 {
  config: DeepPartial7528<NestedConfig7528>;
  path?: ConfigPaths7528;
}

const HeavyComponent7528 = memo(function HeavyComponent7528({ config }: HeavyProps7528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7528.displayName = 'HeavyComponent7528';
export default HeavyComponent7528;

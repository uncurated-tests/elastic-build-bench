'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7787<T> = T extends (infer U)[]
  ? DeepReadonlyArray7787<U>
  : T extends object
  ? DeepReadonlyObject7787<T>
  : T;

interface DeepReadonlyArray7787<T> extends ReadonlyArray<DeepReadonly7787<T>> {}

type DeepReadonlyObject7787<T> = {
  readonly [P in keyof T]: DeepReadonly7787<T[P]>;
};

type UnionToIntersection7787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7787<T> = UnionToIntersection7787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7787<T extends unknown[], V> = [...T, V];

type TuplifyUnion7787<T, L = LastOf7787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7787<TuplifyUnion7787<Exclude<T, L>>, L>;

type DeepPartial7787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7787<T[P]> }
  : T;

type Paths7787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7787<K, Paths7787<T[K], Prev7787[D]>> : never }[keyof T]
  : never;

type Prev7787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7787 {
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

type ConfigPaths7787 = Paths7787<NestedConfig7787>;

interface HeavyProps7787 {
  config: DeepPartial7787<NestedConfig7787>;
  path?: ConfigPaths7787;
}

const HeavyComponent7787 = memo(function HeavyComponent7787({ config }: HeavyProps7787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7787.displayName = 'HeavyComponent7787';
export default HeavyComponent7787;

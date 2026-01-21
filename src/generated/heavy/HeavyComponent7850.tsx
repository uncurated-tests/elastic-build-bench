'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7850<T> = T extends (infer U)[]
  ? DeepReadonlyArray7850<U>
  : T extends object
  ? DeepReadonlyObject7850<T>
  : T;

interface DeepReadonlyArray7850<T> extends ReadonlyArray<DeepReadonly7850<T>> {}

type DeepReadonlyObject7850<T> = {
  readonly [P in keyof T]: DeepReadonly7850<T[P]>;
};

type UnionToIntersection7850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7850<T> = UnionToIntersection7850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7850<T extends unknown[], V> = [...T, V];

type TuplifyUnion7850<T, L = LastOf7850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7850<TuplifyUnion7850<Exclude<T, L>>, L>;

type DeepPartial7850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7850<T[P]> }
  : T;

type Paths7850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7850<K, Paths7850<T[K], Prev7850[D]>> : never }[keyof T]
  : never;

type Prev7850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7850 {
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

type ConfigPaths7850 = Paths7850<NestedConfig7850>;

interface HeavyProps7850 {
  config: DeepPartial7850<NestedConfig7850>;
  path?: ConfigPaths7850;
}

const HeavyComponent7850 = memo(function HeavyComponent7850({ config }: HeavyProps7850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7850.displayName = 'HeavyComponent7850';
export default HeavyComponent7850;

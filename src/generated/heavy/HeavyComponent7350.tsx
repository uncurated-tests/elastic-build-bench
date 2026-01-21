'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7350<T> = T extends (infer U)[]
  ? DeepReadonlyArray7350<U>
  : T extends object
  ? DeepReadonlyObject7350<T>
  : T;

interface DeepReadonlyArray7350<T> extends ReadonlyArray<DeepReadonly7350<T>> {}

type DeepReadonlyObject7350<T> = {
  readonly [P in keyof T]: DeepReadonly7350<T[P]>;
};

type UnionToIntersection7350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7350<T> = UnionToIntersection7350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7350<T extends unknown[], V> = [...T, V];

type TuplifyUnion7350<T, L = LastOf7350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7350<TuplifyUnion7350<Exclude<T, L>>, L>;

type DeepPartial7350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7350<T[P]> }
  : T;

type Paths7350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7350<K, Paths7350<T[K], Prev7350[D]>> : never }[keyof T]
  : never;

type Prev7350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7350 {
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

type ConfigPaths7350 = Paths7350<NestedConfig7350>;

interface HeavyProps7350 {
  config: DeepPartial7350<NestedConfig7350>;
  path?: ConfigPaths7350;
}

const HeavyComponent7350 = memo(function HeavyComponent7350({ config }: HeavyProps7350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7350.displayName = 'HeavyComponent7350';
export default HeavyComponent7350;

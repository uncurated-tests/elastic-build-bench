'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7856<T> = T extends (infer U)[]
  ? DeepReadonlyArray7856<U>
  : T extends object
  ? DeepReadonlyObject7856<T>
  : T;

interface DeepReadonlyArray7856<T> extends ReadonlyArray<DeepReadonly7856<T>> {}

type DeepReadonlyObject7856<T> = {
  readonly [P in keyof T]: DeepReadonly7856<T[P]>;
};

type UnionToIntersection7856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7856<T> = UnionToIntersection7856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7856<T extends unknown[], V> = [...T, V];

type TuplifyUnion7856<T, L = LastOf7856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7856<TuplifyUnion7856<Exclude<T, L>>, L>;

type DeepPartial7856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7856<T[P]> }
  : T;

type Paths7856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7856<K, Paths7856<T[K], Prev7856[D]>> : never }[keyof T]
  : never;

type Prev7856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7856 {
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

type ConfigPaths7856 = Paths7856<NestedConfig7856>;

interface HeavyProps7856 {
  config: DeepPartial7856<NestedConfig7856>;
  path?: ConfigPaths7856;
}

const HeavyComponent7856 = memo(function HeavyComponent7856({ config }: HeavyProps7856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7856.displayName = 'HeavyComponent7856';
export default HeavyComponent7856;

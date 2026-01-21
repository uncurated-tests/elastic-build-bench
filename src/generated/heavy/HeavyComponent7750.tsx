'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7750<T> = T extends (infer U)[]
  ? DeepReadonlyArray7750<U>
  : T extends object
  ? DeepReadonlyObject7750<T>
  : T;

interface DeepReadonlyArray7750<T> extends ReadonlyArray<DeepReadonly7750<T>> {}

type DeepReadonlyObject7750<T> = {
  readonly [P in keyof T]: DeepReadonly7750<T[P]>;
};

type UnionToIntersection7750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7750<T> = UnionToIntersection7750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7750<T extends unknown[], V> = [...T, V];

type TuplifyUnion7750<T, L = LastOf7750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7750<TuplifyUnion7750<Exclude<T, L>>, L>;

type DeepPartial7750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7750<T[P]> }
  : T;

type Paths7750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7750<K, Paths7750<T[K], Prev7750[D]>> : never }[keyof T]
  : never;

type Prev7750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7750 {
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

type ConfigPaths7750 = Paths7750<NestedConfig7750>;

interface HeavyProps7750 {
  config: DeepPartial7750<NestedConfig7750>;
  path?: ConfigPaths7750;
}

const HeavyComponent7750 = memo(function HeavyComponent7750({ config }: HeavyProps7750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7750.displayName = 'HeavyComponent7750';
export default HeavyComponent7750;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7320<T> = T extends (infer U)[]
  ? DeepReadonlyArray7320<U>
  : T extends object
  ? DeepReadonlyObject7320<T>
  : T;

interface DeepReadonlyArray7320<T> extends ReadonlyArray<DeepReadonly7320<T>> {}

type DeepReadonlyObject7320<T> = {
  readonly [P in keyof T]: DeepReadonly7320<T[P]>;
};

type UnionToIntersection7320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7320<T> = UnionToIntersection7320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7320<T extends unknown[], V> = [...T, V];

type TuplifyUnion7320<T, L = LastOf7320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7320<TuplifyUnion7320<Exclude<T, L>>, L>;

type DeepPartial7320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7320<T[P]> }
  : T;

type Paths7320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7320<K, Paths7320<T[K], Prev7320[D]>> : never }[keyof T]
  : never;

type Prev7320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7320 {
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

type ConfigPaths7320 = Paths7320<NestedConfig7320>;

interface HeavyProps7320 {
  config: DeepPartial7320<NestedConfig7320>;
  path?: ConfigPaths7320;
}

const HeavyComponent7320 = memo(function HeavyComponent7320({ config }: HeavyProps7320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7320.displayName = 'HeavyComponent7320';
export default HeavyComponent7320;

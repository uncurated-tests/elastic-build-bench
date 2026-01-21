'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7530<T> = T extends (infer U)[]
  ? DeepReadonlyArray7530<U>
  : T extends object
  ? DeepReadonlyObject7530<T>
  : T;

interface DeepReadonlyArray7530<T> extends ReadonlyArray<DeepReadonly7530<T>> {}

type DeepReadonlyObject7530<T> = {
  readonly [P in keyof T]: DeepReadonly7530<T[P]>;
};

type UnionToIntersection7530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7530<T> = UnionToIntersection7530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7530<T extends unknown[], V> = [...T, V];

type TuplifyUnion7530<T, L = LastOf7530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7530<TuplifyUnion7530<Exclude<T, L>>, L>;

type DeepPartial7530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7530<T[P]> }
  : T;

type Paths7530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7530<K, Paths7530<T[K], Prev7530[D]>> : never }[keyof T]
  : never;

type Prev7530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7530 {
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

type ConfigPaths7530 = Paths7530<NestedConfig7530>;

interface HeavyProps7530 {
  config: DeepPartial7530<NestedConfig7530>;
  path?: ConfigPaths7530;
}

const HeavyComponent7530 = memo(function HeavyComponent7530({ config }: HeavyProps7530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7530.displayName = 'HeavyComponent7530';
export default HeavyComponent7530;

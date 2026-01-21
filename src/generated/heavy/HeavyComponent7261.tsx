'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7261<T> = T extends (infer U)[]
  ? DeepReadonlyArray7261<U>
  : T extends object
  ? DeepReadonlyObject7261<T>
  : T;

interface DeepReadonlyArray7261<T> extends ReadonlyArray<DeepReadonly7261<T>> {}

type DeepReadonlyObject7261<T> = {
  readonly [P in keyof T]: DeepReadonly7261<T[P]>;
};

type UnionToIntersection7261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7261<T> = UnionToIntersection7261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7261<T extends unknown[], V> = [...T, V];

type TuplifyUnion7261<T, L = LastOf7261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7261<TuplifyUnion7261<Exclude<T, L>>, L>;

type DeepPartial7261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7261<T[P]> }
  : T;

type Paths7261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7261<K, Paths7261<T[K], Prev7261[D]>> : never }[keyof T]
  : never;

type Prev7261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7261 {
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

type ConfigPaths7261 = Paths7261<NestedConfig7261>;

interface HeavyProps7261 {
  config: DeepPartial7261<NestedConfig7261>;
  path?: ConfigPaths7261;
}

const HeavyComponent7261 = memo(function HeavyComponent7261({ config }: HeavyProps7261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7261.displayName = 'HeavyComponent7261';
export default HeavyComponent7261;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7421<T> = T extends (infer U)[]
  ? DeepReadonlyArray7421<U>
  : T extends object
  ? DeepReadonlyObject7421<T>
  : T;

interface DeepReadonlyArray7421<T> extends ReadonlyArray<DeepReadonly7421<T>> {}

type DeepReadonlyObject7421<T> = {
  readonly [P in keyof T]: DeepReadonly7421<T[P]>;
};

type UnionToIntersection7421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7421<T> = UnionToIntersection7421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7421<T extends unknown[], V> = [...T, V];

type TuplifyUnion7421<T, L = LastOf7421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7421<TuplifyUnion7421<Exclude<T, L>>, L>;

type DeepPartial7421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7421<T[P]> }
  : T;

type Paths7421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7421<K, Paths7421<T[K], Prev7421[D]>> : never }[keyof T]
  : never;

type Prev7421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7421 {
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

type ConfigPaths7421 = Paths7421<NestedConfig7421>;

interface HeavyProps7421 {
  config: DeepPartial7421<NestedConfig7421>;
  path?: ConfigPaths7421;
}

const HeavyComponent7421 = memo(function HeavyComponent7421({ config }: HeavyProps7421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7421.displayName = 'HeavyComponent7421';
export default HeavyComponent7421;

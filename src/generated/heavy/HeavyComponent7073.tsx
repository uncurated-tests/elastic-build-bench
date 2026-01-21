'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7073<T> = T extends (infer U)[]
  ? DeepReadonlyArray7073<U>
  : T extends object
  ? DeepReadonlyObject7073<T>
  : T;

interface DeepReadonlyArray7073<T> extends ReadonlyArray<DeepReadonly7073<T>> {}

type DeepReadonlyObject7073<T> = {
  readonly [P in keyof T]: DeepReadonly7073<T[P]>;
};

type UnionToIntersection7073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7073<T> = UnionToIntersection7073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7073<T extends unknown[], V> = [...T, V];

type TuplifyUnion7073<T, L = LastOf7073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7073<TuplifyUnion7073<Exclude<T, L>>, L>;

type DeepPartial7073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7073<T[P]> }
  : T;

type Paths7073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7073<K, Paths7073<T[K], Prev7073[D]>> : never }[keyof T]
  : never;

type Prev7073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7073 {
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

type ConfigPaths7073 = Paths7073<NestedConfig7073>;

interface HeavyProps7073 {
  config: DeepPartial7073<NestedConfig7073>;
  path?: ConfigPaths7073;
}

const HeavyComponent7073 = memo(function HeavyComponent7073({ config }: HeavyProps7073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7073.displayName = 'HeavyComponent7073';
export default HeavyComponent7073;

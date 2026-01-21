'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7762<T> = T extends (infer U)[]
  ? DeepReadonlyArray7762<U>
  : T extends object
  ? DeepReadonlyObject7762<T>
  : T;

interface DeepReadonlyArray7762<T> extends ReadonlyArray<DeepReadonly7762<T>> {}

type DeepReadonlyObject7762<T> = {
  readonly [P in keyof T]: DeepReadonly7762<T[P]>;
};

type UnionToIntersection7762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7762<T> = UnionToIntersection7762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7762<T extends unknown[], V> = [...T, V];

type TuplifyUnion7762<T, L = LastOf7762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7762<TuplifyUnion7762<Exclude<T, L>>, L>;

type DeepPartial7762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7762<T[P]> }
  : T;

type Paths7762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7762<K, Paths7762<T[K], Prev7762[D]>> : never }[keyof T]
  : never;

type Prev7762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7762 {
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

type ConfigPaths7762 = Paths7762<NestedConfig7762>;

interface HeavyProps7762 {
  config: DeepPartial7762<NestedConfig7762>;
  path?: ConfigPaths7762;
}

const HeavyComponent7762 = memo(function HeavyComponent7762({ config }: HeavyProps7762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7762.displayName = 'HeavyComponent7762';
export default HeavyComponent7762;

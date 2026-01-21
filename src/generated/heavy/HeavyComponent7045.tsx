'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7045<T> = T extends (infer U)[]
  ? DeepReadonlyArray7045<U>
  : T extends object
  ? DeepReadonlyObject7045<T>
  : T;

interface DeepReadonlyArray7045<T> extends ReadonlyArray<DeepReadonly7045<T>> {}

type DeepReadonlyObject7045<T> = {
  readonly [P in keyof T]: DeepReadonly7045<T[P]>;
};

type UnionToIntersection7045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7045<T> = UnionToIntersection7045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7045<T extends unknown[], V> = [...T, V];

type TuplifyUnion7045<T, L = LastOf7045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7045<TuplifyUnion7045<Exclude<T, L>>, L>;

type DeepPartial7045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7045<T[P]> }
  : T;

type Paths7045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7045<K, Paths7045<T[K], Prev7045[D]>> : never }[keyof T]
  : never;

type Prev7045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7045 {
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

type ConfigPaths7045 = Paths7045<NestedConfig7045>;

interface HeavyProps7045 {
  config: DeepPartial7045<NestedConfig7045>;
  path?: ConfigPaths7045;
}

const HeavyComponent7045 = memo(function HeavyComponent7045({ config }: HeavyProps7045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7045.displayName = 'HeavyComponent7045';
export default HeavyComponent7045;

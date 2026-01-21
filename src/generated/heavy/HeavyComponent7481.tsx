'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7481<T> = T extends (infer U)[]
  ? DeepReadonlyArray7481<U>
  : T extends object
  ? DeepReadonlyObject7481<T>
  : T;

interface DeepReadonlyArray7481<T> extends ReadonlyArray<DeepReadonly7481<T>> {}

type DeepReadonlyObject7481<T> = {
  readonly [P in keyof T]: DeepReadonly7481<T[P]>;
};

type UnionToIntersection7481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7481<T> = UnionToIntersection7481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7481<T extends unknown[], V> = [...T, V];

type TuplifyUnion7481<T, L = LastOf7481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7481<TuplifyUnion7481<Exclude<T, L>>, L>;

type DeepPartial7481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7481<T[P]> }
  : T;

type Paths7481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7481<K, Paths7481<T[K], Prev7481[D]>> : never }[keyof T]
  : never;

type Prev7481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7481 {
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

type ConfigPaths7481 = Paths7481<NestedConfig7481>;

interface HeavyProps7481 {
  config: DeepPartial7481<NestedConfig7481>;
  path?: ConfigPaths7481;
}

const HeavyComponent7481 = memo(function HeavyComponent7481({ config }: HeavyProps7481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7481.displayName = 'HeavyComponent7481';
export default HeavyComponent7481;

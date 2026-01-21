'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7177<T> = T extends (infer U)[]
  ? DeepReadonlyArray7177<U>
  : T extends object
  ? DeepReadonlyObject7177<T>
  : T;

interface DeepReadonlyArray7177<T> extends ReadonlyArray<DeepReadonly7177<T>> {}

type DeepReadonlyObject7177<T> = {
  readonly [P in keyof T]: DeepReadonly7177<T[P]>;
};

type UnionToIntersection7177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7177<T> = UnionToIntersection7177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7177<T extends unknown[], V> = [...T, V];

type TuplifyUnion7177<T, L = LastOf7177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7177<TuplifyUnion7177<Exclude<T, L>>, L>;

type DeepPartial7177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7177<T[P]> }
  : T;

type Paths7177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7177<K, Paths7177<T[K], Prev7177[D]>> : never }[keyof T]
  : never;

type Prev7177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7177 {
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

type ConfigPaths7177 = Paths7177<NestedConfig7177>;

interface HeavyProps7177 {
  config: DeepPartial7177<NestedConfig7177>;
  path?: ConfigPaths7177;
}

const HeavyComponent7177 = memo(function HeavyComponent7177({ config }: HeavyProps7177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7177.displayName = 'HeavyComponent7177';
export default HeavyComponent7177;

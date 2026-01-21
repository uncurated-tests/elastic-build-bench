'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7800<T> = T extends (infer U)[]
  ? DeepReadonlyArray7800<U>
  : T extends object
  ? DeepReadonlyObject7800<T>
  : T;

interface DeepReadonlyArray7800<T> extends ReadonlyArray<DeepReadonly7800<T>> {}

type DeepReadonlyObject7800<T> = {
  readonly [P in keyof T]: DeepReadonly7800<T[P]>;
};

type UnionToIntersection7800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7800<T> = UnionToIntersection7800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7800<T extends unknown[], V> = [...T, V];

type TuplifyUnion7800<T, L = LastOf7800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7800<TuplifyUnion7800<Exclude<T, L>>, L>;

type DeepPartial7800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7800<T[P]> }
  : T;

type Paths7800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7800<K, Paths7800<T[K], Prev7800[D]>> : never }[keyof T]
  : never;

type Prev7800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7800 {
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

type ConfigPaths7800 = Paths7800<NestedConfig7800>;

interface HeavyProps7800 {
  config: DeepPartial7800<NestedConfig7800>;
  path?: ConfigPaths7800;
}

const HeavyComponent7800 = memo(function HeavyComponent7800({ config }: HeavyProps7800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7800.displayName = 'HeavyComponent7800';
export default HeavyComponent7800;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7920<T> = T extends (infer U)[]
  ? DeepReadonlyArray7920<U>
  : T extends object
  ? DeepReadonlyObject7920<T>
  : T;

interface DeepReadonlyArray7920<T> extends ReadonlyArray<DeepReadonly7920<T>> {}

type DeepReadonlyObject7920<T> = {
  readonly [P in keyof T]: DeepReadonly7920<T[P]>;
};

type UnionToIntersection7920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7920<T> = UnionToIntersection7920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7920<T extends unknown[], V> = [...T, V];

type TuplifyUnion7920<T, L = LastOf7920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7920<TuplifyUnion7920<Exclude<T, L>>, L>;

type DeepPartial7920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7920<T[P]> }
  : T;

type Paths7920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7920<K, Paths7920<T[K], Prev7920[D]>> : never }[keyof T]
  : never;

type Prev7920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7920 {
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

type ConfigPaths7920 = Paths7920<NestedConfig7920>;

interface HeavyProps7920 {
  config: DeepPartial7920<NestedConfig7920>;
  path?: ConfigPaths7920;
}

const HeavyComponent7920 = memo(function HeavyComponent7920({ config }: HeavyProps7920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7920.displayName = 'HeavyComponent7920';
export default HeavyComponent7920;

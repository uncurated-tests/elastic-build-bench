'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7465<T> = T extends (infer U)[]
  ? DeepReadonlyArray7465<U>
  : T extends object
  ? DeepReadonlyObject7465<T>
  : T;

interface DeepReadonlyArray7465<T> extends ReadonlyArray<DeepReadonly7465<T>> {}

type DeepReadonlyObject7465<T> = {
  readonly [P in keyof T]: DeepReadonly7465<T[P]>;
};

type UnionToIntersection7465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7465<T> = UnionToIntersection7465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7465<T extends unknown[], V> = [...T, V];

type TuplifyUnion7465<T, L = LastOf7465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7465<TuplifyUnion7465<Exclude<T, L>>, L>;

type DeepPartial7465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7465<T[P]> }
  : T;

type Paths7465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7465<K, Paths7465<T[K], Prev7465[D]>> : never }[keyof T]
  : never;

type Prev7465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7465 {
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

type ConfigPaths7465 = Paths7465<NestedConfig7465>;

interface HeavyProps7465 {
  config: DeepPartial7465<NestedConfig7465>;
  path?: ConfigPaths7465;
}

const HeavyComponent7465 = memo(function HeavyComponent7465({ config }: HeavyProps7465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7465.displayName = 'HeavyComponent7465';
export default HeavyComponent7465;

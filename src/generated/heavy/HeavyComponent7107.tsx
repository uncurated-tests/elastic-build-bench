'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7107<T> = T extends (infer U)[]
  ? DeepReadonlyArray7107<U>
  : T extends object
  ? DeepReadonlyObject7107<T>
  : T;

interface DeepReadonlyArray7107<T> extends ReadonlyArray<DeepReadonly7107<T>> {}

type DeepReadonlyObject7107<T> = {
  readonly [P in keyof T]: DeepReadonly7107<T[P]>;
};

type UnionToIntersection7107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7107<T> = UnionToIntersection7107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7107<T extends unknown[], V> = [...T, V];

type TuplifyUnion7107<T, L = LastOf7107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7107<TuplifyUnion7107<Exclude<T, L>>, L>;

type DeepPartial7107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7107<T[P]> }
  : T;

type Paths7107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7107<K, Paths7107<T[K], Prev7107[D]>> : never }[keyof T]
  : never;

type Prev7107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7107 {
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

type ConfigPaths7107 = Paths7107<NestedConfig7107>;

interface HeavyProps7107 {
  config: DeepPartial7107<NestedConfig7107>;
  path?: ConfigPaths7107;
}

const HeavyComponent7107 = memo(function HeavyComponent7107({ config }: HeavyProps7107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7107.displayName = 'HeavyComponent7107';
export default HeavyComponent7107;

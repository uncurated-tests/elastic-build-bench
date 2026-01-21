'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7133<T> = T extends (infer U)[]
  ? DeepReadonlyArray7133<U>
  : T extends object
  ? DeepReadonlyObject7133<T>
  : T;

interface DeepReadonlyArray7133<T> extends ReadonlyArray<DeepReadonly7133<T>> {}

type DeepReadonlyObject7133<T> = {
  readonly [P in keyof T]: DeepReadonly7133<T[P]>;
};

type UnionToIntersection7133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7133<T> = UnionToIntersection7133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7133<T extends unknown[], V> = [...T, V];

type TuplifyUnion7133<T, L = LastOf7133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7133<TuplifyUnion7133<Exclude<T, L>>, L>;

type DeepPartial7133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7133<T[P]> }
  : T;

type Paths7133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7133<K, Paths7133<T[K], Prev7133[D]>> : never }[keyof T]
  : never;

type Prev7133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7133 {
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

type ConfigPaths7133 = Paths7133<NestedConfig7133>;

interface HeavyProps7133 {
  config: DeepPartial7133<NestedConfig7133>;
  path?: ConfigPaths7133;
}

const HeavyComponent7133 = memo(function HeavyComponent7133({ config }: HeavyProps7133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7133.displayName = 'HeavyComponent7133';
export default HeavyComponent7133;

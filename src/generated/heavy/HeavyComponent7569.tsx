'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7569<T> = T extends (infer U)[]
  ? DeepReadonlyArray7569<U>
  : T extends object
  ? DeepReadonlyObject7569<T>
  : T;

interface DeepReadonlyArray7569<T> extends ReadonlyArray<DeepReadonly7569<T>> {}

type DeepReadonlyObject7569<T> = {
  readonly [P in keyof T]: DeepReadonly7569<T[P]>;
};

type UnionToIntersection7569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7569<T> = UnionToIntersection7569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7569<T extends unknown[], V> = [...T, V];

type TuplifyUnion7569<T, L = LastOf7569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7569<TuplifyUnion7569<Exclude<T, L>>, L>;

type DeepPartial7569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7569<T[P]> }
  : T;

type Paths7569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7569<K, Paths7569<T[K], Prev7569[D]>> : never }[keyof T]
  : never;

type Prev7569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7569 {
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

type ConfigPaths7569 = Paths7569<NestedConfig7569>;

interface HeavyProps7569 {
  config: DeepPartial7569<NestedConfig7569>;
  path?: ConfigPaths7569;
}

const HeavyComponent7569 = memo(function HeavyComponent7569({ config }: HeavyProps7569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7569.displayName = 'HeavyComponent7569';
export default HeavyComponent7569;

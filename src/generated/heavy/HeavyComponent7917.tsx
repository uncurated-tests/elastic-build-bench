'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7917<T> = T extends (infer U)[]
  ? DeepReadonlyArray7917<U>
  : T extends object
  ? DeepReadonlyObject7917<T>
  : T;

interface DeepReadonlyArray7917<T> extends ReadonlyArray<DeepReadonly7917<T>> {}

type DeepReadonlyObject7917<T> = {
  readonly [P in keyof T]: DeepReadonly7917<T[P]>;
};

type UnionToIntersection7917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7917<T> = UnionToIntersection7917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7917<T extends unknown[], V> = [...T, V];

type TuplifyUnion7917<T, L = LastOf7917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7917<TuplifyUnion7917<Exclude<T, L>>, L>;

type DeepPartial7917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7917<T[P]> }
  : T;

type Paths7917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7917<K, Paths7917<T[K], Prev7917[D]>> : never }[keyof T]
  : never;

type Prev7917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7917 {
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

type ConfigPaths7917 = Paths7917<NestedConfig7917>;

interface HeavyProps7917 {
  config: DeepPartial7917<NestedConfig7917>;
  path?: ConfigPaths7917;
}

const HeavyComponent7917 = memo(function HeavyComponent7917({ config }: HeavyProps7917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7917.displayName = 'HeavyComponent7917';
export default HeavyComponent7917;

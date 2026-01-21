'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7827<T> = T extends (infer U)[]
  ? DeepReadonlyArray7827<U>
  : T extends object
  ? DeepReadonlyObject7827<T>
  : T;

interface DeepReadonlyArray7827<T> extends ReadonlyArray<DeepReadonly7827<T>> {}

type DeepReadonlyObject7827<T> = {
  readonly [P in keyof T]: DeepReadonly7827<T[P]>;
};

type UnionToIntersection7827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7827<T> = UnionToIntersection7827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7827<T extends unknown[], V> = [...T, V];

type TuplifyUnion7827<T, L = LastOf7827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7827<TuplifyUnion7827<Exclude<T, L>>, L>;

type DeepPartial7827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7827<T[P]> }
  : T;

type Paths7827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7827<K, Paths7827<T[K], Prev7827[D]>> : never }[keyof T]
  : never;

type Prev7827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7827 {
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

type ConfigPaths7827 = Paths7827<NestedConfig7827>;

interface HeavyProps7827 {
  config: DeepPartial7827<NestedConfig7827>;
  path?: ConfigPaths7827;
}

const HeavyComponent7827 = memo(function HeavyComponent7827({ config }: HeavyProps7827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7827.displayName = 'HeavyComponent7827';
export default HeavyComponent7827;

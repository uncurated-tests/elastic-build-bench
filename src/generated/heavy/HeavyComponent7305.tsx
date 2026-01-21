'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7305<T> = T extends (infer U)[]
  ? DeepReadonlyArray7305<U>
  : T extends object
  ? DeepReadonlyObject7305<T>
  : T;

interface DeepReadonlyArray7305<T> extends ReadonlyArray<DeepReadonly7305<T>> {}

type DeepReadonlyObject7305<T> = {
  readonly [P in keyof T]: DeepReadonly7305<T[P]>;
};

type UnionToIntersection7305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7305<T> = UnionToIntersection7305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7305<T extends unknown[], V> = [...T, V];

type TuplifyUnion7305<T, L = LastOf7305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7305<TuplifyUnion7305<Exclude<T, L>>, L>;

type DeepPartial7305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7305<T[P]> }
  : T;

type Paths7305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7305<K, Paths7305<T[K], Prev7305[D]>> : never }[keyof T]
  : never;

type Prev7305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7305 {
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

type ConfigPaths7305 = Paths7305<NestedConfig7305>;

interface HeavyProps7305 {
  config: DeepPartial7305<NestedConfig7305>;
  path?: ConfigPaths7305;
}

const HeavyComponent7305 = memo(function HeavyComponent7305({ config }: HeavyProps7305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7305.displayName = 'HeavyComponent7305';
export default HeavyComponent7305;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7313<T> = T extends (infer U)[]
  ? DeepReadonlyArray7313<U>
  : T extends object
  ? DeepReadonlyObject7313<T>
  : T;

interface DeepReadonlyArray7313<T> extends ReadonlyArray<DeepReadonly7313<T>> {}

type DeepReadonlyObject7313<T> = {
  readonly [P in keyof T]: DeepReadonly7313<T[P]>;
};

type UnionToIntersection7313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7313<T> = UnionToIntersection7313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7313<T extends unknown[], V> = [...T, V];

type TuplifyUnion7313<T, L = LastOf7313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7313<TuplifyUnion7313<Exclude<T, L>>, L>;

type DeepPartial7313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7313<T[P]> }
  : T;

type Paths7313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7313<K, Paths7313<T[K], Prev7313[D]>> : never }[keyof T]
  : never;

type Prev7313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7313 {
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

type ConfigPaths7313 = Paths7313<NestedConfig7313>;

interface HeavyProps7313 {
  config: DeepPartial7313<NestedConfig7313>;
  path?: ConfigPaths7313;
}

const HeavyComponent7313 = memo(function HeavyComponent7313({ config }: HeavyProps7313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7313.displayName = 'HeavyComponent7313';
export default HeavyComponent7313;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7409<T> = T extends (infer U)[]
  ? DeepReadonlyArray7409<U>
  : T extends object
  ? DeepReadonlyObject7409<T>
  : T;

interface DeepReadonlyArray7409<T> extends ReadonlyArray<DeepReadonly7409<T>> {}

type DeepReadonlyObject7409<T> = {
  readonly [P in keyof T]: DeepReadonly7409<T[P]>;
};

type UnionToIntersection7409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7409<T> = UnionToIntersection7409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7409<T extends unknown[], V> = [...T, V];

type TuplifyUnion7409<T, L = LastOf7409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7409<TuplifyUnion7409<Exclude<T, L>>, L>;

type DeepPartial7409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7409<T[P]> }
  : T;

type Paths7409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7409<K, Paths7409<T[K], Prev7409[D]>> : never }[keyof T]
  : never;

type Prev7409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7409 {
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

type ConfigPaths7409 = Paths7409<NestedConfig7409>;

interface HeavyProps7409 {
  config: DeepPartial7409<NestedConfig7409>;
  path?: ConfigPaths7409;
}

const HeavyComponent7409 = memo(function HeavyComponent7409({ config }: HeavyProps7409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7409.displayName = 'HeavyComponent7409';
export default HeavyComponent7409;

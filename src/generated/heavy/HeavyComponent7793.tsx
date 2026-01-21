'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7793<T> = T extends (infer U)[]
  ? DeepReadonlyArray7793<U>
  : T extends object
  ? DeepReadonlyObject7793<T>
  : T;

interface DeepReadonlyArray7793<T> extends ReadonlyArray<DeepReadonly7793<T>> {}

type DeepReadonlyObject7793<T> = {
  readonly [P in keyof T]: DeepReadonly7793<T[P]>;
};

type UnionToIntersection7793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7793<T> = UnionToIntersection7793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7793<T extends unknown[], V> = [...T, V];

type TuplifyUnion7793<T, L = LastOf7793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7793<TuplifyUnion7793<Exclude<T, L>>, L>;

type DeepPartial7793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7793<T[P]> }
  : T;

type Paths7793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7793<K, Paths7793<T[K], Prev7793[D]>> : never }[keyof T]
  : never;

type Prev7793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7793 {
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

type ConfigPaths7793 = Paths7793<NestedConfig7793>;

interface HeavyProps7793 {
  config: DeepPartial7793<NestedConfig7793>;
  path?: ConfigPaths7793;
}

const HeavyComponent7793 = memo(function HeavyComponent7793({ config }: HeavyProps7793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7793.displayName = 'HeavyComponent7793';
export default HeavyComponent7793;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7267<T> = T extends (infer U)[]
  ? DeepReadonlyArray7267<U>
  : T extends object
  ? DeepReadonlyObject7267<T>
  : T;

interface DeepReadonlyArray7267<T> extends ReadonlyArray<DeepReadonly7267<T>> {}

type DeepReadonlyObject7267<T> = {
  readonly [P in keyof T]: DeepReadonly7267<T[P]>;
};

type UnionToIntersection7267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7267<T> = UnionToIntersection7267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7267<T extends unknown[], V> = [...T, V];

type TuplifyUnion7267<T, L = LastOf7267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7267<TuplifyUnion7267<Exclude<T, L>>, L>;

type DeepPartial7267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7267<T[P]> }
  : T;

type Paths7267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7267<K, Paths7267<T[K], Prev7267[D]>> : never }[keyof T]
  : never;

type Prev7267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7267 {
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

type ConfigPaths7267 = Paths7267<NestedConfig7267>;

interface HeavyProps7267 {
  config: DeepPartial7267<NestedConfig7267>;
  path?: ConfigPaths7267;
}

const HeavyComponent7267 = memo(function HeavyComponent7267({ config }: HeavyProps7267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7267.displayName = 'HeavyComponent7267';
export default HeavyComponent7267;

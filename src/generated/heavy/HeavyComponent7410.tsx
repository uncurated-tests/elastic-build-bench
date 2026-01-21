'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7410<T> = T extends (infer U)[]
  ? DeepReadonlyArray7410<U>
  : T extends object
  ? DeepReadonlyObject7410<T>
  : T;

interface DeepReadonlyArray7410<T> extends ReadonlyArray<DeepReadonly7410<T>> {}

type DeepReadonlyObject7410<T> = {
  readonly [P in keyof T]: DeepReadonly7410<T[P]>;
};

type UnionToIntersection7410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7410<T> = UnionToIntersection7410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7410<T extends unknown[], V> = [...T, V];

type TuplifyUnion7410<T, L = LastOf7410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7410<TuplifyUnion7410<Exclude<T, L>>, L>;

type DeepPartial7410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7410<T[P]> }
  : T;

type Paths7410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7410<K, Paths7410<T[K], Prev7410[D]>> : never }[keyof T]
  : never;

type Prev7410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7410 {
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

type ConfigPaths7410 = Paths7410<NestedConfig7410>;

interface HeavyProps7410 {
  config: DeepPartial7410<NestedConfig7410>;
  path?: ConfigPaths7410;
}

const HeavyComponent7410 = memo(function HeavyComponent7410({ config }: HeavyProps7410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7410.displayName = 'HeavyComponent7410';
export default HeavyComponent7410;

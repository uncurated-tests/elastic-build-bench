'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7995<T> = T extends (infer U)[]
  ? DeepReadonlyArray7995<U>
  : T extends object
  ? DeepReadonlyObject7995<T>
  : T;

interface DeepReadonlyArray7995<T> extends ReadonlyArray<DeepReadonly7995<T>> {}

type DeepReadonlyObject7995<T> = {
  readonly [P in keyof T]: DeepReadonly7995<T[P]>;
};

type UnionToIntersection7995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7995<T> = UnionToIntersection7995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7995<T extends unknown[], V> = [...T, V];

type TuplifyUnion7995<T, L = LastOf7995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7995<TuplifyUnion7995<Exclude<T, L>>, L>;

type DeepPartial7995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7995<T[P]> }
  : T;

type Paths7995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7995<K, Paths7995<T[K], Prev7995[D]>> : never }[keyof T]
  : never;

type Prev7995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7995 {
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

type ConfigPaths7995 = Paths7995<NestedConfig7995>;

interface HeavyProps7995 {
  config: DeepPartial7995<NestedConfig7995>;
  path?: ConfigPaths7995;
}

const HeavyComponent7995 = memo(function HeavyComponent7995({ config }: HeavyProps7995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7995.displayName = 'HeavyComponent7995';
export default HeavyComponent7995;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7956<T> = T extends (infer U)[]
  ? DeepReadonlyArray7956<U>
  : T extends object
  ? DeepReadonlyObject7956<T>
  : T;

interface DeepReadonlyArray7956<T> extends ReadonlyArray<DeepReadonly7956<T>> {}

type DeepReadonlyObject7956<T> = {
  readonly [P in keyof T]: DeepReadonly7956<T[P]>;
};

type UnionToIntersection7956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7956<T> = UnionToIntersection7956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7956<T extends unknown[], V> = [...T, V];

type TuplifyUnion7956<T, L = LastOf7956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7956<TuplifyUnion7956<Exclude<T, L>>, L>;

type DeepPartial7956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7956<T[P]> }
  : T;

type Paths7956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7956<K, Paths7956<T[K], Prev7956[D]>> : never }[keyof T]
  : never;

type Prev7956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7956 {
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

type ConfigPaths7956 = Paths7956<NestedConfig7956>;

interface HeavyProps7956 {
  config: DeepPartial7956<NestedConfig7956>;
  path?: ConfigPaths7956;
}

const HeavyComponent7956 = memo(function HeavyComponent7956({ config }: HeavyProps7956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7956.displayName = 'HeavyComponent7956';
export default HeavyComponent7956;

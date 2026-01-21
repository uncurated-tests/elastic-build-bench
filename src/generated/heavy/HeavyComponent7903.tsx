'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7903<T> = T extends (infer U)[]
  ? DeepReadonlyArray7903<U>
  : T extends object
  ? DeepReadonlyObject7903<T>
  : T;

interface DeepReadonlyArray7903<T> extends ReadonlyArray<DeepReadonly7903<T>> {}

type DeepReadonlyObject7903<T> = {
  readonly [P in keyof T]: DeepReadonly7903<T[P]>;
};

type UnionToIntersection7903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7903<T> = UnionToIntersection7903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7903<T extends unknown[], V> = [...T, V];

type TuplifyUnion7903<T, L = LastOf7903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7903<TuplifyUnion7903<Exclude<T, L>>, L>;

type DeepPartial7903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7903<T[P]> }
  : T;

type Paths7903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7903<K, Paths7903<T[K], Prev7903[D]>> : never }[keyof T]
  : never;

type Prev7903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7903 {
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

type ConfigPaths7903 = Paths7903<NestedConfig7903>;

interface HeavyProps7903 {
  config: DeepPartial7903<NestedConfig7903>;
  path?: ConfigPaths7903;
}

const HeavyComponent7903 = memo(function HeavyComponent7903({ config }: HeavyProps7903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7903.displayName = 'HeavyComponent7903';
export default HeavyComponent7903;

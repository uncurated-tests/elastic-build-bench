'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7780<T> = T extends (infer U)[]
  ? DeepReadonlyArray7780<U>
  : T extends object
  ? DeepReadonlyObject7780<T>
  : T;

interface DeepReadonlyArray7780<T> extends ReadonlyArray<DeepReadonly7780<T>> {}

type DeepReadonlyObject7780<T> = {
  readonly [P in keyof T]: DeepReadonly7780<T[P]>;
};

type UnionToIntersection7780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7780<T> = UnionToIntersection7780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7780<T extends unknown[], V> = [...T, V];

type TuplifyUnion7780<T, L = LastOf7780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7780<TuplifyUnion7780<Exclude<T, L>>, L>;

type DeepPartial7780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7780<T[P]> }
  : T;

type Paths7780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7780<K, Paths7780<T[K], Prev7780[D]>> : never }[keyof T]
  : never;

type Prev7780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7780 {
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

type ConfigPaths7780 = Paths7780<NestedConfig7780>;

interface HeavyProps7780 {
  config: DeepPartial7780<NestedConfig7780>;
  path?: ConfigPaths7780;
}

const HeavyComponent7780 = memo(function HeavyComponent7780({ config }: HeavyProps7780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7780.displayName = 'HeavyComponent7780';
export default HeavyComponent7780;

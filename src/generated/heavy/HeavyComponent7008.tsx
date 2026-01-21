'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7008<T> = T extends (infer U)[]
  ? DeepReadonlyArray7008<U>
  : T extends object
  ? DeepReadonlyObject7008<T>
  : T;

interface DeepReadonlyArray7008<T> extends ReadonlyArray<DeepReadonly7008<T>> {}

type DeepReadonlyObject7008<T> = {
  readonly [P in keyof T]: DeepReadonly7008<T[P]>;
};

type UnionToIntersection7008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7008<T> = UnionToIntersection7008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7008<T extends unknown[], V> = [...T, V];

type TuplifyUnion7008<T, L = LastOf7008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7008<TuplifyUnion7008<Exclude<T, L>>, L>;

type DeepPartial7008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7008<T[P]> }
  : T;

type Paths7008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7008<K, Paths7008<T[K], Prev7008[D]>> : never }[keyof T]
  : never;

type Prev7008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7008 {
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

type ConfigPaths7008 = Paths7008<NestedConfig7008>;

interface HeavyProps7008 {
  config: DeepPartial7008<NestedConfig7008>;
  path?: ConfigPaths7008;
}

const HeavyComponent7008 = memo(function HeavyComponent7008({ config }: HeavyProps7008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7008.displayName = 'HeavyComponent7008';
export default HeavyComponent7008;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7809<T> = T extends (infer U)[]
  ? DeepReadonlyArray7809<U>
  : T extends object
  ? DeepReadonlyObject7809<T>
  : T;

interface DeepReadonlyArray7809<T> extends ReadonlyArray<DeepReadonly7809<T>> {}

type DeepReadonlyObject7809<T> = {
  readonly [P in keyof T]: DeepReadonly7809<T[P]>;
};

type UnionToIntersection7809<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7809<T> = UnionToIntersection7809<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7809<T extends unknown[], V> = [...T, V];

type TuplifyUnion7809<T, L = LastOf7809<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7809<TuplifyUnion7809<Exclude<T, L>>, L>;

type DeepPartial7809<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7809<T[P]> }
  : T;

type Paths7809<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7809<K, Paths7809<T[K], Prev7809[D]>> : never }[keyof T]
  : never;

type Prev7809 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7809<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7809 {
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

type ConfigPaths7809 = Paths7809<NestedConfig7809>;

interface HeavyProps7809 {
  config: DeepPartial7809<NestedConfig7809>;
  path?: ConfigPaths7809;
}

const HeavyComponent7809 = memo(function HeavyComponent7809({ config }: HeavyProps7809) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7809) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7809 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7809: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7809.displayName = 'HeavyComponent7809';
export default HeavyComponent7809;

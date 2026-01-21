'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7845<T> = T extends (infer U)[]
  ? DeepReadonlyArray7845<U>
  : T extends object
  ? DeepReadonlyObject7845<T>
  : T;

interface DeepReadonlyArray7845<T> extends ReadonlyArray<DeepReadonly7845<T>> {}

type DeepReadonlyObject7845<T> = {
  readonly [P in keyof T]: DeepReadonly7845<T[P]>;
};

type UnionToIntersection7845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7845<T> = UnionToIntersection7845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7845<T extends unknown[], V> = [...T, V];

type TuplifyUnion7845<T, L = LastOf7845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7845<TuplifyUnion7845<Exclude<T, L>>, L>;

type DeepPartial7845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7845<T[P]> }
  : T;

type Paths7845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7845<K, Paths7845<T[K], Prev7845[D]>> : never }[keyof T]
  : never;

type Prev7845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7845 {
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

type ConfigPaths7845 = Paths7845<NestedConfig7845>;

interface HeavyProps7845 {
  config: DeepPartial7845<NestedConfig7845>;
  path?: ConfigPaths7845;
}

const HeavyComponent7845 = memo(function HeavyComponent7845({ config }: HeavyProps7845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7845.displayName = 'HeavyComponent7845';
export default HeavyComponent7845;

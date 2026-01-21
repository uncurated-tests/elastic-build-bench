'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7009<T> = T extends (infer U)[]
  ? DeepReadonlyArray7009<U>
  : T extends object
  ? DeepReadonlyObject7009<T>
  : T;

interface DeepReadonlyArray7009<T> extends ReadonlyArray<DeepReadonly7009<T>> {}

type DeepReadonlyObject7009<T> = {
  readonly [P in keyof T]: DeepReadonly7009<T[P]>;
};

type UnionToIntersection7009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7009<T> = UnionToIntersection7009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7009<T extends unknown[], V> = [...T, V];

type TuplifyUnion7009<T, L = LastOf7009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7009<TuplifyUnion7009<Exclude<T, L>>, L>;

type DeepPartial7009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7009<T[P]> }
  : T;

type Paths7009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7009<K, Paths7009<T[K], Prev7009[D]>> : never }[keyof T]
  : never;

type Prev7009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7009 {
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

type ConfigPaths7009 = Paths7009<NestedConfig7009>;

interface HeavyProps7009 {
  config: DeepPartial7009<NestedConfig7009>;
  path?: ConfigPaths7009;
}

const HeavyComponent7009 = memo(function HeavyComponent7009({ config }: HeavyProps7009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7009.displayName = 'HeavyComponent7009';
export default HeavyComponent7009;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7128<T> = T extends (infer U)[]
  ? DeepReadonlyArray7128<U>
  : T extends object
  ? DeepReadonlyObject7128<T>
  : T;

interface DeepReadonlyArray7128<T> extends ReadonlyArray<DeepReadonly7128<T>> {}

type DeepReadonlyObject7128<T> = {
  readonly [P in keyof T]: DeepReadonly7128<T[P]>;
};

type UnionToIntersection7128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7128<T> = UnionToIntersection7128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7128<T extends unknown[], V> = [...T, V];

type TuplifyUnion7128<T, L = LastOf7128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7128<TuplifyUnion7128<Exclude<T, L>>, L>;

type DeepPartial7128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7128<T[P]> }
  : T;

type Paths7128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7128<K, Paths7128<T[K], Prev7128[D]>> : never }[keyof T]
  : never;

type Prev7128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7128 {
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

type ConfigPaths7128 = Paths7128<NestedConfig7128>;

interface HeavyProps7128 {
  config: DeepPartial7128<NestedConfig7128>;
  path?: ConfigPaths7128;
}

const HeavyComponent7128 = memo(function HeavyComponent7128({ config }: HeavyProps7128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7128.displayName = 'HeavyComponent7128';
export default HeavyComponent7128;

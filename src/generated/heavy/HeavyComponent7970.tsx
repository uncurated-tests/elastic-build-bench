'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7970<T> = T extends (infer U)[]
  ? DeepReadonlyArray7970<U>
  : T extends object
  ? DeepReadonlyObject7970<T>
  : T;

interface DeepReadonlyArray7970<T> extends ReadonlyArray<DeepReadonly7970<T>> {}

type DeepReadonlyObject7970<T> = {
  readonly [P in keyof T]: DeepReadonly7970<T[P]>;
};

type UnionToIntersection7970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7970<T> = UnionToIntersection7970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7970<T extends unknown[], V> = [...T, V];

type TuplifyUnion7970<T, L = LastOf7970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7970<TuplifyUnion7970<Exclude<T, L>>, L>;

type DeepPartial7970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7970<T[P]> }
  : T;

type Paths7970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7970<K, Paths7970<T[K], Prev7970[D]>> : never }[keyof T]
  : never;

type Prev7970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7970 {
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

type ConfigPaths7970 = Paths7970<NestedConfig7970>;

interface HeavyProps7970 {
  config: DeepPartial7970<NestedConfig7970>;
  path?: ConfigPaths7970;
}

const HeavyComponent7970 = memo(function HeavyComponent7970({ config }: HeavyProps7970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7970.displayName = 'HeavyComponent7970';
export default HeavyComponent7970;

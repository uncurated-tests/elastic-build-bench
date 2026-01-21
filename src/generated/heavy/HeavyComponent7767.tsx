'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7767<T> = T extends (infer U)[]
  ? DeepReadonlyArray7767<U>
  : T extends object
  ? DeepReadonlyObject7767<T>
  : T;

interface DeepReadonlyArray7767<T> extends ReadonlyArray<DeepReadonly7767<T>> {}

type DeepReadonlyObject7767<T> = {
  readonly [P in keyof T]: DeepReadonly7767<T[P]>;
};

type UnionToIntersection7767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7767<T> = UnionToIntersection7767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7767<T extends unknown[], V> = [...T, V];

type TuplifyUnion7767<T, L = LastOf7767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7767<TuplifyUnion7767<Exclude<T, L>>, L>;

type DeepPartial7767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7767<T[P]> }
  : T;

type Paths7767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7767<K, Paths7767<T[K], Prev7767[D]>> : never }[keyof T]
  : never;

type Prev7767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7767 {
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

type ConfigPaths7767 = Paths7767<NestedConfig7767>;

interface HeavyProps7767 {
  config: DeepPartial7767<NestedConfig7767>;
  path?: ConfigPaths7767;
}

const HeavyComponent7767 = memo(function HeavyComponent7767({ config }: HeavyProps7767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7767.displayName = 'HeavyComponent7767';
export default HeavyComponent7767;

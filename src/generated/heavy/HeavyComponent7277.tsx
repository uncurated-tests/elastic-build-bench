'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7277<T> = T extends (infer U)[]
  ? DeepReadonlyArray7277<U>
  : T extends object
  ? DeepReadonlyObject7277<T>
  : T;

interface DeepReadonlyArray7277<T> extends ReadonlyArray<DeepReadonly7277<T>> {}

type DeepReadonlyObject7277<T> = {
  readonly [P in keyof T]: DeepReadonly7277<T[P]>;
};

type UnionToIntersection7277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7277<T> = UnionToIntersection7277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7277<T extends unknown[], V> = [...T, V];

type TuplifyUnion7277<T, L = LastOf7277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7277<TuplifyUnion7277<Exclude<T, L>>, L>;

type DeepPartial7277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7277<T[P]> }
  : T;

type Paths7277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7277<K, Paths7277<T[K], Prev7277[D]>> : never }[keyof T]
  : never;

type Prev7277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7277 {
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

type ConfigPaths7277 = Paths7277<NestedConfig7277>;

interface HeavyProps7277 {
  config: DeepPartial7277<NestedConfig7277>;
  path?: ConfigPaths7277;
}

const HeavyComponent7277 = memo(function HeavyComponent7277({ config }: HeavyProps7277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7277.displayName = 'HeavyComponent7277';
export default HeavyComponent7277;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7381<T> = T extends (infer U)[]
  ? DeepReadonlyArray7381<U>
  : T extends object
  ? DeepReadonlyObject7381<T>
  : T;

interface DeepReadonlyArray7381<T> extends ReadonlyArray<DeepReadonly7381<T>> {}

type DeepReadonlyObject7381<T> = {
  readonly [P in keyof T]: DeepReadonly7381<T[P]>;
};

type UnionToIntersection7381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7381<T> = UnionToIntersection7381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7381<T extends unknown[], V> = [...T, V];

type TuplifyUnion7381<T, L = LastOf7381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7381<TuplifyUnion7381<Exclude<T, L>>, L>;

type DeepPartial7381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7381<T[P]> }
  : T;

type Paths7381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7381<K, Paths7381<T[K], Prev7381[D]>> : never }[keyof T]
  : never;

type Prev7381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7381 {
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

type ConfigPaths7381 = Paths7381<NestedConfig7381>;

interface HeavyProps7381 {
  config: DeepPartial7381<NestedConfig7381>;
  path?: ConfigPaths7381;
}

const HeavyComponent7381 = memo(function HeavyComponent7381({ config }: HeavyProps7381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7381.displayName = 'HeavyComponent7381';
export default HeavyComponent7381;

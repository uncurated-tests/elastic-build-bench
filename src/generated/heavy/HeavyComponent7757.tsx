'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7757<T> = T extends (infer U)[]
  ? DeepReadonlyArray7757<U>
  : T extends object
  ? DeepReadonlyObject7757<T>
  : T;

interface DeepReadonlyArray7757<T> extends ReadonlyArray<DeepReadonly7757<T>> {}

type DeepReadonlyObject7757<T> = {
  readonly [P in keyof T]: DeepReadonly7757<T[P]>;
};

type UnionToIntersection7757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7757<T> = UnionToIntersection7757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7757<T extends unknown[], V> = [...T, V];

type TuplifyUnion7757<T, L = LastOf7757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7757<TuplifyUnion7757<Exclude<T, L>>, L>;

type DeepPartial7757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7757<T[P]> }
  : T;

type Paths7757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7757<K, Paths7757<T[K], Prev7757[D]>> : never }[keyof T]
  : never;

type Prev7757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7757 {
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

type ConfigPaths7757 = Paths7757<NestedConfig7757>;

interface HeavyProps7757 {
  config: DeepPartial7757<NestedConfig7757>;
  path?: ConfigPaths7757;
}

const HeavyComponent7757 = memo(function HeavyComponent7757({ config }: HeavyProps7757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7757.displayName = 'HeavyComponent7757';
export default HeavyComponent7757;

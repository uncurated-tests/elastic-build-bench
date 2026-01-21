'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7130<T> = T extends (infer U)[]
  ? DeepReadonlyArray7130<U>
  : T extends object
  ? DeepReadonlyObject7130<T>
  : T;

interface DeepReadonlyArray7130<T> extends ReadonlyArray<DeepReadonly7130<T>> {}

type DeepReadonlyObject7130<T> = {
  readonly [P in keyof T]: DeepReadonly7130<T[P]>;
};

type UnionToIntersection7130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7130<T> = UnionToIntersection7130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7130<T extends unknown[], V> = [...T, V];

type TuplifyUnion7130<T, L = LastOf7130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7130<TuplifyUnion7130<Exclude<T, L>>, L>;

type DeepPartial7130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7130<T[P]> }
  : T;

type Paths7130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7130<K, Paths7130<T[K], Prev7130[D]>> : never }[keyof T]
  : never;

type Prev7130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7130 {
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

type ConfigPaths7130 = Paths7130<NestedConfig7130>;

interface HeavyProps7130 {
  config: DeepPartial7130<NestedConfig7130>;
  path?: ConfigPaths7130;
}

const HeavyComponent7130 = memo(function HeavyComponent7130({ config }: HeavyProps7130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7130.displayName = 'HeavyComponent7130';
export default HeavyComponent7130;

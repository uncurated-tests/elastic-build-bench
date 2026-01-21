'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7171<T> = T extends (infer U)[]
  ? DeepReadonlyArray7171<U>
  : T extends object
  ? DeepReadonlyObject7171<T>
  : T;

interface DeepReadonlyArray7171<T> extends ReadonlyArray<DeepReadonly7171<T>> {}

type DeepReadonlyObject7171<T> = {
  readonly [P in keyof T]: DeepReadonly7171<T[P]>;
};

type UnionToIntersection7171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7171<T> = UnionToIntersection7171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7171<T extends unknown[], V> = [...T, V];

type TuplifyUnion7171<T, L = LastOf7171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7171<TuplifyUnion7171<Exclude<T, L>>, L>;

type DeepPartial7171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7171<T[P]> }
  : T;

type Paths7171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7171<K, Paths7171<T[K], Prev7171[D]>> : never }[keyof T]
  : never;

type Prev7171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7171 {
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

type ConfigPaths7171 = Paths7171<NestedConfig7171>;

interface HeavyProps7171 {
  config: DeepPartial7171<NestedConfig7171>;
  path?: ConfigPaths7171;
}

const HeavyComponent7171 = memo(function HeavyComponent7171({ config }: HeavyProps7171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7171.displayName = 'HeavyComponent7171';
export default HeavyComponent7171;

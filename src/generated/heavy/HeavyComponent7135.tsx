'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7135<T> = T extends (infer U)[]
  ? DeepReadonlyArray7135<U>
  : T extends object
  ? DeepReadonlyObject7135<T>
  : T;

interface DeepReadonlyArray7135<T> extends ReadonlyArray<DeepReadonly7135<T>> {}

type DeepReadonlyObject7135<T> = {
  readonly [P in keyof T]: DeepReadonly7135<T[P]>;
};

type UnionToIntersection7135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7135<T> = UnionToIntersection7135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7135<T extends unknown[], V> = [...T, V];

type TuplifyUnion7135<T, L = LastOf7135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7135<TuplifyUnion7135<Exclude<T, L>>, L>;

type DeepPartial7135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7135<T[P]> }
  : T;

type Paths7135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7135<K, Paths7135<T[K], Prev7135[D]>> : never }[keyof T]
  : never;

type Prev7135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7135 {
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

type ConfigPaths7135 = Paths7135<NestedConfig7135>;

interface HeavyProps7135 {
  config: DeepPartial7135<NestedConfig7135>;
  path?: ConfigPaths7135;
}

const HeavyComponent7135 = memo(function HeavyComponent7135({ config }: HeavyProps7135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7135.displayName = 'HeavyComponent7135';
export default HeavyComponent7135;

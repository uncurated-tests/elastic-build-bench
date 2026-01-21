'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7290<T> = T extends (infer U)[]
  ? DeepReadonlyArray7290<U>
  : T extends object
  ? DeepReadonlyObject7290<T>
  : T;

interface DeepReadonlyArray7290<T> extends ReadonlyArray<DeepReadonly7290<T>> {}

type DeepReadonlyObject7290<T> = {
  readonly [P in keyof T]: DeepReadonly7290<T[P]>;
};

type UnionToIntersection7290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7290<T> = UnionToIntersection7290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7290<T extends unknown[], V> = [...T, V];

type TuplifyUnion7290<T, L = LastOf7290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7290<TuplifyUnion7290<Exclude<T, L>>, L>;

type DeepPartial7290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7290<T[P]> }
  : T;

type Paths7290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7290<K, Paths7290<T[K], Prev7290[D]>> : never }[keyof T]
  : never;

type Prev7290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7290 {
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

type ConfigPaths7290 = Paths7290<NestedConfig7290>;

interface HeavyProps7290 {
  config: DeepPartial7290<NestedConfig7290>;
  path?: ConfigPaths7290;
}

const HeavyComponent7290 = memo(function HeavyComponent7290({ config }: HeavyProps7290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7290.displayName = 'HeavyComponent7290';
export default HeavyComponent7290;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7737<T> = T extends (infer U)[]
  ? DeepReadonlyArray7737<U>
  : T extends object
  ? DeepReadonlyObject7737<T>
  : T;

interface DeepReadonlyArray7737<T> extends ReadonlyArray<DeepReadonly7737<T>> {}

type DeepReadonlyObject7737<T> = {
  readonly [P in keyof T]: DeepReadonly7737<T[P]>;
};

type UnionToIntersection7737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7737<T> = UnionToIntersection7737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7737<T extends unknown[], V> = [...T, V];

type TuplifyUnion7737<T, L = LastOf7737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7737<TuplifyUnion7737<Exclude<T, L>>, L>;

type DeepPartial7737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7737<T[P]> }
  : T;

type Paths7737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7737<K, Paths7737<T[K], Prev7737[D]>> : never }[keyof T]
  : never;

type Prev7737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7737 {
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

type ConfigPaths7737 = Paths7737<NestedConfig7737>;

interface HeavyProps7737 {
  config: DeepPartial7737<NestedConfig7737>;
  path?: ConfigPaths7737;
}

const HeavyComponent7737 = memo(function HeavyComponent7737({ config }: HeavyProps7737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7737.displayName = 'HeavyComponent7737';
export default HeavyComponent7737;

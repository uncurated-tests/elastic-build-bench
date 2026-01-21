'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7111<T> = T extends (infer U)[]
  ? DeepReadonlyArray7111<U>
  : T extends object
  ? DeepReadonlyObject7111<T>
  : T;

interface DeepReadonlyArray7111<T> extends ReadonlyArray<DeepReadonly7111<T>> {}

type DeepReadonlyObject7111<T> = {
  readonly [P in keyof T]: DeepReadonly7111<T[P]>;
};

type UnionToIntersection7111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7111<T> = UnionToIntersection7111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7111<T extends unknown[], V> = [...T, V];

type TuplifyUnion7111<T, L = LastOf7111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7111<TuplifyUnion7111<Exclude<T, L>>, L>;

type DeepPartial7111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7111<T[P]> }
  : T;

type Paths7111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7111<K, Paths7111<T[K], Prev7111[D]>> : never }[keyof T]
  : never;

type Prev7111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7111 {
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

type ConfigPaths7111 = Paths7111<NestedConfig7111>;

interface HeavyProps7111 {
  config: DeepPartial7111<NestedConfig7111>;
  path?: ConfigPaths7111;
}

const HeavyComponent7111 = memo(function HeavyComponent7111({ config }: HeavyProps7111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7111.displayName = 'HeavyComponent7111';
export default HeavyComponent7111;

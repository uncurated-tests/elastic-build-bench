'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7129<T> = T extends (infer U)[]
  ? DeepReadonlyArray7129<U>
  : T extends object
  ? DeepReadonlyObject7129<T>
  : T;

interface DeepReadonlyArray7129<T> extends ReadonlyArray<DeepReadonly7129<T>> {}

type DeepReadonlyObject7129<T> = {
  readonly [P in keyof T]: DeepReadonly7129<T[P]>;
};

type UnionToIntersection7129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7129<T> = UnionToIntersection7129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7129<T extends unknown[], V> = [...T, V];

type TuplifyUnion7129<T, L = LastOf7129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7129<TuplifyUnion7129<Exclude<T, L>>, L>;

type DeepPartial7129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7129<T[P]> }
  : T;

type Paths7129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7129<K, Paths7129<T[K], Prev7129[D]>> : never }[keyof T]
  : never;

type Prev7129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7129 {
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

type ConfigPaths7129 = Paths7129<NestedConfig7129>;

interface HeavyProps7129 {
  config: DeepPartial7129<NestedConfig7129>;
  path?: ConfigPaths7129;
}

const HeavyComponent7129 = memo(function HeavyComponent7129({ config }: HeavyProps7129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7129.displayName = 'HeavyComponent7129';
export default HeavyComponent7129;

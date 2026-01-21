'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7866<T> = T extends (infer U)[]
  ? DeepReadonlyArray7866<U>
  : T extends object
  ? DeepReadonlyObject7866<T>
  : T;

interface DeepReadonlyArray7866<T> extends ReadonlyArray<DeepReadonly7866<T>> {}

type DeepReadonlyObject7866<T> = {
  readonly [P in keyof T]: DeepReadonly7866<T[P]>;
};

type UnionToIntersection7866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7866<T> = UnionToIntersection7866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7866<T extends unknown[], V> = [...T, V];

type TuplifyUnion7866<T, L = LastOf7866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7866<TuplifyUnion7866<Exclude<T, L>>, L>;

type DeepPartial7866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7866<T[P]> }
  : T;

type Paths7866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7866<K, Paths7866<T[K], Prev7866[D]>> : never }[keyof T]
  : never;

type Prev7866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7866 {
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

type ConfigPaths7866 = Paths7866<NestedConfig7866>;

interface HeavyProps7866 {
  config: DeepPartial7866<NestedConfig7866>;
  path?: ConfigPaths7866;
}

const HeavyComponent7866 = memo(function HeavyComponent7866({ config }: HeavyProps7866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7866.displayName = 'HeavyComponent7866';
export default HeavyComponent7866;

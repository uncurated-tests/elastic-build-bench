'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7013<T> = T extends (infer U)[]
  ? DeepReadonlyArray7013<U>
  : T extends object
  ? DeepReadonlyObject7013<T>
  : T;

interface DeepReadonlyArray7013<T> extends ReadonlyArray<DeepReadonly7013<T>> {}

type DeepReadonlyObject7013<T> = {
  readonly [P in keyof T]: DeepReadonly7013<T[P]>;
};

type UnionToIntersection7013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7013<T> = UnionToIntersection7013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7013<T extends unknown[], V> = [...T, V];

type TuplifyUnion7013<T, L = LastOf7013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7013<TuplifyUnion7013<Exclude<T, L>>, L>;

type DeepPartial7013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7013<T[P]> }
  : T;

type Paths7013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7013<K, Paths7013<T[K], Prev7013[D]>> : never }[keyof T]
  : never;

type Prev7013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7013 {
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

type ConfigPaths7013 = Paths7013<NestedConfig7013>;

interface HeavyProps7013 {
  config: DeepPartial7013<NestedConfig7013>;
  path?: ConfigPaths7013;
}

const HeavyComponent7013 = memo(function HeavyComponent7013({ config }: HeavyProps7013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7013.displayName = 'HeavyComponent7013';
export default HeavyComponent7013;

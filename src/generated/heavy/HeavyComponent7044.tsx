'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7044<T> = T extends (infer U)[]
  ? DeepReadonlyArray7044<U>
  : T extends object
  ? DeepReadonlyObject7044<T>
  : T;

interface DeepReadonlyArray7044<T> extends ReadonlyArray<DeepReadonly7044<T>> {}

type DeepReadonlyObject7044<T> = {
  readonly [P in keyof T]: DeepReadonly7044<T[P]>;
};

type UnionToIntersection7044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7044<T> = UnionToIntersection7044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7044<T extends unknown[], V> = [...T, V];

type TuplifyUnion7044<T, L = LastOf7044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7044<TuplifyUnion7044<Exclude<T, L>>, L>;

type DeepPartial7044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7044<T[P]> }
  : T;

type Paths7044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7044<K, Paths7044<T[K], Prev7044[D]>> : never }[keyof T]
  : never;

type Prev7044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7044 {
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

type ConfigPaths7044 = Paths7044<NestedConfig7044>;

interface HeavyProps7044 {
  config: DeepPartial7044<NestedConfig7044>;
  path?: ConfigPaths7044;
}

const HeavyComponent7044 = memo(function HeavyComponent7044({ config }: HeavyProps7044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7044.displayName = 'HeavyComponent7044';
export default HeavyComponent7044;

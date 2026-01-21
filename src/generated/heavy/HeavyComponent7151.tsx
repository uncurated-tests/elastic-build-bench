'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7151<T> = T extends (infer U)[]
  ? DeepReadonlyArray7151<U>
  : T extends object
  ? DeepReadonlyObject7151<T>
  : T;

interface DeepReadonlyArray7151<T> extends ReadonlyArray<DeepReadonly7151<T>> {}

type DeepReadonlyObject7151<T> = {
  readonly [P in keyof T]: DeepReadonly7151<T[P]>;
};

type UnionToIntersection7151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7151<T> = UnionToIntersection7151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7151<T extends unknown[], V> = [...T, V];

type TuplifyUnion7151<T, L = LastOf7151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7151<TuplifyUnion7151<Exclude<T, L>>, L>;

type DeepPartial7151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7151<T[P]> }
  : T;

type Paths7151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7151<K, Paths7151<T[K], Prev7151[D]>> : never }[keyof T]
  : never;

type Prev7151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7151 {
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

type ConfigPaths7151 = Paths7151<NestedConfig7151>;

interface HeavyProps7151 {
  config: DeepPartial7151<NestedConfig7151>;
  path?: ConfigPaths7151;
}

const HeavyComponent7151 = memo(function HeavyComponent7151({ config }: HeavyProps7151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7151.displayName = 'HeavyComponent7151';
export default HeavyComponent7151;

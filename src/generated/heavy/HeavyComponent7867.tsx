'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7867<T> = T extends (infer U)[]
  ? DeepReadonlyArray7867<U>
  : T extends object
  ? DeepReadonlyObject7867<T>
  : T;

interface DeepReadonlyArray7867<T> extends ReadonlyArray<DeepReadonly7867<T>> {}

type DeepReadonlyObject7867<T> = {
  readonly [P in keyof T]: DeepReadonly7867<T[P]>;
};

type UnionToIntersection7867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7867<T> = UnionToIntersection7867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7867<T extends unknown[], V> = [...T, V];

type TuplifyUnion7867<T, L = LastOf7867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7867<TuplifyUnion7867<Exclude<T, L>>, L>;

type DeepPartial7867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7867<T[P]> }
  : T;

type Paths7867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7867<K, Paths7867<T[K], Prev7867[D]>> : never }[keyof T]
  : never;

type Prev7867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7867 {
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

type ConfigPaths7867 = Paths7867<NestedConfig7867>;

interface HeavyProps7867 {
  config: DeepPartial7867<NestedConfig7867>;
  path?: ConfigPaths7867;
}

const HeavyComponent7867 = memo(function HeavyComponent7867({ config }: HeavyProps7867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7867.displayName = 'HeavyComponent7867';
export default HeavyComponent7867;

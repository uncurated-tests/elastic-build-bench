'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7064<T> = T extends (infer U)[]
  ? DeepReadonlyArray7064<U>
  : T extends object
  ? DeepReadonlyObject7064<T>
  : T;

interface DeepReadonlyArray7064<T> extends ReadonlyArray<DeepReadonly7064<T>> {}

type DeepReadonlyObject7064<T> = {
  readonly [P in keyof T]: DeepReadonly7064<T[P]>;
};

type UnionToIntersection7064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7064<T> = UnionToIntersection7064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7064<T extends unknown[], V> = [...T, V];

type TuplifyUnion7064<T, L = LastOf7064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7064<TuplifyUnion7064<Exclude<T, L>>, L>;

type DeepPartial7064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7064<T[P]> }
  : T;

type Paths7064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7064<K, Paths7064<T[K], Prev7064[D]>> : never }[keyof T]
  : never;

type Prev7064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7064 {
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

type ConfigPaths7064 = Paths7064<NestedConfig7064>;

interface HeavyProps7064 {
  config: DeepPartial7064<NestedConfig7064>;
  path?: ConfigPaths7064;
}

const HeavyComponent7064 = memo(function HeavyComponent7064({ config }: HeavyProps7064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7064.displayName = 'HeavyComponent7064';
export default HeavyComponent7064;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7994<T> = T extends (infer U)[]
  ? DeepReadonlyArray7994<U>
  : T extends object
  ? DeepReadonlyObject7994<T>
  : T;

interface DeepReadonlyArray7994<T> extends ReadonlyArray<DeepReadonly7994<T>> {}

type DeepReadonlyObject7994<T> = {
  readonly [P in keyof T]: DeepReadonly7994<T[P]>;
};

type UnionToIntersection7994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7994<T> = UnionToIntersection7994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7994<T extends unknown[], V> = [...T, V];

type TuplifyUnion7994<T, L = LastOf7994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7994<TuplifyUnion7994<Exclude<T, L>>, L>;

type DeepPartial7994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7994<T[P]> }
  : T;

type Paths7994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7994<K, Paths7994<T[K], Prev7994[D]>> : never }[keyof T]
  : never;

type Prev7994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7994 {
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

type ConfigPaths7994 = Paths7994<NestedConfig7994>;

interface HeavyProps7994 {
  config: DeepPartial7994<NestedConfig7994>;
  path?: ConfigPaths7994;
}

const HeavyComponent7994 = memo(function HeavyComponent7994({ config }: HeavyProps7994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7994.displayName = 'HeavyComponent7994';
export default HeavyComponent7994;

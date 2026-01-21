'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7375<T> = T extends (infer U)[]
  ? DeepReadonlyArray7375<U>
  : T extends object
  ? DeepReadonlyObject7375<T>
  : T;

interface DeepReadonlyArray7375<T> extends ReadonlyArray<DeepReadonly7375<T>> {}

type DeepReadonlyObject7375<T> = {
  readonly [P in keyof T]: DeepReadonly7375<T[P]>;
};

type UnionToIntersection7375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7375<T> = UnionToIntersection7375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7375<T extends unknown[], V> = [...T, V];

type TuplifyUnion7375<T, L = LastOf7375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7375<TuplifyUnion7375<Exclude<T, L>>, L>;

type DeepPartial7375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7375<T[P]> }
  : T;

type Paths7375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7375<K, Paths7375<T[K], Prev7375[D]>> : never }[keyof T]
  : never;

type Prev7375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7375 {
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

type ConfigPaths7375 = Paths7375<NestedConfig7375>;

interface HeavyProps7375 {
  config: DeepPartial7375<NestedConfig7375>;
  path?: ConfigPaths7375;
}

const HeavyComponent7375 = memo(function HeavyComponent7375({ config }: HeavyProps7375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7375.displayName = 'HeavyComponent7375';
export default HeavyComponent7375;

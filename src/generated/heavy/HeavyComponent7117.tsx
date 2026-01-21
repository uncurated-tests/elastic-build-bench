'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7117<T> = T extends (infer U)[]
  ? DeepReadonlyArray7117<U>
  : T extends object
  ? DeepReadonlyObject7117<T>
  : T;

interface DeepReadonlyArray7117<T> extends ReadonlyArray<DeepReadonly7117<T>> {}

type DeepReadonlyObject7117<T> = {
  readonly [P in keyof T]: DeepReadonly7117<T[P]>;
};

type UnionToIntersection7117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7117<T> = UnionToIntersection7117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7117<T extends unknown[], V> = [...T, V];

type TuplifyUnion7117<T, L = LastOf7117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7117<TuplifyUnion7117<Exclude<T, L>>, L>;

type DeepPartial7117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7117<T[P]> }
  : T;

type Paths7117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7117<K, Paths7117<T[K], Prev7117[D]>> : never }[keyof T]
  : never;

type Prev7117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7117 {
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

type ConfigPaths7117 = Paths7117<NestedConfig7117>;

interface HeavyProps7117 {
  config: DeepPartial7117<NestedConfig7117>;
  path?: ConfigPaths7117;
}

const HeavyComponent7117 = memo(function HeavyComponent7117({ config }: HeavyProps7117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7117.displayName = 'HeavyComponent7117';
export default HeavyComponent7117;

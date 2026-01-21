'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7175<T> = T extends (infer U)[]
  ? DeepReadonlyArray7175<U>
  : T extends object
  ? DeepReadonlyObject7175<T>
  : T;

interface DeepReadonlyArray7175<T> extends ReadonlyArray<DeepReadonly7175<T>> {}

type DeepReadonlyObject7175<T> = {
  readonly [P in keyof T]: DeepReadonly7175<T[P]>;
};

type UnionToIntersection7175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7175<T> = UnionToIntersection7175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7175<T extends unknown[], V> = [...T, V];

type TuplifyUnion7175<T, L = LastOf7175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7175<TuplifyUnion7175<Exclude<T, L>>, L>;

type DeepPartial7175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7175<T[P]> }
  : T;

type Paths7175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7175<K, Paths7175<T[K], Prev7175[D]>> : never }[keyof T]
  : never;

type Prev7175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7175 {
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

type ConfigPaths7175 = Paths7175<NestedConfig7175>;

interface HeavyProps7175 {
  config: DeepPartial7175<NestedConfig7175>;
  path?: ConfigPaths7175;
}

const HeavyComponent7175 = memo(function HeavyComponent7175({ config }: HeavyProps7175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7175.displayName = 'HeavyComponent7175';
export default HeavyComponent7175;

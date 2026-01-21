'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7975<T> = T extends (infer U)[]
  ? DeepReadonlyArray7975<U>
  : T extends object
  ? DeepReadonlyObject7975<T>
  : T;

interface DeepReadonlyArray7975<T> extends ReadonlyArray<DeepReadonly7975<T>> {}

type DeepReadonlyObject7975<T> = {
  readonly [P in keyof T]: DeepReadonly7975<T[P]>;
};

type UnionToIntersection7975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7975<T> = UnionToIntersection7975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7975<T extends unknown[], V> = [...T, V];

type TuplifyUnion7975<T, L = LastOf7975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7975<TuplifyUnion7975<Exclude<T, L>>, L>;

type DeepPartial7975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7975<T[P]> }
  : T;

type Paths7975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7975<K, Paths7975<T[K], Prev7975[D]>> : never }[keyof T]
  : never;

type Prev7975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7975 {
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

type ConfigPaths7975 = Paths7975<NestedConfig7975>;

interface HeavyProps7975 {
  config: DeepPartial7975<NestedConfig7975>;
  path?: ConfigPaths7975;
}

const HeavyComponent7975 = memo(function HeavyComponent7975({ config }: HeavyProps7975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7975.displayName = 'HeavyComponent7975';
export default HeavyComponent7975;

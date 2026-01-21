'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7501<T> = T extends (infer U)[]
  ? DeepReadonlyArray7501<U>
  : T extends object
  ? DeepReadonlyObject7501<T>
  : T;

interface DeepReadonlyArray7501<T> extends ReadonlyArray<DeepReadonly7501<T>> {}

type DeepReadonlyObject7501<T> = {
  readonly [P in keyof T]: DeepReadonly7501<T[P]>;
};

type UnionToIntersection7501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7501<T> = UnionToIntersection7501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7501<T extends unknown[], V> = [...T, V];

type TuplifyUnion7501<T, L = LastOf7501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7501<TuplifyUnion7501<Exclude<T, L>>, L>;

type DeepPartial7501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7501<T[P]> }
  : T;

type Paths7501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7501<K, Paths7501<T[K], Prev7501[D]>> : never }[keyof T]
  : never;

type Prev7501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7501 {
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

type ConfigPaths7501 = Paths7501<NestedConfig7501>;

interface HeavyProps7501 {
  config: DeepPartial7501<NestedConfig7501>;
  path?: ConfigPaths7501;
}

const HeavyComponent7501 = memo(function HeavyComponent7501({ config }: HeavyProps7501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7501.displayName = 'HeavyComponent7501';
export default HeavyComponent7501;

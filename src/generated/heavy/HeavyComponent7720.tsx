'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7720<T> = T extends (infer U)[]
  ? DeepReadonlyArray7720<U>
  : T extends object
  ? DeepReadonlyObject7720<T>
  : T;

interface DeepReadonlyArray7720<T> extends ReadonlyArray<DeepReadonly7720<T>> {}

type DeepReadonlyObject7720<T> = {
  readonly [P in keyof T]: DeepReadonly7720<T[P]>;
};

type UnionToIntersection7720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7720<T> = UnionToIntersection7720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7720<T extends unknown[], V> = [...T, V];

type TuplifyUnion7720<T, L = LastOf7720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7720<TuplifyUnion7720<Exclude<T, L>>, L>;

type DeepPartial7720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7720<T[P]> }
  : T;

type Paths7720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7720<K, Paths7720<T[K], Prev7720[D]>> : never }[keyof T]
  : never;

type Prev7720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7720 {
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

type ConfigPaths7720 = Paths7720<NestedConfig7720>;

interface HeavyProps7720 {
  config: DeepPartial7720<NestedConfig7720>;
  path?: ConfigPaths7720;
}

const HeavyComponent7720 = memo(function HeavyComponent7720({ config }: HeavyProps7720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7720.displayName = 'HeavyComponent7720';
export default HeavyComponent7720;

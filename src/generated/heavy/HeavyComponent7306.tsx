'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7306<T> = T extends (infer U)[]
  ? DeepReadonlyArray7306<U>
  : T extends object
  ? DeepReadonlyObject7306<T>
  : T;

interface DeepReadonlyArray7306<T> extends ReadonlyArray<DeepReadonly7306<T>> {}

type DeepReadonlyObject7306<T> = {
  readonly [P in keyof T]: DeepReadonly7306<T[P]>;
};

type UnionToIntersection7306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7306<T> = UnionToIntersection7306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7306<T extends unknown[], V> = [...T, V];

type TuplifyUnion7306<T, L = LastOf7306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7306<TuplifyUnion7306<Exclude<T, L>>, L>;

type DeepPartial7306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7306<T[P]> }
  : T;

type Paths7306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7306<K, Paths7306<T[K], Prev7306[D]>> : never }[keyof T]
  : never;

type Prev7306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7306 {
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

type ConfigPaths7306 = Paths7306<NestedConfig7306>;

interface HeavyProps7306 {
  config: DeepPartial7306<NestedConfig7306>;
  path?: ConfigPaths7306;
}

const HeavyComponent7306 = memo(function HeavyComponent7306({ config }: HeavyProps7306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7306.displayName = 'HeavyComponent7306';
export default HeavyComponent7306;

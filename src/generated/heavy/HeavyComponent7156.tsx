'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7156<T> = T extends (infer U)[]
  ? DeepReadonlyArray7156<U>
  : T extends object
  ? DeepReadonlyObject7156<T>
  : T;

interface DeepReadonlyArray7156<T> extends ReadonlyArray<DeepReadonly7156<T>> {}

type DeepReadonlyObject7156<T> = {
  readonly [P in keyof T]: DeepReadonly7156<T[P]>;
};

type UnionToIntersection7156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7156<T> = UnionToIntersection7156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7156<T extends unknown[], V> = [...T, V];

type TuplifyUnion7156<T, L = LastOf7156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7156<TuplifyUnion7156<Exclude<T, L>>, L>;

type DeepPartial7156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7156<T[P]> }
  : T;

type Paths7156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7156<K, Paths7156<T[K], Prev7156[D]>> : never }[keyof T]
  : never;

type Prev7156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7156 {
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

type ConfigPaths7156 = Paths7156<NestedConfig7156>;

interface HeavyProps7156 {
  config: DeepPartial7156<NestedConfig7156>;
  path?: ConfigPaths7156;
}

const HeavyComponent7156 = memo(function HeavyComponent7156({ config }: HeavyProps7156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7156.displayName = 'HeavyComponent7156';
export default HeavyComponent7156;

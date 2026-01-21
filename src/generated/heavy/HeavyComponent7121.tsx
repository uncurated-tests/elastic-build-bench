'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7121<T> = T extends (infer U)[]
  ? DeepReadonlyArray7121<U>
  : T extends object
  ? DeepReadonlyObject7121<T>
  : T;

interface DeepReadonlyArray7121<T> extends ReadonlyArray<DeepReadonly7121<T>> {}

type DeepReadonlyObject7121<T> = {
  readonly [P in keyof T]: DeepReadonly7121<T[P]>;
};

type UnionToIntersection7121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7121<T> = UnionToIntersection7121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7121<T extends unknown[], V> = [...T, V];

type TuplifyUnion7121<T, L = LastOf7121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7121<TuplifyUnion7121<Exclude<T, L>>, L>;

type DeepPartial7121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7121<T[P]> }
  : T;

type Paths7121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7121<K, Paths7121<T[K], Prev7121[D]>> : never }[keyof T]
  : never;

type Prev7121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7121 {
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

type ConfigPaths7121 = Paths7121<NestedConfig7121>;

interface HeavyProps7121 {
  config: DeepPartial7121<NestedConfig7121>;
  path?: ConfigPaths7121;
}

const HeavyComponent7121 = memo(function HeavyComponent7121({ config }: HeavyProps7121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7121.displayName = 'HeavyComponent7121';
export default HeavyComponent7121;

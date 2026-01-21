'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12720<T> = T extends (infer U)[]
  ? DeepReadonlyArray12720<U>
  : T extends object
  ? DeepReadonlyObject12720<T>
  : T;

interface DeepReadonlyArray12720<T> extends ReadonlyArray<DeepReadonly12720<T>> {}

type DeepReadonlyObject12720<T> = {
  readonly [P in keyof T]: DeepReadonly12720<T[P]>;
};

type UnionToIntersection12720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12720<T> = UnionToIntersection12720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12720<T extends unknown[], V> = [...T, V];

type TuplifyUnion12720<T, L = LastOf12720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12720<TuplifyUnion12720<Exclude<T, L>>, L>;

type DeepPartial12720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12720<T[P]> }
  : T;

type Paths12720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12720<K, Paths12720<T[K], Prev12720[D]>> : never }[keyof T]
  : never;

type Prev12720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12720 {
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

type ConfigPaths12720 = Paths12720<NestedConfig12720>;

interface HeavyProps12720 {
  config: DeepPartial12720<NestedConfig12720>;
  path?: ConfigPaths12720;
}

const HeavyComponent12720 = memo(function HeavyComponent12720({ config }: HeavyProps12720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12720.displayName = 'HeavyComponent12720';
export default HeavyComponent12720;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12014<T> = T extends (infer U)[]
  ? DeepReadonlyArray12014<U>
  : T extends object
  ? DeepReadonlyObject12014<T>
  : T;

interface DeepReadonlyArray12014<T> extends ReadonlyArray<DeepReadonly12014<T>> {}

type DeepReadonlyObject12014<T> = {
  readonly [P in keyof T]: DeepReadonly12014<T[P]>;
};

type UnionToIntersection12014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12014<T> = UnionToIntersection12014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12014<T extends unknown[], V> = [...T, V];

type TuplifyUnion12014<T, L = LastOf12014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12014<TuplifyUnion12014<Exclude<T, L>>, L>;

type DeepPartial12014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12014<T[P]> }
  : T;

type Paths12014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12014<K, Paths12014<T[K], Prev12014[D]>> : never }[keyof T]
  : never;

type Prev12014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12014 {
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

type ConfigPaths12014 = Paths12014<NestedConfig12014>;

interface HeavyProps12014 {
  config: DeepPartial12014<NestedConfig12014>;
  path?: ConfigPaths12014;
}

const HeavyComponent12014 = memo(function HeavyComponent12014({ config }: HeavyProps12014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12014.displayName = 'HeavyComponent12014';
export default HeavyComponent12014;

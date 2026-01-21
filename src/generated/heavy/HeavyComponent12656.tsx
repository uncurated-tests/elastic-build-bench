'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12656<T> = T extends (infer U)[]
  ? DeepReadonlyArray12656<U>
  : T extends object
  ? DeepReadonlyObject12656<T>
  : T;

interface DeepReadonlyArray12656<T> extends ReadonlyArray<DeepReadonly12656<T>> {}

type DeepReadonlyObject12656<T> = {
  readonly [P in keyof T]: DeepReadonly12656<T[P]>;
};

type UnionToIntersection12656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12656<T> = UnionToIntersection12656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12656<T extends unknown[], V> = [...T, V];

type TuplifyUnion12656<T, L = LastOf12656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12656<TuplifyUnion12656<Exclude<T, L>>, L>;

type DeepPartial12656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12656<T[P]> }
  : T;

type Paths12656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12656<K, Paths12656<T[K], Prev12656[D]>> : never }[keyof T]
  : never;

type Prev12656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12656 {
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

type ConfigPaths12656 = Paths12656<NestedConfig12656>;

interface HeavyProps12656 {
  config: DeepPartial12656<NestedConfig12656>;
  path?: ConfigPaths12656;
}

const HeavyComponent12656 = memo(function HeavyComponent12656({ config }: HeavyProps12656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12656.displayName = 'HeavyComponent12656';
export default HeavyComponent12656;

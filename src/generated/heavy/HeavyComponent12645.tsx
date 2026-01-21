'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12645<T> = T extends (infer U)[]
  ? DeepReadonlyArray12645<U>
  : T extends object
  ? DeepReadonlyObject12645<T>
  : T;

interface DeepReadonlyArray12645<T> extends ReadonlyArray<DeepReadonly12645<T>> {}

type DeepReadonlyObject12645<T> = {
  readonly [P in keyof T]: DeepReadonly12645<T[P]>;
};

type UnionToIntersection12645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12645<T> = UnionToIntersection12645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12645<T extends unknown[], V> = [...T, V];

type TuplifyUnion12645<T, L = LastOf12645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12645<TuplifyUnion12645<Exclude<T, L>>, L>;

type DeepPartial12645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12645<T[P]> }
  : T;

type Paths12645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12645<K, Paths12645<T[K], Prev12645[D]>> : never }[keyof T]
  : never;

type Prev12645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12645 {
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

type ConfigPaths12645 = Paths12645<NestedConfig12645>;

interface HeavyProps12645 {
  config: DeepPartial12645<NestedConfig12645>;
  path?: ConfigPaths12645;
}

const HeavyComponent12645 = memo(function HeavyComponent12645({ config }: HeavyProps12645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12645.displayName = 'HeavyComponent12645';
export default HeavyComponent12645;

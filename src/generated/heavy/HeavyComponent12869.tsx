'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12869<T> = T extends (infer U)[]
  ? DeepReadonlyArray12869<U>
  : T extends object
  ? DeepReadonlyObject12869<T>
  : T;

interface DeepReadonlyArray12869<T> extends ReadonlyArray<DeepReadonly12869<T>> {}

type DeepReadonlyObject12869<T> = {
  readonly [P in keyof T]: DeepReadonly12869<T[P]>;
};

type UnionToIntersection12869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12869<T> = UnionToIntersection12869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12869<T extends unknown[], V> = [...T, V];

type TuplifyUnion12869<T, L = LastOf12869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12869<TuplifyUnion12869<Exclude<T, L>>, L>;

type DeepPartial12869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12869<T[P]> }
  : T;

type Paths12869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12869<K, Paths12869<T[K], Prev12869[D]>> : never }[keyof T]
  : never;

type Prev12869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12869 {
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

type ConfigPaths12869 = Paths12869<NestedConfig12869>;

interface HeavyProps12869 {
  config: DeepPartial12869<NestedConfig12869>;
  path?: ConfigPaths12869;
}

const HeavyComponent12869 = memo(function HeavyComponent12869({ config }: HeavyProps12869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12869.displayName = 'HeavyComponent12869';
export default HeavyComponent12869;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12569<T> = T extends (infer U)[]
  ? DeepReadonlyArray12569<U>
  : T extends object
  ? DeepReadonlyObject12569<T>
  : T;

interface DeepReadonlyArray12569<T> extends ReadonlyArray<DeepReadonly12569<T>> {}

type DeepReadonlyObject12569<T> = {
  readonly [P in keyof T]: DeepReadonly12569<T[P]>;
};

type UnionToIntersection12569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12569<T> = UnionToIntersection12569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12569<T extends unknown[], V> = [...T, V];

type TuplifyUnion12569<T, L = LastOf12569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12569<TuplifyUnion12569<Exclude<T, L>>, L>;

type DeepPartial12569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12569<T[P]> }
  : T;

type Paths12569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12569<K, Paths12569<T[K], Prev12569[D]>> : never }[keyof T]
  : never;

type Prev12569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12569 {
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

type ConfigPaths12569 = Paths12569<NestedConfig12569>;

interface HeavyProps12569 {
  config: DeepPartial12569<NestedConfig12569>;
  path?: ConfigPaths12569;
}

const HeavyComponent12569 = memo(function HeavyComponent12569({ config }: HeavyProps12569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12569.displayName = 'HeavyComponent12569';
export default HeavyComponent12569;

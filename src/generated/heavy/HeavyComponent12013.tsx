'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12013<T> = T extends (infer U)[]
  ? DeepReadonlyArray12013<U>
  : T extends object
  ? DeepReadonlyObject12013<T>
  : T;

interface DeepReadonlyArray12013<T> extends ReadonlyArray<DeepReadonly12013<T>> {}

type DeepReadonlyObject12013<T> = {
  readonly [P in keyof T]: DeepReadonly12013<T[P]>;
};

type UnionToIntersection12013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12013<T> = UnionToIntersection12013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12013<T extends unknown[], V> = [...T, V];

type TuplifyUnion12013<T, L = LastOf12013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12013<TuplifyUnion12013<Exclude<T, L>>, L>;

type DeepPartial12013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12013<T[P]> }
  : T;

type Paths12013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12013<K, Paths12013<T[K], Prev12013[D]>> : never }[keyof T]
  : never;

type Prev12013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12013 {
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

type ConfigPaths12013 = Paths12013<NestedConfig12013>;

interface HeavyProps12013 {
  config: DeepPartial12013<NestedConfig12013>;
  path?: ConfigPaths12013;
}

const HeavyComponent12013 = memo(function HeavyComponent12013({ config }: HeavyProps12013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12013.displayName = 'HeavyComponent12013';
export default HeavyComponent12013;

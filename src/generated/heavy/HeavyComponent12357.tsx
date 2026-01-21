'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12357<T> = T extends (infer U)[]
  ? DeepReadonlyArray12357<U>
  : T extends object
  ? DeepReadonlyObject12357<T>
  : T;

interface DeepReadonlyArray12357<T> extends ReadonlyArray<DeepReadonly12357<T>> {}

type DeepReadonlyObject12357<T> = {
  readonly [P in keyof T]: DeepReadonly12357<T[P]>;
};

type UnionToIntersection12357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12357<T> = UnionToIntersection12357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12357<T extends unknown[], V> = [...T, V];

type TuplifyUnion12357<T, L = LastOf12357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12357<TuplifyUnion12357<Exclude<T, L>>, L>;

type DeepPartial12357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12357<T[P]> }
  : T;

type Paths12357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12357<K, Paths12357<T[K], Prev12357[D]>> : never }[keyof T]
  : never;

type Prev12357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12357 {
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

type ConfigPaths12357 = Paths12357<NestedConfig12357>;

interface HeavyProps12357 {
  config: DeepPartial12357<NestedConfig12357>;
  path?: ConfigPaths12357;
}

const HeavyComponent12357 = memo(function HeavyComponent12357({ config }: HeavyProps12357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12357.displayName = 'HeavyComponent12357';
export default HeavyComponent12357;

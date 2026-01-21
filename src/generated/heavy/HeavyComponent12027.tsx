'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12027<T> = T extends (infer U)[]
  ? DeepReadonlyArray12027<U>
  : T extends object
  ? DeepReadonlyObject12027<T>
  : T;

interface DeepReadonlyArray12027<T> extends ReadonlyArray<DeepReadonly12027<T>> {}

type DeepReadonlyObject12027<T> = {
  readonly [P in keyof T]: DeepReadonly12027<T[P]>;
};

type UnionToIntersection12027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12027<T> = UnionToIntersection12027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12027<T extends unknown[], V> = [...T, V];

type TuplifyUnion12027<T, L = LastOf12027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12027<TuplifyUnion12027<Exclude<T, L>>, L>;

type DeepPartial12027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12027<T[P]> }
  : T;

type Paths12027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12027<K, Paths12027<T[K], Prev12027[D]>> : never }[keyof T]
  : never;

type Prev12027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12027 {
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

type ConfigPaths12027 = Paths12027<NestedConfig12027>;

interface HeavyProps12027 {
  config: DeepPartial12027<NestedConfig12027>;
  path?: ConfigPaths12027;
}

const HeavyComponent12027 = memo(function HeavyComponent12027({ config }: HeavyProps12027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12027.displayName = 'HeavyComponent12027';
export default HeavyComponent12027;

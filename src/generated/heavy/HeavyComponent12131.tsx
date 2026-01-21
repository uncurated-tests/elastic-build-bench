'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12131<T> = T extends (infer U)[]
  ? DeepReadonlyArray12131<U>
  : T extends object
  ? DeepReadonlyObject12131<T>
  : T;

interface DeepReadonlyArray12131<T> extends ReadonlyArray<DeepReadonly12131<T>> {}

type DeepReadonlyObject12131<T> = {
  readonly [P in keyof T]: DeepReadonly12131<T[P]>;
};

type UnionToIntersection12131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12131<T> = UnionToIntersection12131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12131<T extends unknown[], V> = [...T, V];

type TuplifyUnion12131<T, L = LastOf12131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12131<TuplifyUnion12131<Exclude<T, L>>, L>;

type DeepPartial12131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12131<T[P]> }
  : T;

type Paths12131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12131<K, Paths12131<T[K], Prev12131[D]>> : never }[keyof T]
  : never;

type Prev12131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12131 {
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

type ConfigPaths12131 = Paths12131<NestedConfig12131>;

interface HeavyProps12131 {
  config: DeepPartial12131<NestedConfig12131>;
  path?: ConfigPaths12131;
}

const HeavyComponent12131 = memo(function HeavyComponent12131({ config }: HeavyProps12131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12131.displayName = 'HeavyComponent12131';
export default HeavyComponent12131;

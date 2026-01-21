'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12602<T> = T extends (infer U)[]
  ? DeepReadonlyArray12602<U>
  : T extends object
  ? DeepReadonlyObject12602<T>
  : T;

interface DeepReadonlyArray12602<T> extends ReadonlyArray<DeepReadonly12602<T>> {}

type DeepReadonlyObject12602<T> = {
  readonly [P in keyof T]: DeepReadonly12602<T[P]>;
};

type UnionToIntersection12602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12602<T> = UnionToIntersection12602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12602<T extends unknown[], V> = [...T, V];

type TuplifyUnion12602<T, L = LastOf12602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12602<TuplifyUnion12602<Exclude<T, L>>, L>;

type DeepPartial12602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12602<T[P]> }
  : T;

type Paths12602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12602<K, Paths12602<T[K], Prev12602[D]>> : never }[keyof T]
  : never;

type Prev12602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12602 {
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

type ConfigPaths12602 = Paths12602<NestedConfig12602>;

interface HeavyProps12602 {
  config: DeepPartial12602<NestedConfig12602>;
  path?: ConfigPaths12602;
}

const HeavyComponent12602 = memo(function HeavyComponent12602({ config }: HeavyProps12602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12602.displayName = 'HeavyComponent12602';
export default HeavyComponent12602;

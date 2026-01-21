'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12907<T> = T extends (infer U)[]
  ? DeepReadonlyArray12907<U>
  : T extends object
  ? DeepReadonlyObject12907<T>
  : T;

interface DeepReadonlyArray12907<T> extends ReadonlyArray<DeepReadonly12907<T>> {}

type DeepReadonlyObject12907<T> = {
  readonly [P in keyof T]: DeepReadonly12907<T[P]>;
};

type UnionToIntersection12907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12907<T> = UnionToIntersection12907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12907<T extends unknown[], V> = [...T, V];

type TuplifyUnion12907<T, L = LastOf12907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12907<TuplifyUnion12907<Exclude<T, L>>, L>;

type DeepPartial12907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12907<T[P]> }
  : T;

type Paths12907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12907<K, Paths12907<T[K], Prev12907[D]>> : never }[keyof T]
  : never;

type Prev12907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12907 {
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

type ConfigPaths12907 = Paths12907<NestedConfig12907>;

interface HeavyProps12907 {
  config: DeepPartial12907<NestedConfig12907>;
  path?: ConfigPaths12907;
}

const HeavyComponent12907 = memo(function HeavyComponent12907({ config }: HeavyProps12907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12907.displayName = 'HeavyComponent12907';
export default HeavyComponent12907;

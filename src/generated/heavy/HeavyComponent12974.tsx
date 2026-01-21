'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12974<T> = T extends (infer U)[]
  ? DeepReadonlyArray12974<U>
  : T extends object
  ? DeepReadonlyObject12974<T>
  : T;

interface DeepReadonlyArray12974<T> extends ReadonlyArray<DeepReadonly12974<T>> {}

type DeepReadonlyObject12974<T> = {
  readonly [P in keyof T]: DeepReadonly12974<T[P]>;
};

type UnionToIntersection12974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12974<T> = UnionToIntersection12974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12974<T extends unknown[], V> = [...T, V];

type TuplifyUnion12974<T, L = LastOf12974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12974<TuplifyUnion12974<Exclude<T, L>>, L>;

type DeepPartial12974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12974<T[P]> }
  : T;

type Paths12974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12974<K, Paths12974<T[K], Prev12974[D]>> : never }[keyof T]
  : never;

type Prev12974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12974 {
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

type ConfigPaths12974 = Paths12974<NestedConfig12974>;

interface HeavyProps12974 {
  config: DeepPartial12974<NestedConfig12974>;
  path?: ConfigPaths12974;
}

const HeavyComponent12974 = memo(function HeavyComponent12974({ config }: HeavyProps12974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12974.displayName = 'HeavyComponent12974';
export default HeavyComponent12974;

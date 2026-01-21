'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12009<T> = T extends (infer U)[]
  ? DeepReadonlyArray12009<U>
  : T extends object
  ? DeepReadonlyObject12009<T>
  : T;

interface DeepReadonlyArray12009<T> extends ReadonlyArray<DeepReadonly12009<T>> {}

type DeepReadonlyObject12009<T> = {
  readonly [P in keyof T]: DeepReadonly12009<T[P]>;
};

type UnionToIntersection12009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12009<T> = UnionToIntersection12009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12009<T extends unknown[], V> = [...T, V];

type TuplifyUnion12009<T, L = LastOf12009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12009<TuplifyUnion12009<Exclude<T, L>>, L>;

type DeepPartial12009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12009<T[P]> }
  : T;

type Paths12009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12009<K, Paths12009<T[K], Prev12009[D]>> : never }[keyof T]
  : never;

type Prev12009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12009 {
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

type ConfigPaths12009 = Paths12009<NestedConfig12009>;

interface HeavyProps12009 {
  config: DeepPartial12009<NestedConfig12009>;
  path?: ConfigPaths12009;
}

const HeavyComponent12009 = memo(function HeavyComponent12009({ config }: HeavyProps12009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12009.displayName = 'HeavyComponent12009';
export default HeavyComponent12009;

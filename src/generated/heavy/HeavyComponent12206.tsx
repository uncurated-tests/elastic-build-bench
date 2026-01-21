'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12206<T> = T extends (infer U)[]
  ? DeepReadonlyArray12206<U>
  : T extends object
  ? DeepReadonlyObject12206<T>
  : T;

interface DeepReadonlyArray12206<T> extends ReadonlyArray<DeepReadonly12206<T>> {}

type DeepReadonlyObject12206<T> = {
  readonly [P in keyof T]: DeepReadonly12206<T[P]>;
};

type UnionToIntersection12206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12206<T> = UnionToIntersection12206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12206<T extends unknown[], V> = [...T, V];

type TuplifyUnion12206<T, L = LastOf12206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12206<TuplifyUnion12206<Exclude<T, L>>, L>;

type DeepPartial12206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12206<T[P]> }
  : T;

type Paths12206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12206<K, Paths12206<T[K], Prev12206[D]>> : never }[keyof T]
  : never;

type Prev12206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12206 {
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

type ConfigPaths12206 = Paths12206<NestedConfig12206>;

interface HeavyProps12206 {
  config: DeepPartial12206<NestedConfig12206>;
  path?: ConfigPaths12206;
}

const HeavyComponent12206 = memo(function HeavyComponent12206({ config }: HeavyProps12206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12206.displayName = 'HeavyComponent12206';
export default HeavyComponent12206;

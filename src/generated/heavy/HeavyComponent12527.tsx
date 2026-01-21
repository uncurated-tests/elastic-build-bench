'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12527<T> = T extends (infer U)[]
  ? DeepReadonlyArray12527<U>
  : T extends object
  ? DeepReadonlyObject12527<T>
  : T;

interface DeepReadonlyArray12527<T> extends ReadonlyArray<DeepReadonly12527<T>> {}

type DeepReadonlyObject12527<T> = {
  readonly [P in keyof T]: DeepReadonly12527<T[P]>;
};

type UnionToIntersection12527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12527<T> = UnionToIntersection12527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12527<T extends unknown[], V> = [...T, V];

type TuplifyUnion12527<T, L = LastOf12527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12527<TuplifyUnion12527<Exclude<T, L>>, L>;

type DeepPartial12527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12527<T[P]> }
  : T;

type Paths12527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12527<K, Paths12527<T[K], Prev12527[D]>> : never }[keyof T]
  : never;

type Prev12527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12527 {
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

type ConfigPaths12527 = Paths12527<NestedConfig12527>;

interface HeavyProps12527 {
  config: DeepPartial12527<NestedConfig12527>;
  path?: ConfigPaths12527;
}

const HeavyComponent12527 = memo(function HeavyComponent12527({ config }: HeavyProps12527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12527.displayName = 'HeavyComponent12527';
export default HeavyComponent12527;

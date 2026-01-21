'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12877<T> = T extends (infer U)[]
  ? DeepReadonlyArray12877<U>
  : T extends object
  ? DeepReadonlyObject12877<T>
  : T;

interface DeepReadonlyArray12877<T> extends ReadonlyArray<DeepReadonly12877<T>> {}

type DeepReadonlyObject12877<T> = {
  readonly [P in keyof T]: DeepReadonly12877<T[P]>;
};

type UnionToIntersection12877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12877<T> = UnionToIntersection12877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12877<T extends unknown[], V> = [...T, V];

type TuplifyUnion12877<T, L = LastOf12877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12877<TuplifyUnion12877<Exclude<T, L>>, L>;

type DeepPartial12877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12877<T[P]> }
  : T;

type Paths12877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12877<K, Paths12877<T[K], Prev12877[D]>> : never }[keyof T]
  : never;

type Prev12877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12877 {
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

type ConfigPaths12877 = Paths12877<NestedConfig12877>;

interface HeavyProps12877 {
  config: DeepPartial12877<NestedConfig12877>;
  path?: ConfigPaths12877;
}

const HeavyComponent12877 = memo(function HeavyComponent12877({ config }: HeavyProps12877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12877.displayName = 'HeavyComponent12877';
export default HeavyComponent12877;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12718<T> = T extends (infer U)[]
  ? DeepReadonlyArray12718<U>
  : T extends object
  ? DeepReadonlyObject12718<T>
  : T;

interface DeepReadonlyArray12718<T> extends ReadonlyArray<DeepReadonly12718<T>> {}

type DeepReadonlyObject12718<T> = {
  readonly [P in keyof T]: DeepReadonly12718<T[P]>;
};

type UnionToIntersection12718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12718<T> = UnionToIntersection12718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12718<T extends unknown[], V> = [...T, V];

type TuplifyUnion12718<T, L = LastOf12718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12718<TuplifyUnion12718<Exclude<T, L>>, L>;

type DeepPartial12718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12718<T[P]> }
  : T;

type Paths12718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12718<K, Paths12718<T[K], Prev12718[D]>> : never }[keyof T]
  : never;

type Prev12718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12718 {
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

type ConfigPaths12718 = Paths12718<NestedConfig12718>;

interface HeavyProps12718 {
  config: DeepPartial12718<NestedConfig12718>;
  path?: ConfigPaths12718;
}

const HeavyComponent12718 = memo(function HeavyComponent12718({ config }: HeavyProps12718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12718.displayName = 'HeavyComponent12718';
export default HeavyComponent12718;

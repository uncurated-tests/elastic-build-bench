'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12418<T> = T extends (infer U)[]
  ? DeepReadonlyArray12418<U>
  : T extends object
  ? DeepReadonlyObject12418<T>
  : T;

interface DeepReadonlyArray12418<T> extends ReadonlyArray<DeepReadonly12418<T>> {}

type DeepReadonlyObject12418<T> = {
  readonly [P in keyof T]: DeepReadonly12418<T[P]>;
};

type UnionToIntersection12418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12418<T> = UnionToIntersection12418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12418<T extends unknown[], V> = [...T, V];

type TuplifyUnion12418<T, L = LastOf12418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12418<TuplifyUnion12418<Exclude<T, L>>, L>;

type DeepPartial12418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12418<T[P]> }
  : T;

type Paths12418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12418<K, Paths12418<T[K], Prev12418[D]>> : never }[keyof T]
  : never;

type Prev12418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12418 {
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

type ConfigPaths12418 = Paths12418<NestedConfig12418>;

interface HeavyProps12418 {
  config: DeepPartial12418<NestedConfig12418>;
  path?: ConfigPaths12418;
}

const HeavyComponent12418 = memo(function HeavyComponent12418({ config }: HeavyProps12418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12418.displayName = 'HeavyComponent12418';
export default HeavyComponent12418;

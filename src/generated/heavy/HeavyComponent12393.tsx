'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12393<T> = T extends (infer U)[]
  ? DeepReadonlyArray12393<U>
  : T extends object
  ? DeepReadonlyObject12393<T>
  : T;

interface DeepReadonlyArray12393<T> extends ReadonlyArray<DeepReadonly12393<T>> {}

type DeepReadonlyObject12393<T> = {
  readonly [P in keyof T]: DeepReadonly12393<T[P]>;
};

type UnionToIntersection12393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12393<T> = UnionToIntersection12393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12393<T extends unknown[], V> = [...T, V];

type TuplifyUnion12393<T, L = LastOf12393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12393<TuplifyUnion12393<Exclude<T, L>>, L>;

type DeepPartial12393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12393<T[P]> }
  : T;

type Paths12393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12393<K, Paths12393<T[K], Prev12393[D]>> : never }[keyof T]
  : never;

type Prev12393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12393 {
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

type ConfigPaths12393 = Paths12393<NestedConfig12393>;

interface HeavyProps12393 {
  config: DeepPartial12393<NestedConfig12393>;
  path?: ConfigPaths12393;
}

const HeavyComponent12393 = memo(function HeavyComponent12393({ config }: HeavyProps12393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12393.displayName = 'HeavyComponent12393';
export default HeavyComponent12393;

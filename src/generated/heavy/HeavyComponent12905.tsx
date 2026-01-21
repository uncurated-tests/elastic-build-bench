'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12905<T> = T extends (infer U)[]
  ? DeepReadonlyArray12905<U>
  : T extends object
  ? DeepReadonlyObject12905<T>
  : T;

interface DeepReadonlyArray12905<T> extends ReadonlyArray<DeepReadonly12905<T>> {}

type DeepReadonlyObject12905<T> = {
  readonly [P in keyof T]: DeepReadonly12905<T[P]>;
};

type UnionToIntersection12905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12905<T> = UnionToIntersection12905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12905<T extends unknown[], V> = [...T, V];

type TuplifyUnion12905<T, L = LastOf12905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12905<TuplifyUnion12905<Exclude<T, L>>, L>;

type DeepPartial12905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12905<T[P]> }
  : T;

type Paths12905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12905<K, Paths12905<T[K], Prev12905[D]>> : never }[keyof T]
  : never;

type Prev12905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12905 {
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

type ConfigPaths12905 = Paths12905<NestedConfig12905>;

interface HeavyProps12905 {
  config: DeepPartial12905<NestedConfig12905>;
  path?: ConfigPaths12905;
}

const HeavyComponent12905 = memo(function HeavyComponent12905({ config }: HeavyProps12905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12905.displayName = 'HeavyComponent12905';
export default HeavyComponent12905;

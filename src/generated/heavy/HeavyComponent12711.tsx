'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12711<T> = T extends (infer U)[]
  ? DeepReadonlyArray12711<U>
  : T extends object
  ? DeepReadonlyObject12711<T>
  : T;

interface DeepReadonlyArray12711<T> extends ReadonlyArray<DeepReadonly12711<T>> {}

type DeepReadonlyObject12711<T> = {
  readonly [P in keyof T]: DeepReadonly12711<T[P]>;
};

type UnionToIntersection12711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12711<T> = UnionToIntersection12711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12711<T extends unknown[], V> = [...T, V];

type TuplifyUnion12711<T, L = LastOf12711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12711<TuplifyUnion12711<Exclude<T, L>>, L>;

type DeepPartial12711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12711<T[P]> }
  : T;

type Paths12711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12711<K, Paths12711<T[K], Prev12711[D]>> : never }[keyof T]
  : never;

type Prev12711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12711 {
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

type ConfigPaths12711 = Paths12711<NestedConfig12711>;

interface HeavyProps12711 {
  config: DeepPartial12711<NestedConfig12711>;
  path?: ConfigPaths12711;
}

const HeavyComponent12711 = memo(function HeavyComponent12711({ config }: HeavyProps12711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12711.displayName = 'HeavyComponent12711';
export default HeavyComponent12711;

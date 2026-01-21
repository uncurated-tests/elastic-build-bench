'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12776<T> = T extends (infer U)[]
  ? DeepReadonlyArray12776<U>
  : T extends object
  ? DeepReadonlyObject12776<T>
  : T;

interface DeepReadonlyArray12776<T> extends ReadonlyArray<DeepReadonly12776<T>> {}

type DeepReadonlyObject12776<T> = {
  readonly [P in keyof T]: DeepReadonly12776<T[P]>;
};

type UnionToIntersection12776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12776<T> = UnionToIntersection12776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12776<T extends unknown[], V> = [...T, V];

type TuplifyUnion12776<T, L = LastOf12776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12776<TuplifyUnion12776<Exclude<T, L>>, L>;

type DeepPartial12776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12776<T[P]> }
  : T;

type Paths12776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12776<K, Paths12776<T[K], Prev12776[D]>> : never }[keyof T]
  : never;

type Prev12776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12776 {
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

type ConfigPaths12776 = Paths12776<NestedConfig12776>;

interface HeavyProps12776 {
  config: DeepPartial12776<NestedConfig12776>;
  path?: ConfigPaths12776;
}

const HeavyComponent12776 = memo(function HeavyComponent12776({ config }: HeavyProps12776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12776.displayName = 'HeavyComponent12776';
export default HeavyComponent12776;

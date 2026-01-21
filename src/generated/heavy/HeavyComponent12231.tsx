'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12231<T> = T extends (infer U)[]
  ? DeepReadonlyArray12231<U>
  : T extends object
  ? DeepReadonlyObject12231<T>
  : T;

interface DeepReadonlyArray12231<T> extends ReadonlyArray<DeepReadonly12231<T>> {}

type DeepReadonlyObject12231<T> = {
  readonly [P in keyof T]: DeepReadonly12231<T[P]>;
};

type UnionToIntersection12231<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12231<T> = UnionToIntersection12231<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12231<T extends unknown[], V> = [...T, V];

type TuplifyUnion12231<T, L = LastOf12231<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12231<TuplifyUnion12231<Exclude<T, L>>, L>;

type DeepPartial12231<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12231<T[P]> }
  : T;

type Paths12231<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12231<K, Paths12231<T[K], Prev12231[D]>> : never }[keyof T]
  : never;

type Prev12231 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12231<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12231 {
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

type ConfigPaths12231 = Paths12231<NestedConfig12231>;

interface HeavyProps12231 {
  config: DeepPartial12231<NestedConfig12231>;
  path?: ConfigPaths12231;
}

const HeavyComponent12231 = memo(function HeavyComponent12231({ config }: HeavyProps12231) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12231) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12231 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12231: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12231.displayName = 'HeavyComponent12231';
export default HeavyComponent12231;

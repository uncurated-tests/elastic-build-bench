'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2664<T> = T extends (infer U)[]
  ? DeepReadonlyArray2664<U>
  : T extends object
  ? DeepReadonlyObject2664<T>
  : T;

interface DeepReadonlyArray2664<T> extends ReadonlyArray<DeepReadonly2664<T>> {}

type DeepReadonlyObject2664<T> = {
  readonly [P in keyof T]: DeepReadonly2664<T[P]>;
};

type UnionToIntersection2664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2664<T> = UnionToIntersection2664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2664<T extends unknown[], V> = [...T, V];

type TuplifyUnion2664<T, L = LastOf2664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2664<TuplifyUnion2664<Exclude<T, L>>, L>;

type DeepPartial2664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2664<T[P]> }
  : T;

type Paths2664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2664<K, Paths2664<T[K], Prev2664[D]>> : never }[keyof T]
  : never;

type Prev2664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2664 {
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

type ConfigPaths2664 = Paths2664<NestedConfig2664>;

interface HeavyProps2664 {
  config: DeepPartial2664<NestedConfig2664>;
  path?: ConfigPaths2664;
}

const HeavyComponent2664 = memo(function HeavyComponent2664({ config }: HeavyProps2664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2664.displayName = 'HeavyComponent2664';
export default HeavyComponent2664;

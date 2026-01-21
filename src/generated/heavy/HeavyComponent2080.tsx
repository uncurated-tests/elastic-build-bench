'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2080<T> = T extends (infer U)[]
  ? DeepReadonlyArray2080<U>
  : T extends object
  ? DeepReadonlyObject2080<T>
  : T;

interface DeepReadonlyArray2080<T> extends ReadonlyArray<DeepReadonly2080<T>> {}

type DeepReadonlyObject2080<T> = {
  readonly [P in keyof T]: DeepReadonly2080<T[P]>;
};

type UnionToIntersection2080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2080<T> = UnionToIntersection2080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2080<T extends unknown[], V> = [...T, V];

type TuplifyUnion2080<T, L = LastOf2080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2080<TuplifyUnion2080<Exclude<T, L>>, L>;

type DeepPartial2080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2080<T[P]> }
  : T;

type Paths2080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2080<K, Paths2080<T[K], Prev2080[D]>> : never }[keyof T]
  : never;

type Prev2080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2080 {
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

type ConfigPaths2080 = Paths2080<NestedConfig2080>;

interface HeavyProps2080 {
  config: DeepPartial2080<NestedConfig2080>;
  path?: ConfigPaths2080;
}

const HeavyComponent2080 = memo(function HeavyComponent2080({ config }: HeavyProps2080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2080.displayName = 'HeavyComponent2080';
export default HeavyComponent2080;

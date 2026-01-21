'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2854<T> = T extends (infer U)[]
  ? DeepReadonlyArray2854<U>
  : T extends object
  ? DeepReadonlyObject2854<T>
  : T;

interface DeepReadonlyArray2854<T> extends ReadonlyArray<DeepReadonly2854<T>> {}

type DeepReadonlyObject2854<T> = {
  readonly [P in keyof T]: DeepReadonly2854<T[P]>;
};

type UnionToIntersection2854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2854<T> = UnionToIntersection2854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2854<T extends unknown[], V> = [...T, V];

type TuplifyUnion2854<T, L = LastOf2854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2854<TuplifyUnion2854<Exclude<T, L>>, L>;

type DeepPartial2854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2854<T[P]> }
  : T;

type Paths2854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2854<K, Paths2854<T[K], Prev2854[D]>> : never }[keyof T]
  : never;

type Prev2854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2854 {
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

type ConfigPaths2854 = Paths2854<NestedConfig2854>;

interface HeavyProps2854 {
  config: DeepPartial2854<NestedConfig2854>;
  path?: ConfigPaths2854;
}

const HeavyComponent2854 = memo(function HeavyComponent2854({ config }: HeavyProps2854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2854.displayName = 'HeavyComponent2854';
export default HeavyComponent2854;

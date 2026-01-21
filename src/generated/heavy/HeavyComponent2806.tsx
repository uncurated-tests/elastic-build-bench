'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2806<T> = T extends (infer U)[]
  ? DeepReadonlyArray2806<U>
  : T extends object
  ? DeepReadonlyObject2806<T>
  : T;

interface DeepReadonlyArray2806<T> extends ReadonlyArray<DeepReadonly2806<T>> {}

type DeepReadonlyObject2806<T> = {
  readonly [P in keyof T]: DeepReadonly2806<T[P]>;
};

type UnionToIntersection2806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2806<T> = UnionToIntersection2806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2806<T extends unknown[], V> = [...T, V];

type TuplifyUnion2806<T, L = LastOf2806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2806<TuplifyUnion2806<Exclude<T, L>>, L>;

type DeepPartial2806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2806<T[P]> }
  : T;

type Paths2806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2806<K, Paths2806<T[K], Prev2806[D]>> : never }[keyof T]
  : never;

type Prev2806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2806 {
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

type ConfigPaths2806 = Paths2806<NestedConfig2806>;

interface HeavyProps2806 {
  config: DeepPartial2806<NestedConfig2806>;
  path?: ConfigPaths2806;
}

const HeavyComponent2806 = memo(function HeavyComponent2806({ config }: HeavyProps2806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2806.displayName = 'HeavyComponent2806';
export default HeavyComponent2806;

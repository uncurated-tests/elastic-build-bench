'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2880<T> = T extends (infer U)[]
  ? DeepReadonlyArray2880<U>
  : T extends object
  ? DeepReadonlyObject2880<T>
  : T;

interface DeepReadonlyArray2880<T> extends ReadonlyArray<DeepReadonly2880<T>> {}

type DeepReadonlyObject2880<T> = {
  readonly [P in keyof T]: DeepReadonly2880<T[P]>;
};

type UnionToIntersection2880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2880<T> = UnionToIntersection2880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2880<T extends unknown[], V> = [...T, V];

type TuplifyUnion2880<T, L = LastOf2880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2880<TuplifyUnion2880<Exclude<T, L>>, L>;

type DeepPartial2880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2880<T[P]> }
  : T;

type Paths2880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2880<K, Paths2880<T[K], Prev2880[D]>> : never }[keyof T]
  : never;

type Prev2880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2880 {
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

type ConfigPaths2880 = Paths2880<NestedConfig2880>;

interface HeavyProps2880 {
  config: DeepPartial2880<NestedConfig2880>;
  path?: ConfigPaths2880;
}

const HeavyComponent2880 = memo(function HeavyComponent2880({ config }: HeavyProps2880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2880.displayName = 'HeavyComponent2880';
export default HeavyComponent2880;

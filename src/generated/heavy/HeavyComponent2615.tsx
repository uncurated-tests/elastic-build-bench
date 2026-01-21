'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2615<T> = T extends (infer U)[]
  ? DeepReadonlyArray2615<U>
  : T extends object
  ? DeepReadonlyObject2615<T>
  : T;

interface DeepReadonlyArray2615<T> extends ReadonlyArray<DeepReadonly2615<T>> {}

type DeepReadonlyObject2615<T> = {
  readonly [P in keyof T]: DeepReadonly2615<T[P]>;
};

type UnionToIntersection2615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2615<T> = UnionToIntersection2615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2615<T extends unknown[], V> = [...T, V];

type TuplifyUnion2615<T, L = LastOf2615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2615<TuplifyUnion2615<Exclude<T, L>>, L>;

type DeepPartial2615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2615<T[P]> }
  : T;

type Paths2615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2615<K, Paths2615<T[K], Prev2615[D]>> : never }[keyof T]
  : never;

type Prev2615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2615 {
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

type ConfigPaths2615 = Paths2615<NestedConfig2615>;

interface HeavyProps2615 {
  config: DeepPartial2615<NestedConfig2615>;
  path?: ConfigPaths2615;
}

const HeavyComponent2615 = memo(function HeavyComponent2615({ config }: HeavyProps2615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2615.displayName = 'HeavyComponent2615';
export default HeavyComponent2615;

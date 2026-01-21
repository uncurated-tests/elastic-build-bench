'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2660<T> = T extends (infer U)[]
  ? DeepReadonlyArray2660<U>
  : T extends object
  ? DeepReadonlyObject2660<T>
  : T;

interface DeepReadonlyArray2660<T> extends ReadonlyArray<DeepReadonly2660<T>> {}

type DeepReadonlyObject2660<T> = {
  readonly [P in keyof T]: DeepReadonly2660<T[P]>;
};

type UnionToIntersection2660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2660<T> = UnionToIntersection2660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2660<T extends unknown[], V> = [...T, V];

type TuplifyUnion2660<T, L = LastOf2660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2660<TuplifyUnion2660<Exclude<T, L>>, L>;

type DeepPartial2660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2660<T[P]> }
  : T;

type Paths2660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2660<K, Paths2660<T[K], Prev2660[D]>> : never }[keyof T]
  : never;

type Prev2660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2660 {
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

type ConfigPaths2660 = Paths2660<NestedConfig2660>;

interface HeavyProps2660 {
  config: DeepPartial2660<NestedConfig2660>;
  path?: ConfigPaths2660;
}

const HeavyComponent2660 = memo(function HeavyComponent2660({ config }: HeavyProps2660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2660.displayName = 'HeavyComponent2660';
export default HeavyComponent2660;

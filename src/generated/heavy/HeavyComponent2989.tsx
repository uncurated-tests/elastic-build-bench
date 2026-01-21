'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2989<T> = T extends (infer U)[]
  ? DeepReadonlyArray2989<U>
  : T extends object
  ? DeepReadonlyObject2989<T>
  : T;

interface DeepReadonlyArray2989<T> extends ReadonlyArray<DeepReadonly2989<T>> {}

type DeepReadonlyObject2989<T> = {
  readonly [P in keyof T]: DeepReadonly2989<T[P]>;
};

type UnionToIntersection2989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2989<T> = UnionToIntersection2989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2989<T extends unknown[], V> = [...T, V];

type TuplifyUnion2989<T, L = LastOf2989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2989<TuplifyUnion2989<Exclude<T, L>>, L>;

type DeepPartial2989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2989<T[P]> }
  : T;

type Paths2989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2989<K, Paths2989<T[K], Prev2989[D]>> : never }[keyof T]
  : never;

type Prev2989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2989 {
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

type ConfigPaths2989 = Paths2989<NestedConfig2989>;

interface HeavyProps2989 {
  config: DeepPartial2989<NestedConfig2989>;
  path?: ConfigPaths2989;
}

const HeavyComponent2989 = memo(function HeavyComponent2989({ config }: HeavyProps2989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2989.displayName = 'HeavyComponent2989';
export default HeavyComponent2989;

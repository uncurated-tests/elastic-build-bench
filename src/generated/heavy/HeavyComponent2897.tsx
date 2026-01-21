'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2897<T> = T extends (infer U)[]
  ? DeepReadonlyArray2897<U>
  : T extends object
  ? DeepReadonlyObject2897<T>
  : T;

interface DeepReadonlyArray2897<T> extends ReadonlyArray<DeepReadonly2897<T>> {}

type DeepReadonlyObject2897<T> = {
  readonly [P in keyof T]: DeepReadonly2897<T[P]>;
};

type UnionToIntersection2897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2897<T> = UnionToIntersection2897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2897<T extends unknown[], V> = [...T, V];

type TuplifyUnion2897<T, L = LastOf2897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2897<TuplifyUnion2897<Exclude<T, L>>, L>;

type DeepPartial2897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2897<T[P]> }
  : T;

type Paths2897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2897<K, Paths2897<T[K], Prev2897[D]>> : never }[keyof T]
  : never;

type Prev2897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2897 {
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

type ConfigPaths2897 = Paths2897<NestedConfig2897>;

interface HeavyProps2897 {
  config: DeepPartial2897<NestedConfig2897>;
  path?: ConfigPaths2897;
}

const HeavyComponent2897 = memo(function HeavyComponent2897({ config }: HeavyProps2897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2897.displayName = 'HeavyComponent2897';
export default HeavyComponent2897;

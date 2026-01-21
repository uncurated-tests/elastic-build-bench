'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2940<T> = T extends (infer U)[]
  ? DeepReadonlyArray2940<U>
  : T extends object
  ? DeepReadonlyObject2940<T>
  : T;

interface DeepReadonlyArray2940<T> extends ReadonlyArray<DeepReadonly2940<T>> {}

type DeepReadonlyObject2940<T> = {
  readonly [P in keyof T]: DeepReadonly2940<T[P]>;
};

type UnionToIntersection2940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2940<T> = UnionToIntersection2940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2940<T extends unknown[], V> = [...T, V];

type TuplifyUnion2940<T, L = LastOf2940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2940<TuplifyUnion2940<Exclude<T, L>>, L>;

type DeepPartial2940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2940<T[P]> }
  : T;

type Paths2940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2940<K, Paths2940<T[K], Prev2940[D]>> : never }[keyof T]
  : never;

type Prev2940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2940 {
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

type ConfigPaths2940 = Paths2940<NestedConfig2940>;

interface HeavyProps2940 {
  config: DeepPartial2940<NestedConfig2940>;
  path?: ConfigPaths2940;
}

const HeavyComponent2940 = memo(function HeavyComponent2940({ config }: HeavyProps2940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2940.displayName = 'HeavyComponent2940';
export default HeavyComponent2940;

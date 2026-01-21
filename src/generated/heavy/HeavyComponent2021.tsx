'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2021<T> = T extends (infer U)[]
  ? DeepReadonlyArray2021<U>
  : T extends object
  ? DeepReadonlyObject2021<T>
  : T;

interface DeepReadonlyArray2021<T> extends ReadonlyArray<DeepReadonly2021<T>> {}

type DeepReadonlyObject2021<T> = {
  readonly [P in keyof T]: DeepReadonly2021<T[P]>;
};

type UnionToIntersection2021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2021<T> = UnionToIntersection2021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2021<T extends unknown[], V> = [...T, V];

type TuplifyUnion2021<T, L = LastOf2021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2021<TuplifyUnion2021<Exclude<T, L>>, L>;

type DeepPartial2021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2021<T[P]> }
  : T;

type Paths2021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2021<K, Paths2021<T[K], Prev2021[D]>> : never }[keyof T]
  : never;

type Prev2021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2021 {
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

type ConfigPaths2021 = Paths2021<NestedConfig2021>;

interface HeavyProps2021 {
  config: DeepPartial2021<NestedConfig2021>;
  path?: ConfigPaths2021;
}

const HeavyComponent2021 = memo(function HeavyComponent2021({ config }: HeavyProps2021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2021.displayName = 'HeavyComponent2021';
export default HeavyComponent2021;

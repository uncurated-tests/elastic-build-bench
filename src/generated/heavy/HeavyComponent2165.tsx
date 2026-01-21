'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2165<T> = T extends (infer U)[]
  ? DeepReadonlyArray2165<U>
  : T extends object
  ? DeepReadonlyObject2165<T>
  : T;

interface DeepReadonlyArray2165<T> extends ReadonlyArray<DeepReadonly2165<T>> {}

type DeepReadonlyObject2165<T> = {
  readonly [P in keyof T]: DeepReadonly2165<T[P]>;
};

type UnionToIntersection2165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2165<T> = UnionToIntersection2165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2165<T extends unknown[], V> = [...T, V];

type TuplifyUnion2165<T, L = LastOf2165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2165<TuplifyUnion2165<Exclude<T, L>>, L>;

type DeepPartial2165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2165<T[P]> }
  : T;

type Paths2165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2165<K, Paths2165<T[K], Prev2165[D]>> : never }[keyof T]
  : never;

type Prev2165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2165 {
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

type ConfigPaths2165 = Paths2165<NestedConfig2165>;

interface HeavyProps2165 {
  config: DeepPartial2165<NestedConfig2165>;
  path?: ConfigPaths2165;
}

const HeavyComponent2165 = memo(function HeavyComponent2165({ config }: HeavyProps2165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2165.displayName = 'HeavyComponent2165';
export default HeavyComponent2165;

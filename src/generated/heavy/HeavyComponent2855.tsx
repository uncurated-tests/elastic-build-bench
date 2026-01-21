'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2855<T> = T extends (infer U)[]
  ? DeepReadonlyArray2855<U>
  : T extends object
  ? DeepReadonlyObject2855<T>
  : T;

interface DeepReadonlyArray2855<T> extends ReadonlyArray<DeepReadonly2855<T>> {}

type DeepReadonlyObject2855<T> = {
  readonly [P in keyof T]: DeepReadonly2855<T[P]>;
};

type UnionToIntersection2855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2855<T> = UnionToIntersection2855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2855<T extends unknown[], V> = [...T, V];

type TuplifyUnion2855<T, L = LastOf2855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2855<TuplifyUnion2855<Exclude<T, L>>, L>;

type DeepPartial2855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2855<T[P]> }
  : T;

type Paths2855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2855<K, Paths2855<T[K], Prev2855[D]>> : never }[keyof T]
  : never;

type Prev2855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2855 {
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

type ConfigPaths2855 = Paths2855<NestedConfig2855>;

interface HeavyProps2855 {
  config: DeepPartial2855<NestedConfig2855>;
  path?: ConfigPaths2855;
}

const HeavyComponent2855 = memo(function HeavyComponent2855({ config }: HeavyProps2855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2855.displayName = 'HeavyComponent2855';
export default HeavyComponent2855;

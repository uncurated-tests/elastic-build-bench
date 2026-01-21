'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2109<T> = T extends (infer U)[]
  ? DeepReadonlyArray2109<U>
  : T extends object
  ? DeepReadonlyObject2109<T>
  : T;

interface DeepReadonlyArray2109<T> extends ReadonlyArray<DeepReadonly2109<T>> {}

type DeepReadonlyObject2109<T> = {
  readonly [P in keyof T]: DeepReadonly2109<T[P]>;
};

type UnionToIntersection2109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2109<T> = UnionToIntersection2109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2109<T extends unknown[], V> = [...T, V];

type TuplifyUnion2109<T, L = LastOf2109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2109<TuplifyUnion2109<Exclude<T, L>>, L>;

type DeepPartial2109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2109<T[P]> }
  : T;

type Paths2109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2109<K, Paths2109<T[K], Prev2109[D]>> : never }[keyof T]
  : never;

type Prev2109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2109 {
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

type ConfigPaths2109 = Paths2109<NestedConfig2109>;

interface HeavyProps2109 {
  config: DeepPartial2109<NestedConfig2109>;
  path?: ConfigPaths2109;
}

const HeavyComponent2109 = memo(function HeavyComponent2109({ config }: HeavyProps2109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2109.displayName = 'HeavyComponent2109';
export default HeavyComponent2109;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2973<T> = T extends (infer U)[]
  ? DeepReadonlyArray2973<U>
  : T extends object
  ? DeepReadonlyObject2973<T>
  : T;

interface DeepReadonlyArray2973<T> extends ReadonlyArray<DeepReadonly2973<T>> {}

type DeepReadonlyObject2973<T> = {
  readonly [P in keyof T]: DeepReadonly2973<T[P]>;
};

type UnionToIntersection2973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2973<T> = UnionToIntersection2973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2973<T extends unknown[], V> = [...T, V];

type TuplifyUnion2973<T, L = LastOf2973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2973<TuplifyUnion2973<Exclude<T, L>>, L>;

type DeepPartial2973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2973<T[P]> }
  : T;

type Paths2973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2973<K, Paths2973<T[K], Prev2973[D]>> : never }[keyof T]
  : never;

type Prev2973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2973 {
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

type ConfigPaths2973 = Paths2973<NestedConfig2973>;

interface HeavyProps2973 {
  config: DeepPartial2973<NestedConfig2973>;
  path?: ConfigPaths2973;
}

const HeavyComponent2973 = memo(function HeavyComponent2973({ config }: HeavyProps2973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2973.displayName = 'HeavyComponent2973';
export default HeavyComponent2973;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2507<T> = T extends (infer U)[]
  ? DeepReadonlyArray2507<U>
  : T extends object
  ? DeepReadonlyObject2507<T>
  : T;

interface DeepReadonlyArray2507<T> extends ReadonlyArray<DeepReadonly2507<T>> {}

type DeepReadonlyObject2507<T> = {
  readonly [P in keyof T]: DeepReadonly2507<T[P]>;
};

type UnionToIntersection2507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2507<T> = UnionToIntersection2507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2507<T extends unknown[], V> = [...T, V];

type TuplifyUnion2507<T, L = LastOf2507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2507<TuplifyUnion2507<Exclude<T, L>>, L>;

type DeepPartial2507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2507<T[P]> }
  : T;

type Paths2507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2507<K, Paths2507<T[K], Prev2507[D]>> : never }[keyof T]
  : never;

type Prev2507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2507 {
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

type ConfigPaths2507 = Paths2507<NestedConfig2507>;

interface HeavyProps2507 {
  config: DeepPartial2507<NestedConfig2507>;
  path?: ConfigPaths2507;
}

const HeavyComponent2507 = memo(function HeavyComponent2507({ config }: HeavyProps2507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2507.displayName = 'HeavyComponent2507';
export default HeavyComponent2507;

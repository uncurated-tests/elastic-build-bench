'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2476<T> = T extends (infer U)[]
  ? DeepReadonlyArray2476<U>
  : T extends object
  ? DeepReadonlyObject2476<T>
  : T;

interface DeepReadonlyArray2476<T> extends ReadonlyArray<DeepReadonly2476<T>> {}

type DeepReadonlyObject2476<T> = {
  readonly [P in keyof T]: DeepReadonly2476<T[P]>;
};

type UnionToIntersection2476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2476<T> = UnionToIntersection2476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2476<T extends unknown[], V> = [...T, V];

type TuplifyUnion2476<T, L = LastOf2476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2476<TuplifyUnion2476<Exclude<T, L>>, L>;

type DeepPartial2476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2476<T[P]> }
  : T;

type Paths2476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2476<K, Paths2476<T[K], Prev2476[D]>> : never }[keyof T]
  : never;

type Prev2476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2476 {
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

type ConfigPaths2476 = Paths2476<NestedConfig2476>;

interface HeavyProps2476 {
  config: DeepPartial2476<NestedConfig2476>;
  path?: ConfigPaths2476;
}

const HeavyComponent2476 = memo(function HeavyComponent2476({ config }: HeavyProps2476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2476.displayName = 'HeavyComponent2476';
export default HeavyComponent2476;

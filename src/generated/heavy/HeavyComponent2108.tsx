'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2108<T> = T extends (infer U)[]
  ? DeepReadonlyArray2108<U>
  : T extends object
  ? DeepReadonlyObject2108<T>
  : T;

interface DeepReadonlyArray2108<T> extends ReadonlyArray<DeepReadonly2108<T>> {}

type DeepReadonlyObject2108<T> = {
  readonly [P in keyof T]: DeepReadonly2108<T[P]>;
};

type UnionToIntersection2108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2108<T> = UnionToIntersection2108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2108<T extends unknown[], V> = [...T, V];

type TuplifyUnion2108<T, L = LastOf2108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2108<TuplifyUnion2108<Exclude<T, L>>, L>;

type DeepPartial2108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2108<T[P]> }
  : T;

type Paths2108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2108<K, Paths2108<T[K], Prev2108[D]>> : never }[keyof T]
  : never;

type Prev2108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2108 {
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

type ConfigPaths2108 = Paths2108<NestedConfig2108>;

interface HeavyProps2108 {
  config: DeepPartial2108<NestedConfig2108>;
  path?: ConfigPaths2108;
}

const HeavyComponent2108 = memo(function HeavyComponent2108({ config }: HeavyProps2108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2108.displayName = 'HeavyComponent2108';
export default HeavyComponent2108;

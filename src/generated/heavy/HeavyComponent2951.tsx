'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2951<T> = T extends (infer U)[]
  ? DeepReadonlyArray2951<U>
  : T extends object
  ? DeepReadonlyObject2951<T>
  : T;

interface DeepReadonlyArray2951<T> extends ReadonlyArray<DeepReadonly2951<T>> {}

type DeepReadonlyObject2951<T> = {
  readonly [P in keyof T]: DeepReadonly2951<T[P]>;
};

type UnionToIntersection2951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2951<T> = UnionToIntersection2951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2951<T extends unknown[], V> = [...T, V];

type TuplifyUnion2951<T, L = LastOf2951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2951<TuplifyUnion2951<Exclude<T, L>>, L>;

type DeepPartial2951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2951<T[P]> }
  : T;

type Paths2951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2951<K, Paths2951<T[K], Prev2951[D]>> : never }[keyof T]
  : never;

type Prev2951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2951 {
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

type ConfigPaths2951 = Paths2951<NestedConfig2951>;

interface HeavyProps2951 {
  config: DeepPartial2951<NestedConfig2951>;
  path?: ConfigPaths2951;
}

const HeavyComponent2951 = memo(function HeavyComponent2951({ config }: HeavyProps2951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2951.displayName = 'HeavyComponent2951';
export default HeavyComponent2951;

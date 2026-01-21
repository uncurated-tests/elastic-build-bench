'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2321<T> = T extends (infer U)[]
  ? DeepReadonlyArray2321<U>
  : T extends object
  ? DeepReadonlyObject2321<T>
  : T;

interface DeepReadonlyArray2321<T> extends ReadonlyArray<DeepReadonly2321<T>> {}

type DeepReadonlyObject2321<T> = {
  readonly [P in keyof T]: DeepReadonly2321<T[P]>;
};

type UnionToIntersection2321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2321<T> = UnionToIntersection2321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2321<T extends unknown[], V> = [...T, V];

type TuplifyUnion2321<T, L = LastOf2321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2321<TuplifyUnion2321<Exclude<T, L>>, L>;

type DeepPartial2321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2321<T[P]> }
  : T;

type Paths2321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2321<K, Paths2321<T[K], Prev2321[D]>> : never }[keyof T]
  : never;

type Prev2321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2321 {
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

type ConfigPaths2321 = Paths2321<NestedConfig2321>;

interface HeavyProps2321 {
  config: DeepPartial2321<NestedConfig2321>;
  path?: ConfigPaths2321;
}

const HeavyComponent2321 = memo(function HeavyComponent2321({ config }: HeavyProps2321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2321.displayName = 'HeavyComponent2321';
export default HeavyComponent2321;

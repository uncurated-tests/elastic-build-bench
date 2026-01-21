'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2273<T> = T extends (infer U)[]
  ? DeepReadonlyArray2273<U>
  : T extends object
  ? DeepReadonlyObject2273<T>
  : T;

interface DeepReadonlyArray2273<T> extends ReadonlyArray<DeepReadonly2273<T>> {}

type DeepReadonlyObject2273<T> = {
  readonly [P in keyof T]: DeepReadonly2273<T[P]>;
};

type UnionToIntersection2273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2273<T> = UnionToIntersection2273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2273<T extends unknown[], V> = [...T, V];

type TuplifyUnion2273<T, L = LastOf2273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2273<TuplifyUnion2273<Exclude<T, L>>, L>;

type DeepPartial2273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2273<T[P]> }
  : T;

type Paths2273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2273<K, Paths2273<T[K], Prev2273[D]>> : never }[keyof T]
  : never;

type Prev2273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2273 {
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

type ConfigPaths2273 = Paths2273<NestedConfig2273>;

interface HeavyProps2273 {
  config: DeepPartial2273<NestedConfig2273>;
  path?: ConfigPaths2273;
}

const HeavyComponent2273 = memo(function HeavyComponent2273({ config }: HeavyProps2273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2273.displayName = 'HeavyComponent2273';
export default HeavyComponent2273;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2000<T> = T extends (infer U)[]
  ? DeepReadonlyArray2000<U>
  : T extends object
  ? DeepReadonlyObject2000<T>
  : T;

interface DeepReadonlyArray2000<T> extends ReadonlyArray<DeepReadonly2000<T>> {}

type DeepReadonlyObject2000<T> = {
  readonly [P in keyof T]: DeepReadonly2000<T[P]>;
};

type UnionToIntersection2000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2000<T> = UnionToIntersection2000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2000<T extends unknown[], V> = [...T, V];

type TuplifyUnion2000<T, L = LastOf2000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2000<TuplifyUnion2000<Exclude<T, L>>, L>;

type DeepPartial2000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2000<T[P]> }
  : T;

type Paths2000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2000<K, Paths2000<T[K], Prev2000[D]>> : never }[keyof T]
  : never;

type Prev2000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2000 {
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

type ConfigPaths2000 = Paths2000<NestedConfig2000>;

interface HeavyProps2000 {
  config: DeepPartial2000<NestedConfig2000>;
  path?: ConfigPaths2000;
}

const HeavyComponent2000 = memo(function HeavyComponent2000({ config }: HeavyProps2000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2000.displayName = 'HeavyComponent2000';
export default HeavyComponent2000;

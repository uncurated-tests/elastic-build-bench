'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2393<T> = T extends (infer U)[]
  ? DeepReadonlyArray2393<U>
  : T extends object
  ? DeepReadonlyObject2393<T>
  : T;

interface DeepReadonlyArray2393<T> extends ReadonlyArray<DeepReadonly2393<T>> {}

type DeepReadonlyObject2393<T> = {
  readonly [P in keyof T]: DeepReadonly2393<T[P]>;
};

type UnionToIntersection2393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2393<T> = UnionToIntersection2393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2393<T extends unknown[], V> = [...T, V];

type TuplifyUnion2393<T, L = LastOf2393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2393<TuplifyUnion2393<Exclude<T, L>>, L>;

type DeepPartial2393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2393<T[P]> }
  : T;

type Paths2393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2393<K, Paths2393<T[K], Prev2393[D]>> : never }[keyof T]
  : never;

type Prev2393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2393 {
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

type ConfigPaths2393 = Paths2393<NestedConfig2393>;

interface HeavyProps2393 {
  config: DeepPartial2393<NestedConfig2393>;
  path?: ConfigPaths2393;
}

const HeavyComponent2393 = memo(function HeavyComponent2393({ config }: HeavyProps2393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2393.displayName = 'HeavyComponent2393';
export default HeavyComponent2393;

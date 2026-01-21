'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3393<T> = T extends (infer U)[]
  ? DeepReadonlyArray3393<U>
  : T extends object
  ? DeepReadonlyObject3393<T>
  : T;

interface DeepReadonlyArray3393<T> extends ReadonlyArray<DeepReadonly3393<T>> {}

type DeepReadonlyObject3393<T> = {
  readonly [P in keyof T]: DeepReadonly3393<T[P]>;
};

type UnionToIntersection3393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3393<T> = UnionToIntersection3393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3393<T extends unknown[], V> = [...T, V];

type TuplifyUnion3393<T, L = LastOf3393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3393<TuplifyUnion3393<Exclude<T, L>>, L>;

type DeepPartial3393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3393<T[P]> }
  : T;

type Paths3393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3393<K, Paths3393<T[K], Prev3393[D]>> : never }[keyof T]
  : never;

type Prev3393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3393 {
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

type ConfigPaths3393 = Paths3393<NestedConfig3393>;

interface HeavyProps3393 {
  config: DeepPartial3393<NestedConfig3393>;
  path?: ConfigPaths3393;
}

const HeavyComponent3393 = memo(function HeavyComponent3393({ config }: HeavyProps3393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3393.displayName = 'HeavyComponent3393';
export default HeavyComponent3393;

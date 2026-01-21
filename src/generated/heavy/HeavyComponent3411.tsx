'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3411<T> = T extends (infer U)[]
  ? DeepReadonlyArray3411<U>
  : T extends object
  ? DeepReadonlyObject3411<T>
  : T;

interface DeepReadonlyArray3411<T> extends ReadonlyArray<DeepReadonly3411<T>> {}

type DeepReadonlyObject3411<T> = {
  readonly [P in keyof T]: DeepReadonly3411<T[P]>;
};

type UnionToIntersection3411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3411<T> = UnionToIntersection3411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3411<T extends unknown[], V> = [...T, V];

type TuplifyUnion3411<T, L = LastOf3411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3411<TuplifyUnion3411<Exclude<T, L>>, L>;

type DeepPartial3411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3411<T[P]> }
  : T;

type Paths3411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3411<K, Paths3411<T[K], Prev3411[D]>> : never }[keyof T]
  : never;

type Prev3411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3411 {
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

type ConfigPaths3411 = Paths3411<NestedConfig3411>;

interface HeavyProps3411 {
  config: DeepPartial3411<NestedConfig3411>;
  path?: ConfigPaths3411;
}

const HeavyComponent3411 = memo(function HeavyComponent3411({ config }: HeavyProps3411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3411.displayName = 'HeavyComponent3411';
export default HeavyComponent3411;

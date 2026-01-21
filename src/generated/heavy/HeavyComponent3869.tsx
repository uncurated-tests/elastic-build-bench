'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3869<T> = T extends (infer U)[]
  ? DeepReadonlyArray3869<U>
  : T extends object
  ? DeepReadonlyObject3869<T>
  : T;

interface DeepReadonlyArray3869<T> extends ReadonlyArray<DeepReadonly3869<T>> {}

type DeepReadonlyObject3869<T> = {
  readonly [P in keyof T]: DeepReadonly3869<T[P]>;
};

type UnionToIntersection3869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3869<T> = UnionToIntersection3869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3869<T extends unknown[], V> = [...T, V];

type TuplifyUnion3869<T, L = LastOf3869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3869<TuplifyUnion3869<Exclude<T, L>>, L>;

type DeepPartial3869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3869<T[P]> }
  : T;

type Paths3869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3869<K, Paths3869<T[K], Prev3869[D]>> : never }[keyof T]
  : never;

type Prev3869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3869 {
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

type ConfigPaths3869 = Paths3869<NestedConfig3869>;

interface HeavyProps3869 {
  config: DeepPartial3869<NestedConfig3869>;
  path?: ConfigPaths3869;
}

const HeavyComponent3869 = memo(function HeavyComponent3869({ config }: HeavyProps3869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3869.displayName = 'HeavyComponent3869';
export default HeavyComponent3869;

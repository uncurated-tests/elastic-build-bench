'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3121<T> = T extends (infer U)[]
  ? DeepReadonlyArray3121<U>
  : T extends object
  ? DeepReadonlyObject3121<T>
  : T;

interface DeepReadonlyArray3121<T> extends ReadonlyArray<DeepReadonly3121<T>> {}

type DeepReadonlyObject3121<T> = {
  readonly [P in keyof T]: DeepReadonly3121<T[P]>;
};

type UnionToIntersection3121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3121<T> = UnionToIntersection3121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3121<T extends unknown[], V> = [...T, V];

type TuplifyUnion3121<T, L = LastOf3121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3121<TuplifyUnion3121<Exclude<T, L>>, L>;

type DeepPartial3121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3121<T[P]> }
  : T;

type Paths3121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3121<K, Paths3121<T[K], Prev3121[D]>> : never }[keyof T]
  : never;

type Prev3121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3121 {
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

type ConfigPaths3121 = Paths3121<NestedConfig3121>;

interface HeavyProps3121 {
  config: DeepPartial3121<NestedConfig3121>;
  path?: ConfigPaths3121;
}

const HeavyComponent3121 = memo(function HeavyComponent3121({ config }: HeavyProps3121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3121.displayName = 'HeavyComponent3121';
export default HeavyComponent3121;

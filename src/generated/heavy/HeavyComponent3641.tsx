'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3641<T> = T extends (infer U)[]
  ? DeepReadonlyArray3641<U>
  : T extends object
  ? DeepReadonlyObject3641<T>
  : T;

interface DeepReadonlyArray3641<T> extends ReadonlyArray<DeepReadonly3641<T>> {}

type DeepReadonlyObject3641<T> = {
  readonly [P in keyof T]: DeepReadonly3641<T[P]>;
};

type UnionToIntersection3641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3641<T> = UnionToIntersection3641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3641<T extends unknown[], V> = [...T, V];

type TuplifyUnion3641<T, L = LastOf3641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3641<TuplifyUnion3641<Exclude<T, L>>, L>;

type DeepPartial3641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3641<T[P]> }
  : T;

type Paths3641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3641<K, Paths3641<T[K], Prev3641[D]>> : never }[keyof T]
  : never;

type Prev3641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3641 {
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

type ConfigPaths3641 = Paths3641<NestedConfig3641>;

interface HeavyProps3641 {
  config: DeepPartial3641<NestedConfig3641>;
  path?: ConfigPaths3641;
}

const HeavyComponent3641 = memo(function HeavyComponent3641({ config }: HeavyProps3641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3641.displayName = 'HeavyComponent3641';
export default HeavyComponent3641;

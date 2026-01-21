'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3867<T> = T extends (infer U)[]
  ? DeepReadonlyArray3867<U>
  : T extends object
  ? DeepReadonlyObject3867<T>
  : T;

interface DeepReadonlyArray3867<T> extends ReadonlyArray<DeepReadonly3867<T>> {}

type DeepReadonlyObject3867<T> = {
  readonly [P in keyof T]: DeepReadonly3867<T[P]>;
};

type UnionToIntersection3867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3867<T> = UnionToIntersection3867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3867<T extends unknown[], V> = [...T, V];

type TuplifyUnion3867<T, L = LastOf3867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3867<TuplifyUnion3867<Exclude<T, L>>, L>;

type DeepPartial3867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3867<T[P]> }
  : T;

type Paths3867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3867<K, Paths3867<T[K], Prev3867[D]>> : never }[keyof T]
  : never;

type Prev3867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3867 {
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

type ConfigPaths3867 = Paths3867<NestedConfig3867>;

interface HeavyProps3867 {
  config: DeepPartial3867<NestedConfig3867>;
  path?: ConfigPaths3867;
}

const HeavyComponent3867 = memo(function HeavyComponent3867({ config }: HeavyProps3867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3867.displayName = 'HeavyComponent3867';
export default HeavyComponent3867;

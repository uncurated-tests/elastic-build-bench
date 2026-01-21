'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3745<T> = T extends (infer U)[]
  ? DeepReadonlyArray3745<U>
  : T extends object
  ? DeepReadonlyObject3745<T>
  : T;

interface DeepReadonlyArray3745<T> extends ReadonlyArray<DeepReadonly3745<T>> {}

type DeepReadonlyObject3745<T> = {
  readonly [P in keyof T]: DeepReadonly3745<T[P]>;
};

type UnionToIntersection3745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3745<T> = UnionToIntersection3745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3745<T extends unknown[], V> = [...T, V];

type TuplifyUnion3745<T, L = LastOf3745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3745<TuplifyUnion3745<Exclude<T, L>>, L>;

type DeepPartial3745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3745<T[P]> }
  : T;

type Paths3745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3745<K, Paths3745<T[K], Prev3745[D]>> : never }[keyof T]
  : never;

type Prev3745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3745 {
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

type ConfigPaths3745 = Paths3745<NestedConfig3745>;

interface HeavyProps3745 {
  config: DeepPartial3745<NestedConfig3745>;
  path?: ConfigPaths3745;
}

const HeavyComponent3745 = memo(function HeavyComponent3745({ config }: HeavyProps3745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3745.displayName = 'HeavyComponent3745';
export default HeavyComponent3745;

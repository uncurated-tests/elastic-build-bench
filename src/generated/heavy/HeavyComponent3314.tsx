'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3314<T> = T extends (infer U)[]
  ? DeepReadonlyArray3314<U>
  : T extends object
  ? DeepReadonlyObject3314<T>
  : T;

interface DeepReadonlyArray3314<T> extends ReadonlyArray<DeepReadonly3314<T>> {}

type DeepReadonlyObject3314<T> = {
  readonly [P in keyof T]: DeepReadonly3314<T[P]>;
};

type UnionToIntersection3314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3314<T> = UnionToIntersection3314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3314<T extends unknown[], V> = [...T, V];

type TuplifyUnion3314<T, L = LastOf3314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3314<TuplifyUnion3314<Exclude<T, L>>, L>;

type DeepPartial3314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3314<T[P]> }
  : T;

type Paths3314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3314<K, Paths3314<T[K], Prev3314[D]>> : never }[keyof T]
  : never;

type Prev3314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3314 {
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

type ConfigPaths3314 = Paths3314<NestedConfig3314>;

interface HeavyProps3314 {
  config: DeepPartial3314<NestedConfig3314>;
  path?: ConfigPaths3314;
}

const HeavyComponent3314 = memo(function HeavyComponent3314({ config }: HeavyProps3314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3314.displayName = 'HeavyComponent3314';
export default HeavyComponent3314;

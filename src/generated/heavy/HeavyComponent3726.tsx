'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3726<T> = T extends (infer U)[]
  ? DeepReadonlyArray3726<U>
  : T extends object
  ? DeepReadonlyObject3726<T>
  : T;

interface DeepReadonlyArray3726<T> extends ReadonlyArray<DeepReadonly3726<T>> {}

type DeepReadonlyObject3726<T> = {
  readonly [P in keyof T]: DeepReadonly3726<T[P]>;
};

type UnionToIntersection3726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3726<T> = UnionToIntersection3726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3726<T extends unknown[], V> = [...T, V];

type TuplifyUnion3726<T, L = LastOf3726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3726<TuplifyUnion3726<Exclude<T, L>>, L>;

type DeepPartial3726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3726<T[P]> }
  : T;

type Paths3726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3726<K, Paths3726<T[K], Prev3726[D]>> : never }[keyof T]
  : never;

type Prev3726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3726 {
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

type ConfigPaths3726 = Paths3726<NestedConfig3726>;

interface HeavyProps3726 {
  config: DeepPartial3726<NestedConfig3726>;
  path?: ConfigPaths3726;
}

const HeavyComponent3726 = memo(function HeavyComponent3726({ config }: HeavyProps3726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3726.displayName = 'HeavyComponent3726';
export default HeavyComponent3726;

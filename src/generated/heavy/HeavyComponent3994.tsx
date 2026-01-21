'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3994<T> = T extends (infer U)[]
  ? DeepReadonlyArray3994<U>
  : T extends object
  ? DeepReadonlyObject3994<T>
  : T;

interface DeepReadonlyArray3994<T> extends ReadonlyArray<DeepReadonly3994<T>> {}

type DeepReadonlyObject3994<T> = {
  readonly [P in keyof T]: DeepReadonly3994<T[P]>;
};

type UnionToIntersection3994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3994<T> = UnionToIntersection3994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3994<T extends unknown[], V> = [...T, V];

type TuplifyUnion3994<T, L = LastOf3994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3994<TuplifyUnion3994<Exclude<T, L>>, L>;

type DeepPartial3994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3994<T[P]> }
  : T;

type Paths3994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3994<K, Paths3994<T[K], Prev3994[D]>> : never }[keyof T]
  : never;

type Prev3994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3994 {
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

type ConfigPaths3994 = Paths3994<NestedConfig3994>;

interface HeavyProps3994 {
  config: DeepPartial3994<NestedConfig3994>;
  path?: ConfigPaths3994;
}

const HeavyComponent3994 = memo(function HeavyComponent3994({ config }: HeavyProps3994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3994.displayName = 'HeavyComponent3994';
export default HeavyComponent3994;

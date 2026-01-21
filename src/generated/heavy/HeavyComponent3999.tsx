'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3999<T> = T extends (infer U)[]
  ? DeepReadonlyArray3999<U>
  : T extends object
  ? DeepReadonlyObject3999<T>
  : T;

interface DeepReadonlyArray3999<T> extends ReadonlyArray<DeepReadonly3999<T>> {}

type DeepReadonlyObject3999<T> = {
  readonly [P in keyof T]: DeepReadonly3999<T[P]>;
};

type UnionToIntersection3999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3999<T> = UnionToIntersection3999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3999<T extends unknown[], V> = [...T, V];

type TuplifyUnion3999<T, L = LastOf3999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3999<TuplifyUnion3999<Exclude<T, L>>, L>;

type DeepPartial3999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3999<T[P]> }
  : T;

type Paths3999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3999<K, Paths3999<T[K], Prev3999[D]>> : never }[keyof T]
  : never;

type Prev3999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3999 {
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

type ConfigPaths3999 = Paths3999<NestedConfig3999>;

interface HeavyProps3999 {
  config: DeepPartial3999<NestedConfig3999>;
  path?: ConfigPaths3999;
}

const HeavyComponent3999 = memo(function HeavyComponent3999({ config }: HeavyProps3999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3999.displayName = 'HeavyComponent3999';
export default HeavyComponent3999;

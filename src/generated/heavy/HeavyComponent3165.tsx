'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3165<T> = T extends (infer U)[]
  ? DeepReadonlyArray3165<U>
  : T extends object
  ? DeepReadonlyObject3165<T>
  : T;

interface DeepReadonlyArray3165<T> extends ReadonlyArray<DeepReadonly3165<T>> {}

type DeepReadonlyObject3165<T> = {
  readonly [P in keyof T]: DeepReadonly3165<T[P]>;
};

type UnionToIntersection3165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3165<T> = UnionToIntersection3165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3165<T extends unknown[], V> = [...T, V];

type TuplifyUnion3165<T, L = LastOf3165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3165<TuplifyUnion3165<Exclude<T, L>>, L>;

type DeepPartial3165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3165<T[P]> }
  : T;

type Paths3165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3165<K, Paths3165<T[K], Prev3165[D]>> : never }[keyof T]
  : never;

type Prev3165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3165 {
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

type ConfigPaths3165 = Paths3165<NestedConfig3165>;

interface HeavyProps3165 {
  config: DeepPartial3165<NestedConfig3165>;
  path?: ConfigPaths3165;
}

const HeavyComponent3165 = memo(function HeavyComponent3165({ config }: HeavyProps3165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3165.displayName = 'HeavyComponent3165';
export default HeavyComponent3165;

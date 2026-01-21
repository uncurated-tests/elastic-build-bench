'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3144<T> = T extends (infer U)[]
  ? DeepReadonlyArray3144<U>
  : T extends object
  ? DeepReadonlyObject3144<T>
  : T;

interface DeepReadonlyArray3144<T> extends ReadonlyArray<DeepReadonly3144<T>> {}

type DeepReadonlyObject3144<T> = {
  readonly [P in keyof T]: DeepReadonly3144<T[P]>;
};

type UnionToIntersection3144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3144<T> = UnionToIntersection3144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3144<T extends unknown[], V> = [...T, V];

type TuplifyUnion3144<T, L = LastOf3144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3144<TuplifyUnion3144<Exclude<T, L>>, L>;

type DeepPartial3144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3144<T[P]> }
  : T;

type Paths3144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3144<K, Paths3144<T[K], Prev3144[D]>> : never }[keyof T]
  : never;

type Prev3144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3144 {
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

type ConfigPaths3144 = Paths3144<NestedConfig3144>;

interface HeavyProps3144 {
  config: DeepPartial3144<NestedConfig3144>;
  path?: ConfigPaths3144;
}

const HeavyComponent3144 = memo(function HeavyComponent3144({ config }: HeavyProps3144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3144.displayName = 'HeavyComponent3144';
export default HeavyComponent3144;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3645<T> = T extends (infer U)[]
  ? DeepReadonlyArray3645<U>
  : T extends object
  ? DeepReadonlyObject3645<T>
  : T;

interface DeepReadonlyArray3645<T> extends ReadonlyArray<DeepReadonly3645<T>> {}

type DeepReadonlyObject3645<T> = {
  readonly [P in keyof T]: DeepReadonly3645<T[P]>;
};

type UnionToIntersection3645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3645<T> = UnionToIntersection3645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3645<T extends unknown[], V> = [...T, V];

type TuplifyUnion3645<T, L = LastOf3645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3645<TuplifyUnion3645<Exclude<T, L>>, L>;

type DeepPartial3645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3645<T[P]> }
  : T;

type Paths3645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3645<K, Paths3645<T[K], Prev3645[D]>> : never }[keyof T]
  : never;

type Prev3645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3645 {
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

type ConfigPaths3645 = Paths3645<NestedConfig3645>;

interface HeavyProps3645 {
  config: DeepPartial3645<NestedConfig3645>;
  path?: ConfigPaths3645;
}

const HeavyComponent3645 = memo(function HeavyComponent3645({ config }: HeavyProps3645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3645.displayName = 'HeavyComponent3645';
export default HeavyComponent3645;

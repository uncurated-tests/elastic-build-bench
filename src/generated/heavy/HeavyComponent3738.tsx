'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3738<T> = T extends (infer U)[]
  ? DeepReadonlyArray3738<U>
  : T extends object
  ? DeepReadonlyObject3738<T>
  : T;

interface DeepReadonlyArray3738<T> extends ReadonlyArray<DeepReadonly3738<T>> {}

type DeepReadonlyObject3738<T> = {
  readonly [P in keyof T]: DeepReadonly3738<T[P]>;
};

type UnionToIntersection3738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3738<T> = UnionToIntersection3738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3738<T extends unknown[], V> = [...T, V];

type TuplifyUnion3738<T, L = LastOf3738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3738<TuplifyUnion3738<Exclude<T, L>>, L>;

type DeepPartial3738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3738<T[P]> }
  : T;

type Paths3738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3738<K, Paths3738<T[K], Prev3738[D]>> : never }[keyof T]
  : never;

type Prev3738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3738 {
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

type ConfigPaths3738 = Paths3738<NestedConfig3738>;

interface HeavyProps3738 {
  config: DeepPartial3738<NestedConfig3738>;
  path?: ConfigPaths3738;
}

const HeavyComponent3738 = memo(function HeavyComponent3738({ config }: HeavyProps3738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3738.displayName = 'HeavyComponent3738';
export default HeavyComponent3738;

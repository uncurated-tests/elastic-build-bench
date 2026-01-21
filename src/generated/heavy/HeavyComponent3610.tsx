'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3610<T> = T extends (infer U)[]
  ? DeepReadonlyArray3610<U>
  : T extends object
  ? DeepReadonlyObject3610<T>
  : T;

interface DeepReadonlyArray3610<T> extends ReadonlyArray<DeepReadonly3610<T>> {}

type DeepReadonlyObject3610<T> = {
  readonly [P in keyof T]: DeepReadonly3610<T[P]>;
};

type UnionToIntersection3610<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3610<T> = UnionToIntersection3610<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3610<T extends unknown[], V> = [...T, V];

type TuplifyUnion3610<T, L = LastOf3610<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3610<TuplifyUnion3610<Exclude<T, L>>, L>;

type DeepPartial3610<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3610<T[P]> }
  : T;

type Paths3610<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3610<K, Paths3610<T[K], Prev3610[D]>> : never }[keyof T]
  : never;

type Prev3610 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3610<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3610 {
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

type ConfigPaths3610 = Paths3610<NestedConfig3610>;

interface HeavyProps3610 {
  config: DeepPartial3610<NestedConfig3610>;
  path?: ConfigPaths3610;
}

const HeavyComponent3610 = memo(function HeavyComponent3610({ config }: HeavyProps3610) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3610) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3610 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3610: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3610.displayName = 'HeavyComponent3610';
export default HeavyComponent3610;

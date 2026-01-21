'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3947<T> = T extends (infer U)[]
  ? DeepReadonlyArray3947<U>
  : T extends object
  ? DeepReadonlyObject3947<T>
  : T;

interface DeepReadonlyArray3947<T> extends ReadonlyArray<DeepReadonly3947<T>> {}

type DeepReadonlyObject3947<T> = {
  readonly [P in keyof T]: DeepReadonly3947<T[P]>;
};

type UnionToIntersection3947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3947<T> = UnionToIntersection3947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3947<T extends unknown[], V> = [...T, V];

type TuplifyUnion3947<T, L = LastOf3947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3947<TuplifyUnion3947<Exclude<T, L>>, L>;

type DeepPartial3947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3947<T[P]> }
  : T;

type Paths3947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3947<K, Paths3947<T[K], Prev3947[D]>> : never }[keyof T]
  : never;

type Prev3947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3947 {
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

type ConfigPaths3947 = Paths3947<NestedConfig3947>;

interface HeavyProps3947 {
  config: DeepPartial3947<NestedConfig3947>;
  path?: ConfigPaths3947;
}

const HeavyComponent3947 = memo(function HeavyComponent3947({ config }: HeavyProps3947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3947.displayName = 'HeavyComponent3947';
export default HeavyComponent3947;

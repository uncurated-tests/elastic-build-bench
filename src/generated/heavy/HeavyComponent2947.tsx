'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2947<T> = T extends (infer U)[]
  ? DeepReadonlyArray2947<U>
  : T extends object
  ? DeepReadonlyObject2947<T>
  : T;

interface DeepReadonlyArray2947<T> extends ReadonlyArray<DeepReadonly2947<T>> {}

type DeepReadonlyObject2947<T> = {
  readonly [P in keyof T]: DeepReadonly2947<T[P]>;
};

type UnionToIntersection2947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2947<T> = UnionToIntersection2947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2947<T extends unknown[], V> = [...T, V];

type TuplifyUnion2947<T, L = LastOf2947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2947<TuplifyUnion2947<Exclude<T, L>>, L>;

type DeepPartial2947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2947<T[P]> }
  : T;

type Paths2947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2947<K, Paths2947<T[K], Prev2947[D]>> : never }[keyof T]
  : never;

type Prev2947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2947 {
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

type ConfigPaths2947 = Paths2947<NestedConfig2947>;

interface HeavyProps2947 {
  config: DeepPartial2947<NestedConfig2947>;
  path?: ConfigPaths2947;
}

const HeavyComponent2947 = memo(function HeavyComponent2947({ config }: HeavyProps2947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2947.displayName = 'HeavyComponent2947';
export default HeavyComponent2947;

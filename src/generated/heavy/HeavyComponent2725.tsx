'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2725<T> = T extends (infer U)[]
  ? DeepReadonlyArray2725<U>
  : T extends object
  ? DeepReadonlyObject2725<T>
  : T;

interface DeepReadonlyArray2725<T> extends ReadonlyArray<DeepReadonly2725<T>> {}

type DeepReadonlyObject2725<T> = {
  readonly [P in keyof T]: DeepReadonly2725<T[P]>;
};

type UnionToIntersection2725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2725<T> = UnionToIntersection2725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2725<T extends unknown[], V> = [...T, V];

type TuplifyUnion2725<T, L = LastOf2725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2725<TuplifyUnion2725<Exclude<T, L>>, L>;

type DeepPartial2725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2725<T[P]> }
  : T;

type Paths2725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2725<K, Paths2725<T[K], Prev2725[D]>> : never }[keyof T]
  : never;

type Prev2725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2725 {
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

type ConfigPaths2725 = Paths2725<NestedConfig2725>;

interface HeavyProps2725 {
  config: DeepPartial2725<NestedConfig2725>;
  path?: ConfigPaths2725;
}

const HeavyComponent2725 = memo(function HeavyComponent2725({ config }: HeavyProps2725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2725.displayName = 'HeavyComponent2725';
export default HeavyComponent2725;

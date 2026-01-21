'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2300<T> = T extends (infer U)[]
  ? DeepReadonlyArray2300<U>
  : T extends object
  ? DeepReadonlyObject2300<T>
  : T;

interface DeepReadonlyArray2300<T> extends ReadonlyArray<DeepReadonly2300<T>> {}

type DeepReadonlyObject2300<T> = {
  readonly [P in keyof T]: DeepReadonly2300<T[P]>;
};

type UnionToIntersection2300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2300<T> = UnionToIntersection2300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2300<T extends unknown[], V> = [...T, V];

type TuplifyUnion2300<T, L = LastOf2300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2300<TuplifyUnion2300<Exclude<T, L>>, L>;

type DeepPartial2300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2300<T[P]> }
  : T;

type Paths2300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2300<K, Paths2300<T[K], Prev2300[D]>> : never }[keyof T]
  : never;

type Prev2300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2300 {
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

type ConfigPaths2300 = Paths2300<NestedConfig2300>;

interface HeavyProps2300 {
  config: DeepPartial2300<NestedConfig2300>;
  path?: ConfigPaths2300;
}

const HeavyComponent2300 = memo(function HeavyComponent2300({ config }: HeavyProps2300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2300.displayName = 'HeavyComponent2300';
export default HeavyComponent2300;

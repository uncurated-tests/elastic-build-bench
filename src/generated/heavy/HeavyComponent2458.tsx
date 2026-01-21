'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2458<T> = T extends (infer U)[]
  ? DeepReadonlyArray2458<U>
  : T extends object
  ? DeepReadonlyObject2458<T>
  : T;

interface DeepReadonlyArray2458<T> extends ReadonlyArray<DeepReadonly2458<T>> {}

type DeepReadonlyObject2458<T> = {
  readonly [P in keyof T]: DeepReadonly2458<T[P]>;
};

type UnionToIntersection2458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2458<T> = UnionToIntersection2458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2458<T extends unknown[], V> = [...T, V];

type TuplifyUnion2458<T, L = LastOf2458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2458<TuplifyUnion2458<Exclude<T, L>>, L>;

type DeepPartial2458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2458<T[P]> }
  : T;

type Paths2458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2458<K, Paths2458<T[K], Prev2458[D]>> : never }[keyof T]
  : never;

type Prev2458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2458 {
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

type ConfigPaths2458 = Paths2458<NestedConfig2458>;

interface HeavyProps2458 {
  config: DeepPartial2458<NestedConfig2458>;
  path?: ConfigPaths2458;
}

const HeavyComponent2458 = memo(function HeavyComponent2458({ config }: HeavyProps2458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2458.displayName = 'HeavyComponent2458';
export default HeavyComponent2458;

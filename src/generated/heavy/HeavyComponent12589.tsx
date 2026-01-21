'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12589<T> = T extends (infer U)[]
  ? DeepReadonlyArray12589<U>
  : T extends object
  ? DeepReadonlyObject12589<T>
  : T;

interface DeepReadonlyArray12589<T> extends ReadonlyArray<DeepReadonly12589<T>> {}

type DeepReadonlyObject12589<T> = {
  readonly [P in keyof T]: DeepReadonly12589<T[P]>;
};

type UnionToIntersection12589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12589<T> = UnionToIntersection12589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12589<T extends unknown[], V> = [...T, V];

type TuplifyUnion12589<T, L = LastOf12589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12589<TuplifyUnion12589<Exclude<T, L>>, L>;

type DeepPartial12589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12589<T[P]> }
  : T;

type Paths12589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12589<K, Paths12589<T[K], Prev12589[D]>> : never }[keyof T]
  : never;

type Prev12589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12589 {
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

type ConfigPaths12589 = Paths12589<NestedConfig12589>;

interface HeavyProps12589 {
  config: DeepPartial12589<NestedConfig12589>;
  path?: ConfigPaths12589;
}

const HeavyComponent12589 = memo(function HeavyComponent12589({ config }: HeavyProps12589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12589.displayName = 'HeavyComponent12589';
export default HeavyComponent12589;

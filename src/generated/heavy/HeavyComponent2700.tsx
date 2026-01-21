'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2700<T> = T extends (infer U)[]
  ? DeepReadonlyArray2700<U>
  : T extends object
  ? DeepReadonlyObject2700<T>
  : T;

interface DeepReadonlyArray2700<T> extends ReadonlyArray<DeepReadonly2700<T>> {}

type DeepReadonlyObject2700<T> = {
  readonly [P in keyof T]: DeepReadonly2700<T[P]>;
};

type UnionToIntersection2700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2700<T> = UnionToIntersection2700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2700<T extends unknown[], V> = [...T, V];

type TuplifyUnion2700<T, L = LastOf2700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2700<TuplifyUnion2700<Exclude<T, L>>, L>;

type DeepPartial2700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2700<T[P]> }
  : T;

type Paths2700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2700<K, Paths2700<T[K], Prev2700[D]>> : never }[keyof T]
  : never;

type Prev2700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2700 {
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

type ConfigPaths2700 = Paths2700<NestedConfig2700>;

interface HeavyProps2700 {
  config: DeepPartial2700<NestedConfig2700>;
  path?: ConfigPaths2700;
}

const HeavyComponent2700 = memo(function HeavyComponent2700({ config }: HeavyProps2700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2700.displayName = 'HeavyComponent2700';
export default HeavyComponent2700;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2016<T> = T extends (infer U)[]
  ? DeepReadonlyArray2016<U>
  : T extends object
  ? DeepReadonlyObject2016<T>
  : T;

interface DeepReadonlyArray2016<T> extends ReadonlyArray<DeepReadonly2016<T>> {}

type DeepReadonlyObject2016<T> = {
  readonly [P in keyof T]: DeepReadonly2016<T[P]>;
};

type UnionToIntersection2016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2016<T> = UnionToIntersection2016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2016<T extends unknown[], V> = [...T, V];

type TuplifyUnion2016<T, L = LastOf2016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2016<TuplifyUnion2016<Exclude<T, L>>, L>;

type DeepPartial2016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2016<T[P]> }
  : T;

type Paths2016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2016<K, Paths2016<T[K], Prev2016[D]>> : never }[keyof T]
  : never;

type Prev2016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2016 {
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

type ConfigPaths2016 = Paths2016<NestedConfig2016>;

interface HeavyProps2016 {
  config: DeepPartial2016<NestedConfig2016>;
  path?: ConfigPaths2016;
}

const HeavyComponent2016 = memo(function HeavyComponent2016({ config }: HeavyProps2016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2016.displayName = 'HeavyComponent2016';
export default HeavyComponent2016;

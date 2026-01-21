'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2223<T> = T extends (infer U)[]
  ? DeepReadonlyArray2223<U>
  : T extends object
  ? DeepReadonlyObject2223<T>
  : T;

interface DeepReadonlyArray2223<T> extends ReadonlyArray<DeepReadonly2223<T>> {}

type DeepReadonlyObject2223<T> = {
  readonly [P in keyof T]: DeepReadonly2223<T[P]>;
};

type UnionToIntersection2223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2223<T> = UnionToIntersection2223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2223<T extends unknown[], V> = [...T, V];

type TuplifyUnion2223<T, L = LastOf2223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2223<TuplifyUnion2223<Exclude<T, L>>, L>;

type DeepPartial2223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2223<T[P]> }
  : T;

type Paths2223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2223<K, Paths2223<T[K], Prev2223[D]>> : never }[keyof T]
  : never;

type Prev2223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2223 {
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

type ConfigPaths2223 = Paths2223<NestedConfig2223>;

interface HeavyProps2223 {
  config: DeepPartial2223<NestedConfig2223>;
  path?: ConfigPaths2223;
}

const HeavyComponent2223 = memo(function HeavyComponent2223({ config }: HeavyProps2223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2223.displayName = 'HeavyComponent2223';
export default HeavyComponent2223;

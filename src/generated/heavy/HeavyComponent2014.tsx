'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2014<T> = T extends (infer U)[]
  ? DeepReadonlyArray2014<U>
  : T extends object
  ? DeepReadonlyObject2014<T>
  : T;

interface DeepReadonlyArray2014<T> extends ReadonlyArray<DeepReadonly2014<T>> {}

type DeepReadonlyObject2014<T> = {
  readonly [P in keyof T]: DeepReadonly2014<T[P]>;
};

type UnionToIntersection2014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2014<T> = UnionToIntersection2014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2014<T extends unknown[], V> = [...T, V];

type TuplifyUnion2014<T, L = LastOf2014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2014<TuplifyUnion2014<Exclude<T, L>>, L>;

type DeepPartial2014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2014<T[P]> }
  : T;

type Paths2014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2014<K, Paths2014<T[K], Prev2014[D]>> : never }[keyof T]
  : never;

type Prev2014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2014 {
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

type ConfigPaths2014 = Paths2014<NestedConfig2014>;

interface HeavyProps2014 {
  config: DeepPartial2014<NestedConfig2014>;
  path?: ConfigPaths2014;
}

const HeavyComponent2014 = memo(function HeavyComponent2014({ config }: HeavyProps2014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2014.displayName = 'HeavyComponent2014';
export default HeavyComponent2014;

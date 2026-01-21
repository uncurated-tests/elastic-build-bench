'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2064<T> = T extends (infer U)[]
  ? DeepReadonlyArray2064<U>
  : T extends object
  ? DeepReadonlyObject2064<T>
  : T;

interface DeepReadonlyArray2064<T> extends ReadonlyArray<DeepReadonly2064<T>> {}

type DeepReadonlyObject2064<T> = {
  readonly [P in keyof T]: DeepReadonly2064<T[P]>;
};

type UnionToIntersection2064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2064<T> = UnionToIntersection2064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2064<T extends unknown[], V> = [...T, V];

type TuplifyUnion2064<T, L = LastOf2064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2064<TuplifyUnion2064<Exclude<T, L>>, L>;

type DeepPartial2064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2064<T[P]> }
  : T;

type Paths2064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2064<K, Paths2064<T[K], Prev2064[D]>> : never }[keyof T]
  : never;

type Prev2064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2064 {
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

type ConfigPaths2064 = Paths2064<NestedConfig2064>;

interface HeavyProps2064 {
  config: DeepPartial2064<NestedConfig2064>;
  path?: ConfigPaths2064;
}

const HeavyComponent2064 = memo(function HeavyComponent2064({ config }: HeavyProps2064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2064.displayName = 'HeavyComponent2064';
export default HeavyComponent2064;

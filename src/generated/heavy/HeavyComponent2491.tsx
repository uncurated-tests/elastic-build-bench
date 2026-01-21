'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2491<T> = T extends (infer U)[]
  ? DeepReadonlyArray2491<U>
  : T extends object
  ? DeepReadonlyObject2491<T>
  : T;

interface DeepReadonlyArray2491<T> extends ReadonlyArray<DeepReadonly2491<T>> {}

type DeepReadonlyObject2491<T> = {
  readonly [P in keyof T]: DeepReadonly2491<T[P]>;
};

type UnionToIntersection2491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2491<T> = UnionToIntersection2491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2491<T extends unknown[], V> = [...T, V];

type TuplifyUnion2491<T, L = LastOf2491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2491<TuplifyUnion2491<Exclude<T, L>>, L>;

type DeepPartial2491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2491<T[P]> }
  : T;

type Paths2491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2491<K, Paths2491<T[K], Prev2491[D]>> : never }[keyof T]
  : never;

type Prev2491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2491 {
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

type ConfigPaths2491 = Paths2491<NestedConfig2491>;

interface HeavyProps2491 {
  config: DeepPartial2491<NestedConfig2491>;
  path?: ConfigPaths2491;
}

const HeavyComponent2491 = memo(function HeavyComponent2491({ config }: HeavyProps2491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2491.displayName = 'HeavyComponent2491';
export default HeavyComponent2491;

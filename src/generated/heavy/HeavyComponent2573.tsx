'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2573<T> = T extends (infer U)[]
  ? DeepReadonlyArray2573<U>
  : T extends object
  ? DeepReadonlyObject2573<T>
  : T;

interface DeepReadonlyArray2573<T> extends ReadonlyArray<DeepReadonly2573<T>> {}

type DeepReadonlyObject2573<T> = {
  readonly [P in keyof T]: DeepReadonly2573<T[P]>;
};

type UnionToIntersection2573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2573<T> = UnionToIntersection2573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2573<T extends unknown[], V> = [...T, V];

type TuplifyUnion2573<T, L = LastOf2573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2573<TuplifyUnion2573<Exclude<T, L>>, L>;

type DeepPartial2573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2573<T[P]> }
  : T;

type Paths2573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2573<K, Paths2573<T[K], Prev2573[D]>> : never }[keyof T]
  : never;

type Prev2573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2573 {
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

type ConfigPaths2573 = Paths2573<NestedConfig2573>;

interface HeavyProps2573 {
  config: DeepPartial2573<NestedConfig2573>;
  path?: ConfigPaths2573;
}

const HeavyComponent2573 = memo(function HeavyComponent2573({ config }: HeavyProps2573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2573.displayName = 'HeavyComponent2573';
export default HeavyComponent2573;

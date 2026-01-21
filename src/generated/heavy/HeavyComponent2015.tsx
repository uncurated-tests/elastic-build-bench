'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2015<T> = T extends (infer U)[]
  ? DeepReadonlyArray2015<U>
  : T extends object
  ? DeepReadonlyObject2015<T>
  : T;

interface DeepReadonlyArray2015<T> extends ReadonlyArray<DeepReadonly2015<T>> {}

type DeepReadonlyObject2015<T> = {
  readonly [P in keyof T]: DeepReadonly2015<T[P]>;
};

type UnionToIntersection2015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2015<T> = UnionToIntersection2015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2015<T extends unknown[], V> = [...T, V];

type TuplifyUnion2015<T, L = LastOf2015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2015<TuplifyUnion2015<Exclude<T, L>>, L>;

type DeepPartial2015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2015<T[P]> }
  : T;

type Paths2015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2015<K, Paths2015<T[K], Prev2015[D]>> : never }[keyof T]
  : never;

type Prev2015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2015 {
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

type ConfigPaths2015 = Paths2015<NestedConfig2015>;

interface HeavyProps2015 {
  config: DeepPartial2015<NestedConfig2015>;
  path?: ConfigPaths2015;
}

const HeavyComponent2015 = memo(function HeavyComponent2015({ config }: HeavyProps2015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2015.displayName = 'HeavyComponent2015';
export default HeavyComponent2015;

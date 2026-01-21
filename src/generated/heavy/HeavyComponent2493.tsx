'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2493<T> = T extends (infer U)[]
  ? DeepReadonlyArray2493<U>
  : T extends object
  ? DeepReadonlyObject2493<T>
  : T;

interface DeepReadonlyArray2493<T> extends ReadonlyArray<DeepReadonly2493<T>> {}

type DeepReadonlyObject2493<T> = {
  readonly [P in keyof T]: DeepReadonly2493<T[P]>;
};

type UnionToIntersection2493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2493<T> = UnionToIntersection2493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2493<T extends unknown[], V> = [...T, V];

type TuplifyUnion2493<T, L = LastOf2493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2493<TuplifyUnion2493<Exclude<T, L>>, L>;

type DeepPartial2493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2493<T[P]> }
  : T;

type Paths2493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2493<K, Paths2493<T[K], Prev2493[D]>> : never }[keyof T]
  : never;

type Prev2493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2493 {
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

type ConfigPaths2493 = Paths2493<NestedConfig2493>;

interface HeavyProps2493 {
  config: DeepPartial2493<NestedConfig2493>;
  path?: ConfigPaths2493;
}

const HeavyComponent2493 = memo(function HeavyComponent2493({ config }: HeavyProps2493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2493.displayName = 'HeavyComponent2493';
export default HeavyComponent2493;

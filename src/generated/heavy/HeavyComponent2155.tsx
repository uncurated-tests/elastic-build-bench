'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2155<T> = T extends (infer U)[]
  ? DeepReadonlyArray2155<U>
  : T extends object
  ? DeepReadonlyObject2155<T>
  : T;

interface DeepReadonlyArray2155<T> extends ReadonlyArray<DeepReadonly2155<T>> {}

type DeepReadonlyObject2155<T> = {
  readonly [P in keyof T]: DeepReadonly2155<T[P]>;
};

type UnionToIntersection2155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2155<T> = UnionToIntersection2155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2155<T extends unknown[], V> = [...T, V];

type TuplifyUnion2155<T, L = LastOf2155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2155<TuplifyUnion2155<Exclude<T, L>>, L>;

type DeepPartial2155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2155<T[P]> }
  : T;

type Paths2155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2155<K, Paths2155<T[K], Prev2155[D]>> : never }[keyof T]
  : never;

type Prev2155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2155 {
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

type ConfigPaths2155 = Paths2155<NestedConfig2155>;

interface HeavyProps2155 {
  config: DeepPartial2155<NestedConfig2155>;
  path?: ConfigPaths2155;
}

const HeavyComponent2155 = memo(function HeavyComponent2155({ config }: HeavyProps2155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2155.displayName = 'HeavyComponent2155';
export default HeavyComponent2155;

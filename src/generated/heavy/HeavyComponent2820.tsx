'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2820<T> = T extends (infer U)[]
  ? DeepReadonlyArray2820<U>
  : T extends object
  ? DeepReadonlyObject2820<T>
  : T;

interface DeepReadonlyArray2820<T> extends ReadonlyArray<DeepReadonly2820<T>> {}

type DeepReadonlyObject2820<T> = {
  readonly [P in keyof T]: DeepReadonly2820<T[P]>;
};

type UnionToIntersection2820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2820<T> = UnionToIntersection2820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2820<T extends unknown[], V> = [...T, V];

type TuplifyUnion2820<T, L = LastOf2820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2820<TuplifyUnion2820<Exclude<T, L>>, L>;

type DeepPartial2820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2820<T[P]> }
  : T;

type Paths2820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2820<K, Paths2820<T[K], Prev2820[D]>> : never }[keyof T]
  : never;

type Prev2820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2820 {
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

type ConfigPaths2820 = Paths2820<NestedConfig2820>;

interface HeavyProps2820 {
  config: DeepPartial2820<NestedConfig2820>;
  path?: ConfigPaths2820;
}

const HeavyComponent2820 = memo(function HeavyComponent2820({ config }: HeavyProps2820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2820.displayName = 'HeavyComponent2820';
export default HeavyComponent2820;

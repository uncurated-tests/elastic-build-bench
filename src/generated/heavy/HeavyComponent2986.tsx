'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2986<T> = T extends (infer U)[]
  ? DeepReadonlyArray2986<U>
  : T extends object
  ? DeepReadonlyObject2986<T>
  : T;

interface DeepReadonlyArray2986<T> extends ReadonlyArray<DeepReadonly2986<T>> {}

type DeepReadonlyObject2986<T> = {
  readonly [P in keyof T]: DeepReadonly2986<T[P]>;
};

type UnionToIntersection2986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2986<T> = UnionToIntersection2986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2986<T extends unknown[], V> = [...T, V];

type TuplifyUnion2986<T, L = LastOf2986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2986<TuplifyUnion2986<Exclude<T, L>>, L>;

type DeepPartial2986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2986<T[P]> }
  : T;

type Paths2986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2986<K, Paths2986<T[K], Prev2986[D]>> : never }[keyof T]
  : never;

type Prev2986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2986 {
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

type ConfigPaths2986 = Paths2986<NestedConfig2986>;

interface HeavyProps2986 {
  config: DeepPartial2986<NestedConfig2986>;
  path?: ConfigPaths2986;
}

const HeavyComponent2986 = memo(function HeavyComponent2986({ config }: HeavyProps2986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2986.displayName = 'HeavyComponent2986';
export default HeavyComponent2986;

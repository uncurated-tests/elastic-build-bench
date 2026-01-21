'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2520<T> = T extends (infer U)[]
  ? DeepReadonlyArray2520<U>
  : T extends object
  ? DeepReadonlyObject2520<T>
  : T;

interface DeepReadonlyArray2520<T> extends ReadonlyArray<DeepReadonly2520<T>> {}

type DeepReadonlyObject2520<T> = {
  readonly [P in keyof T]: DeepReadonly2520<T[P]>;
};

type UnionToIntersection2520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2520<T> = UnionToIntersection2520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2520<T extends unknown[], V> = [...T, V];

type TuplifyUnion2520<T, L = LastOf2520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2520<TuplifyUnion2520<Exclude<T, L>>, L>;

type DeepPartial2520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2520<T[P]> }
  : T;

type Paths2520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2520<K, Paths2520<T[K], Prev2520[D]>> : never }[keyof T]
  : never;

type Prev2520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2520 {
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

type ConfigPaths2520 = Paths2520<NestedConfig2520>;

interface HeavyProps2520 {
  config: DeepPartial2520<NestedConfig2520>;
  path?: ConfigPaths2520;
}

const HeavyComponent2520 = memo(function HeavyComponent2520({ config }: HeavyProps2520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2520.displayName = 'HeavyComponent2520';
export default HeavyComponent2520;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2302<T> = T extends (infer U)[]
  ? DeepReadonlyArray2302<U>
  : T extends object
  ? DeepReadonlyObject2302<T>
  : T;

interface DeepReadonlyArray2302<T> extends ReadonlyArray<DeepReadonly2302<T>> {}

type DeepReadonlyObject2302<T> = {
  readonly [P in keyof T]: DeepReadonly2302<T[P]>;
};

type UnionToIntersection2302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2302<T> = UnionToIntersection2302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2302<T extends unknown[], V> = [...T, V];

type TuplifyUnion2302<T, L = LastOf2302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2302<TuplifyUnion2302<Exclude<T, L>>, L>;

type DeepPartial2302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2302<T[P]> }
  : T;

type Paths2302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2302<K, Paths2302<T[K], Prev2302[D]>> : never }[keyof T]
  : never;

type Prev2302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2302 {
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

type ConfigPaths2302 = Paths2302<NestedConfig2302>;

interface HeavyProps2302 {
  config: DeepPartial2302<NestedConfig2302>;
  path?: ConfigPaths2302;
}

const HeavyComponent2302 = memo(function HeavyComponent2302({ config }: HeavyProps2302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2302.displayName = 'HeavyComponent2302';
export default HeavyComponent2302;

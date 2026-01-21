'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2474<T> = T extends (infer U)[]
  ? DeepReadonlyArray2474<U>
  : T extends object
  ? DeepReadonlyObject2474<T>
  : T;

interface DeepReadonlyArray2474<T> extends ReadonlyArray<DeepReadonly2474<T>> {}

type DeepReadonlyObject2474<T> = {
  readonly [P in keyof T]: DeepReadonly2474<T[P]>;
};

type UnionToIntersection2474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2474<T> = UnionToIntersection2474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2474<T extends unknown[], V> = [...T, V];

type TuplifyUnion2474<T, L = LastOf2474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2474<TuplifyUnion2474<Exclude<T, L>>, L>;

type DeepPartial2474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2474<T[P]> }
  : T;

type Paths2474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2474<K, Paths2474<T[K], Prev2474[D]>> : never }[keyof T]
  : never;

type Prev2474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2474 {
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

type ConfigPaths2474 = Paths2474<NestedConfig2474>;

interface HeavyProps2474 {
  config: DeepPartial2474<NestedConfig2474>;
  path?: ConfigPaths2474;
}

const HeavyComponent2474 = memo(function HeavyComponent2474({ config }: HeavyProps2474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2474.displayName = 'HeavyComponent2474';
export default HeavyComponent2474;

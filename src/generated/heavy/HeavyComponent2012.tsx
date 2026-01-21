'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2012<T> = T extends (infer U)[]
  ? DeepReadonlyArray2012<U>
  : T extends object
  ? DeepReadonlyObject2012<T>
  : T;

interface DeepReadonlyArray2012<T> extends ReadonlyArray<DeepReadonly2012<T>> {}

type DeepReadonlyObject2012<T> = {
  readonly [P in keyof T]: DeepReadonly2012<T[P]>;
};

type UnionToIntersection2012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2012<T> = UnionToIntersection2012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2012<T extends unknown[], V> = [...T, V];

type TuplifyUnion2012<T, L = LastOf2012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2012<TuplifyUnion2012<Exclude<T, L>>, L>;

type DeepPartial2012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2012<T[P]> }
  : T;

type Paths2012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2012<K, Paths2012<T[K], Prev2012[D]>> : never }[keyof T]
  : never;

type Prev2012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2012 {
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

type ConfigPaths2012 = Paths2012<NestedConfig2012>;

interface HeavyProps2012 {
  config: DeepPartial2012<NestedConfig2012>;
  path?: ConfigPaths2012;
}

const HeavyComponent2012 = memo(function HeavyComponent2012({ config }: HeavyProps2012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2012.displayName = 'HeavyComponent2012';
export default HeavyComponent2012;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2017<T> = T extends (infer U)[]
  ? DeepReadonlyArray2017<U>
  : T extends object
  ? DeepReadonlyObject2017<T>
  : T;

interface DeepReadonlyArray2017<T> extends ReadonlyArray<DeepReadonly2017<T>> {}

type DeepReadonlyObject2017<T> = {
  readonly [P in keyof T]: DeepReadonly2017<T[P]>;
};

type UnionToIntersection2017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2017<T> = UnionToIntersection2017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2017<T extends unknown[], V> = [...T, V];

type TuplifyUnion2017<T, L = LastOf2017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2017<TuplifyUnion2017<Exclude<T, L>>, L>;

type DeepPartial2017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2017<T[P]> }
  : T;

type Paths2017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2017<K, Paths2017<T[K], Prev2017[D]>> : never }[keyof T]
  : never;

type Prev2017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2017 {
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

type ConfigPaths2017 = Paths2017<NestedConfig2017>;

interface HeavyProps2017 {
  config: DeepPartial2017<NestedConfig2017>;
  path?: ConfigPaths2017;
}

const HeavyComponent2017 = memo(function HeavyComponent2017({ config }: HeavyProps2017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2017.displayName = 'HeavyComponent2017';
export default HeavyComponent2017;

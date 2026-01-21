'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2906<T> = T extends (infer U)[]
  ? DeepReadonlyArray2906<U>
  : T extends object
  ? DeepReadonlyObject2906<T>
  : T;

interface DeepReadonlyArray2906<T> extends ReadonlyArray<DeepReadonly2906<T>> {}

type DeepReadonlyObject2906<T> = {
  readonly [P in keyof T]: DeepReadonly2906<T[P]>;
};

type UnionToIntersection2906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2906<T> = UnionToIntersection2906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2906<T extends unknown[], V> = [...T, V];

type TuplifyUnion2906<T, L = LastOf2906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2906<TuplifyUnion2906<Exclude<T, L>>, L>;

type DeepPartial2906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2906<T[P]> }
  : T;

type Paths2906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2906<K, Paths2906<T[K], Prev2906[D]>> : never }[keyof T]
  : never;

type Prev2906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2906 {
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

type ConfigPaths2906 = Paths2906<NestedConfig2906>;

interface HeavyProps2906 {
  config: DeepPartial2906<NestedConfig2906>;
  path?: ConfigPaths2906;
}

const HeavyComponent2906 = memo(function HeavyComponent2906({ config }: HeavyProps2906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2906.displayName = 'HeavyComponent2906';
export default HeavyComponent2906;

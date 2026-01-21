'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2901<T> = T extends (infer U)[]
  ? DeepReadonlyArray2901<U>
  : T extends object
  ? DeepReadonlyObject2901<T>
  : T;

interface DeepReadonlyArray2901<T> extends ReadonlyArray<DeepReadonly2901<T>> {}

type DeepReadonlyObject2901<T> = {
  readonly [P in keyof T]: DeepReadonly2901<T[P]>;
};

type UnionToIntersection2901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2901<T> = UnionToIntersection2901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2901<T extends unknown[], V> = [...T, V];

type TuplifyUnion2901<T, L = LastOf2901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2901<TuplifyUnion2901<Exclude<T, L>>, L>;

type DeepPartial2901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2901<T[P]> }
  : T;

type Paths2901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2901<K, Paths2901<T[K], Prev2901[D]>> : never }[keyof T]
  : never;

type Prev2901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2901 {
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

type ConfigPaths2901 = Paths2901<NestedConfig2901>;

interface HeavyProps2901 {
  config: DeepPartial2901<NestedConfig2901>;
  path?: ConfigPaths2901;
}

const HeavyComponent2901 = memo(function HeavyComponent2901({ config }: HeavyProps2901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2901.displayName = 'HeavyComponent2901';
export default HeavyComponent2901;

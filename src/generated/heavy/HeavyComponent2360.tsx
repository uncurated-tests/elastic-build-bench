'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2360<T> = T extends (infer U)[]
  ? DeepReadonlyArray2360<U>
  : T extends object
  ? DeepReadonlyObject2360<T>
  : T;

interface DeepReadonlyArray2360<T> extends ReadonlyArray<DeepReadonly2360<T>> {}

type DeepReadonlyObject2360<T> = {
  readonly [P in keyof T]: DeepReadonly2360<T[P]>;
};

type UnionToIntersection2360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2360<T> = UnionToIntersection2360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2360<T extends unknown[], V> = [...T, V];

type TuplifyUnion2360<T, L = LastOf2360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2360<TuplifyUnion2360<Exclude<T, L>>, L>;

type DeepPartial2360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2360<T[P]> }
  : T;

type Paths2360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2360<K, Paths2360<T[K], Prev2360[D]>> : never }[keyof T]
  : never;

type Prev2360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2360 {
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

type ConfigPaths2360 = Paths2360<NestedConfig2360>;

interface HeavyProps2360 {
  config: DeepPartial2360<NestedConfig2360>;
  path?: ConfigPaths2360;
}

const HeavyComponent2360 = memo(function HeavyComponent2360({ config }: HeavyProps2360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2360.displayName = 'HeavyComponent2360';
export default HeavyComponent2360;

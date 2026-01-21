'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2236<T> = T extends (infer U)[]
  ? DeepReadonlyArray2236<U>
  : T extends object
  ? DeepReadonlyObject2236<T>
  : T;

interface DeepReadonlyArray2236<T> extends ReadonlyArray<DeepReadonly2236<T>> {}

type DeepReadonlyObject2236<T> = {
  readonly [P in keyof T]: DeepReadonly2236<T[P]>;
};

type UnionToIntersection2236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2236<T> = UnionToIntersection2236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2236<T extends unknown[], V> = [...T, V];

type TuplifyUnion2236<T, L = LastOf2236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2236<TuplifyUnion2236<Exclude<T, L>>, L>;

type DeepPartial2236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2236<T[P]> }
  : T;

type Paths2236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2236<K, Paths2236<T[K], Prev2236[D]>> : never }[keyof T]
  : never;

type Prev2236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2236 {
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

type ConfigPaths2236 = Paths2236<NestedConfig2236>;

interface HeavyProps2236 {
  config: DeepPartial2236<NestedConfig2236>;
  path?: ConfigPaths2236;
}

const HeavyComponent2236 = memo(function HeavyComponent2236({ config }: HeavyProps2236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2236.displayName = 'HeavyComponent2236';
export default HeavyComponent2236;

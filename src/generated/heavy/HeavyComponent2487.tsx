'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2487<T> = T extends (infer U)[]
  ? DeepReadonlyArray2487<U>
  : T extends object
  ? DeepReadonlyObject2487<T>
  : T;

interface DeepReadonlyArray2487<T> extends ReadonlyArray<DeepReadonly2487<T>> {}

type DeepReadonlyObject2487<T> = {
  readonly [P in keyof T]: DeepReadonly2487<T[P]>;
};

type UnionToIntersection2487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2487<T> = UnionToIntersection2487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2487<T extends unknown[], V> = [...T, V];

type TuplifyUnion2487<T, L = LastOf2487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2487<TuplifyUnion2487<Exclude<T, L>>, L>;

type DeepPartial2487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2487<T[P]> }
  : T;

type Paths2487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2487<K, Paths2487<T[K], Prev2487[D]>> : never }[keyof T]
  : never;

type Prev2487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2487 {
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

type ConfigPaths2487 = Paths2487<NestedConfig2487>;

interface HeavyProps2487 {
  config: DeepPartial2487<NestedConfig2487>;
  path?: ConfigPaths2487;
}

const HeavyComponent2487 = memo(function HeavyComponent2487({ config }: HeavyProps2487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2487.displayName = 'HeavyComponent2487';
export default HeavyComponent2487;

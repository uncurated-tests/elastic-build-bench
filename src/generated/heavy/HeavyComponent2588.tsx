'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2588<T> = T extends (infer U)[]
  ? DeepReadonlyArray2588<U>
  : T extends object
  ? DeepReadonlyObject2588<T>
  : T;

interface DeepReadonlyArray2588<T> extends ReadonlyArray<DeepReadonly2588<T>> {}

type DeepReadonlyObject2588<T> = {
  readonly [P in keyof T]: DeepReadonly2588<T[P]>;
};

type UnionToIntersection2588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2588<T> = UnionToIntersection2588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2588<T extends unknown[], V> = [...T, V];

type TuplifyUnion2588<T, L = LastOf2588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2588<TuplifyUnion2588<Exclude<T, L>>, L>;

type DeepPartial2588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2588<T[P]> }
  : T;

type Paths2588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2588<K, Paths2588<T[K], Prev2588[D]>> : never }[keyof T]
  : never;

type Prev2588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2588 {
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

type ConfigPaths2588 = Paths2588<NestedConfig2588>;

interface HeavyProps2588 {
  config: DeepPartial2588<NestedConfig2588>;
  path?: ConfigPaths2588;
}

const HeavyComponent2588 = memo(function HeavyComponent2588({ config }: HeavyProps2588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2588.displayName = 'HeavyComponent2588';
export default HeavyComponent2588;

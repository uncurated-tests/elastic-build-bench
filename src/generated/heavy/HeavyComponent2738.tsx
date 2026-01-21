'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2738<T> = T extends (infer U)[]
  ? DeepReadonlyArray2738<U>
  : T extends object
  ? DeepReadonlyObject2738<T>
  : T;

interface DeepReadonlyArray2738<T> extends ReadonlyArray<DeepReadonly2738<T>> {}

type DeepReadonlyObject2738<T> = {
  readonly [P in keyof T]: DeepReadonly2738<T[P]>;
};

type UnionToIntersection2738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2738<T> = UnionToIntersection2738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2738<T extends unknown[], V> = [...T, V];

type TuplifyUnion2738<T, L = LastOf2738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2738<TuplifyUnion2738<Exclude<T, L>>, L>;

type DeepPartial2738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2738<T[P]> }
  : T;

type Paths2738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2738<K, Paths2738<T[K], Prev2738[D]>> : never }[keyof T]
  : never;

type Prev2738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2738 {
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

type ConfigPaths2738 = Paths2738<NestedConfig2738>;

interface HeavyProps2738 {
  config: DeepPartial2738<NestedConfig2738>;
  path?: ConfigPaths2738;
}

const HeavyComponent2738 = memo(function HeavyComponent2738({ config }: HeavyProps2738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2738.displayName = 'HeavyComponent2738';
export default HeavyComponent2738;

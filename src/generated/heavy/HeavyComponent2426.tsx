'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2426<T> = T extends (infer U)[]
  ? DeepReadonlyArray2426<U>
  : T extends object
  ? DeepReadonlyObject2426<T>
  : T;

interface DeepReadonlyArray2426<T> extends ReadonlyArray<DeepReadonly2426<T>> {}

type DeepReadonlyObject2426<T> = {
  readonly [P in keyof T]: DeepReadonly2426<T[P]>;
};

type UnionToIntersection2426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2426<T> = UnionToIntersection2426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2426<T extends unknown[], V> = [...T, V];

type TuplifyUnion2426<T, L = LastOf2426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2426<TuplifyUnion2426<Exclude<T, L>>, L>;

type DeepPartial2426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2426<T[P]> }
  : T;

type Paths2426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2426<K, Paths2426<T[K], Prev2426[D]>> : never }[keyof T]
  : never;

type Prev2426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2426 {
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

type ConfigPaths2426 = Paths2426<NestedConfig2426>;

interface HeavyProps2426 {
  config: DeepPartial2426<NestedConfig2426>;
  path?: ConfigPaths2426;
}

const HeavyComponent2426 = memo(function HeavyComponent2426({ config }: HeavyProps2426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2426.displayName = 'HeavyComponent2426';
export default HeavyComponent2426;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2517<T> = T extends (infer U)[]
  ? DeepReadonlyArray2517<U>
  : T extends object
  ? DeepReadonlyObject2517<T>
  : T;

interface DeepReadonlyArray2517<T> extends ReadonlyArray<DeepReadonly2517<T>> {}

type DeepReadonlyObject2517<T> = {
  readonly [P in keyof T]: DeepReadonly2517<T[P]>;
};

type UnionToIntersection2517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2517<T> = UnionToIntersection2517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2517<T extends unknown[], V> = [...T, V];

type TuplifyUnion2517<T, L = LastOf2517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2517<TuplifyUnion2517<Exclude<T, L>>, L>;

type DeepPartial2517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2517<T[P]> }
  : T;

type Paths2517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2517<K, Paths2517<T[K], Prev2517[D]>> : never }[keyof T]
  : never;

type Prev2517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2517 {
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

type ConfigPaths2517 = Paths2517<NestedConfig2517>;

interface HeavyProps2517 {
  config: DeepPartial2517<NestedConfig2517>;
  path?: ConfigPaths2517;
}

const HeavyComponent2517 = memo(function HeavyComponent2517({ config }: HeavyProps2517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2517.displayName = 'HeavyComponent2517';
export default HeavyComponent2517;

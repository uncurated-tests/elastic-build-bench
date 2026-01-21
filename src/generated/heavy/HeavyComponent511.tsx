'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly511<T> = T extends (infer U)[]
  ? DeepReadonlyArray511<U>
  : T extends object
  ? DeepReadonlyObject511<T>
  : T;

interface DeepReadonlyArray511<T> extends ReadonlyArray<DeepReadonly511<T>> {}

type DeepReadonlyObject511<T> = {
  readonly [P in keyof T]: DeepReadonly511<T[P]>;
};

type UnionToIntersection511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf511<T> = UnionToIntersection511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push511<T extends unknown[], V> = [...T, V];

type TuplifyUnion511<T, L = LastOf511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push511<TuplifyUnion511<Exclude<T, L>>, L>;

type DeepPartial511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial511<T[P]> }
  : T;

type Paths511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join511<K, Paths511<T[K], Prev511[D]>> : never }[keyof T]
  : never;

type Prev511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig511 {
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

type ConfigPaths511 = Paths511<NestedConfig511>;

interface HeavyProps511 {
  config: DeepPartial511<NestedConfig511>;
  path?: ConfigPaths511;
}

const HeavyComponent511 = memo(function HeavyComponent511({ config }: HeavyProps511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent511.displayName = 'HeavyComponent511';
export default HeavyComponent511;

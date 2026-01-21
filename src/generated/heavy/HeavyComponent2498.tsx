'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2498<T> = T extends (infer U)[]
  ? DeepReadonlyArray2498<U>
  : T extends object
  ? DeepReadonlyObject2498<T>
  : T;

interface DeepReadonlyArray2498<T> extends ReadonlyArray<DeepReadonly2498<T>> {}

type DeepReadonlyObject2498<T> = {
  readonly [P in keyof T]: DeepReadonly2498<T[P]>;
};

type UnionToIntersection2498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2498<T> = UnionToIntersection2498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2498<T extends unknown[], V> = [...T, V];

type TuplifyUnion2498<T, L = LastOf2498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2498<TuplifyUnion2498<Exclude<T, L>>, L>;

type DeepPartial2498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2498<T[P]> }
  : T;

type Paths2498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2498<K, Paths2498<T[K], Prev2498[D]>> : never }[keyof T]
  : never;

type Prev2498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2498 {
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

type ConfigPaths2498 = Paths2498<NestedConfig2498>;

interface HeavyProps2498 {
  config: DeepPartial2498<NestedConfig2498>;
  path?: ConfigPaths2498;
}

const HeavyComponent2498 = memo(function HeavyComponent2498({ config }: HeavyProps2498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2498.displayName = 'HeavyComponent2498';
export default HeavyComponent2498;

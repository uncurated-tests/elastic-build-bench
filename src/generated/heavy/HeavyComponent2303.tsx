'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2303<T> = T extends (infer U)[]
  ? DeepReadonlyArray2303<U>
  : T extends object
  ? DeepReadonlyObject2303<T>
  : T;

interface DeepReadonlyArray2303<T> extends ReadonlyArray<DeepReadonly2303<T>> {}

type DeepReadonlyObject2303<T> = {
  readonly [P in keyof T]: DeepReadonly2303<T[P]>;
};

type UnionToIntersection2303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2303<T> = UnionToIntersection2303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2303<T extends unknown[], V> = [...T, V];

type TuplifyUnion2303<T, L = LastOf2303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2303<TuplifyUnion2303<Exclude<T, L>>, L>;

type DeepPartial2303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2303<T[P]> }
  : T;

type Paths2303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2303<K, Paths2303<T[K], Prev2303[D]>> : never }[keyof T]
  : never;

type Prev2303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2303 {
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

type ConfigPaths2303 = Paths2303<NestedConfig2303>;

interface HeavyProps2303 {
  config: DeepPartial2303<NestedConfig2303>;
  path?: ConfigPaths2303;
}

const HeavyComponent2303 = memo(function HeavyComponent2303({ config }: HeavyProps2303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2303.displayName = 'HeavyComponent2303';
export default HeavyComponent2303;

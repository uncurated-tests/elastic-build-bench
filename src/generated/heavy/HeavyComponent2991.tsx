'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2991<T> = T extends (infer U)[]
  ? DeepReadonlyArray2991<U>
  : T extends object
  ? DeepReadonlyObject2991<T>
  : T;

interface DeepReadonlyArray2991<T> extends ReadonlyArray<DeepReadonly2991<T>> {}

type DeepReadonlyObject2991<T> = {
  readonly [P in keyof T]: DeepReadonly2991<T[P]>;
};

type UnionToIntersection2991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2991<T> = UnionToIntersection2991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2991<T extends unknown[], V> = [...T, V];

type TuplifyUnion2991<T, L = LastOf2991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2991<TuplifyUnion2991<Exclude<T, L>>, L>;

type DeepPartial2991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2991<T[P]> }
  : T;

type Paths2991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2991<K, Paths2991<T[K], Prev2991[D]>> : never }[keyof T]
  : never;

type Prev2991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2991 {
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

type ConfigPaths2991 = Paths2991<NestedConfig2991>;

interface HeavyProps2991 {
  config: DeepPartial2991<NestedConfig2991>;
  path?: ConfigPaths2991;
}

const HeavyComponent2991 = memo(function HeavyComponent2991({ config }: HeavyProps2991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2991.displayName = 'HeavyComponent2991';
export default HeavyComponent2991;

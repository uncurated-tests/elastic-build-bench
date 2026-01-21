'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2130<T> = T extends (infer U)[]
  ? DeepReadonlyArray2130<U>
  : T extends object
  ? DeepReadonlyObject2130<T>
  : T;

interface DeepReadonlyArray2130<T> extends ReadonlyArray<DeepReadonly2130<T>> {}

type DeepReadonlyObject2130<T> = {
  readonly [P in keyof T]: DeepReadonly2130<T[P]>;
};

type UnionToIntersection2130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2130<T> = UnionToIntersection2130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2130<T extends unknown[], V> = [...T, V];

type TuplifyUnion2130<T, L = LastOf2130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2130<TuplifyUnion2130<Exclude<T, L>>, L>;

type DeepPartial2130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2130<T[P]> }
  : T;

type Paths2130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2130<K, Paths2130<T[K], Prev2130[D]>> : never }[keyof T]
  : never;

type Prev2130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2130 {
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

type ConfigPaths2130 = Paths2130<NestedConfig2130>;

interface HeavyProps2130 {
  config: DeepPartial2130<NestedConfig2130>;
  path?: ConfigPaths2130;
}

const HeavyComponent2130 = memo(function HeavyComponent2130({ config }: HeavyProps2130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2130.displayName = 'HeavyComponent2130';
export default HeavyComponent2130;

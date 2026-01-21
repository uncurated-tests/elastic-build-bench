'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly465<T> = T extends (infer U)[]
  ? DeepReadonlyArray465<U>
  : T extends object
  ? DeepReadonlyObject465<T>
  : T;

interface DeepReadonlyArray465<T> extends ReadonlyArray<DeepReadonly465<T>> {}

type DeepReadonlyObject465<T> = {
  readonly [P in keyof T]: DeepReadonly465<T[P]>;
};

type UnionToIntersection465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf465<T> = UnionToIntersection465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push465<T extends unknown[], V> = [...T, V];

type TuplifyUnion465<T, L = LastOf465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push465<TuplifyUnion465<Exclude<T, L>>, L>;

type DeepPartial465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial465<T[P]> }
  : T;

type Paths465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join465<K, Paths465<T[K], Prev465[D]>> : never }[keyof T]
  : never;

type Prev465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig465 {
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

type ConfigPaths465 = Paths465<NestedConfig465>;

interface HeavyProps465 {
  config: DeepPartial465<NestedConfig465>;
  path?: ConfigPaths465;
}

const HeavyComponent465 = memo(function HeavyComponent465({ config }: HeavyProps465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent465.displayName = 'HeavyComponent465';
export default HeavyComponent465;

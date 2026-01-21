'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3555<T> = T extends (infer U)[]
  ? DeepReadonlyArray3555<U>
  : T extends object
  ? DeepReadonlyObject3555<T>
  : T;

interface DeepReadonlyArray3555<T> extends ReadonlyArray<DeepReadonly3555<T>> {}

type DeepReadonlyObject3555<T> = {
  readonly [P in keyof T]: DeepReadonly3555<T[P]>;
};

type UnionToIntersection3555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3555<T> = UnionToIntersection3555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3555<T extends unknown[], V> = [...T, V];

type TuplifyUnion3555<T, L = LastOf3555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3555<TuplifyUnion3555<Exclude<T, L>>, L>;

type DeepPartial3555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3555<T[P]> }
  : T;

type Paths3555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3555<K, Paths3555<T[K], Prev3555[D]>> : never }[keyof T]
  : never;

type Prev3555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3555 {
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

type ConfigPaths3555 = Paths3555<NestedConfig3555>;

interface HeavyProps3555 {
  config: DeepPartial3555<NestedConfig3555>;
  path?: ConfigPaths3555;
}

const HeavyComponent3555 = memo(function HeavyComponent3555({ config }: HeavyProps3555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3555.displayName = 'HeavyComponent3555';
export default HeavyComponent3555;

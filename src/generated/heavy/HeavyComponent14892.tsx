'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14892<T> = T extends (infer U)[]
  ? DeepReadonlyArray14892<U>
  : T extends object
  ? DeepReadonlyObject14892<T>
  : T;

interface DeepReadonlyArray14892<T> extends ReadonlyArray<DeepReadonly14892<T>> {}

type DeepReadonlyObject14892<T> = {
  readonly [P in keyof T]: DeepReadonly14892<T[P]>;
};

type UnionToIntersection14892<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14892<T> = UnionToIntersection14892<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14892<T extends unknown[], V> = [...T, V];

type TuplifyUnion14892<T, L = LastOf14892<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14892<TuplifyUnion14892<Exclude<T, L>>, L>;

type DeepPartial14892<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14892<T[P]> }
  : T;

type Paths14892<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14892<K, Paths14892<T[K], Prev14892[D]>> : never }[keyof T]
  : never;

type Prev14892 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14892<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14892 {
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

type ConfigPaths14892 = Paths14892<NestedConfig14892>;

interface HeavyProps14892 {
  config: DeepPartial14892<NestedConfig14892>;
  path?: ConfigPaths14892;
}

const HeavyComponent14892 = memo(function HeavyComponent14892({ config }: HeavyProps14892) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14892) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14892 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14892: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14892.displayName = 'HeavyComponent14892';
export default HeavyComponent14892;

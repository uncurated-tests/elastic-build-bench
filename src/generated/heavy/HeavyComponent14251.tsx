'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14251<T> = T extends (infer U)[]
  ? DeepReadonlyArray14251<U>
  : T extends object
  ? DeepReadonlyObject14251<T>
  : T;

interface DeepReadonlyArray14251<T> extends ReadonlyArray<DeepReadonly14251<T>> {}

type DeepReadonlyObject14251<T> = {
  readonly [P in keyof T]: DeepReadonly14251<T[P]>;
};

type UnionToIntersection14251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14251<T> = UnionToIntersection14251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14251<T extends unknown[], V> = [...T, V];

type TuplifyUnion14251<T, L = LastOf14251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14251<TuplifyUnion14251<Exclude<T, L>>, L>;

type DeepPartial14251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14251<T[P]> }
  : T;

type Paths14251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14251<K, Paths14251<T[K], Prev14251[D]>> : never }[keyof T]
  : never;

type Prev14251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14251 {
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

type ConfigPaths14251 = Paths14251<NestedConfig14251>;

interface HeavyProps14251 {
  config: DeepPartial14251<NestedConfig14251>;
  path?: ConfigPaths14251;
}

const HeavyComponent14251 = memo(function HeavyComponent14251({ config }: HeavyProps14251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14251.displayName = 'HeavyComponent14251';
export default HeavyComponent14251;

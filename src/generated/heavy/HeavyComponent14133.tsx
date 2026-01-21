'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14133<T> = T extends (infer U)[]
  ? DeepReadonlyArray14133<U>
  : T extends object
  ? DeepReadonlyObject14133<T>
  : T;

interface DeepReadonlyArray14133<T> extends ReadonlyArray<DeepReadonly14133<T>> {}

type DeepReadonlyObject14133<T> = {
  readonly [P in keyof T]: DeepReadonly14133<T[P]>;
};

type UnionToIntersection14133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14133<T> = UnionToIntersection14133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14133<T extends unknown[], V> = [...T, V];

type TuplifyUnion14133<T, L = LastOf14133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14133<TuplifyUnion14133<Exclude<T, L>>, L>;

type DeepPartial14133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14133<T[P]> }
  : T;

type Paths14133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14133<K, Paths14133<T[K], Prev14133[D]>> : never }[keyof T]
  : never;

type Prev14133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14133 {
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

type ConfigPaths14133 = Paths14133<NestedConfig14133>;

interface HeavyProps14133 {
  config: DeepPartial14133<NestedConfig14133>;
  path?: ConfigPaths14133;
}

const HeavyComponent14133 = memo(function HeavyComponent14133({ config }: HeavyProps14133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14133.displayName = 'HeavyComponent14133';
export default HeavyComponent14133;

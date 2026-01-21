'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14025<T> = T extends (infer U)[]
  ? DeepReadonlyArray14025<U>
  : T extends object
  ? DeepReadonlyObject14025<T>
  : T;

interface DeepReadonlyArray14025<T> extends ReadonlyArray<DeepReadonly14025<T>> {}

type DeepReadonlyObject14025<T> = {
  readonly [P in keyof T]: DeepReadonly14025<T[P]>;
};

type UnionToIntersection14025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14025<T> = UnionToIntersection14025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14025<T extends unknown[], V> = [...T, V];

type TuplifyUnion14025<T, L = LastOf14025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14025<TuplifyUnion14025<Exclude<T, L>>, L>;

type DeepPartial14025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14025<T[P]> }
  : T;

type Paths14025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14025<K, Paths14025<T[K], Prev14025[D]>> : never }[keyof T]
  : never;

type Prev14025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14025 {
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

type ConfigPaths14025 = Paths14025<NestedConfig14025>;

interface HeavyProps14025 {
  config: DeepPartial14025<NestedConfig14025>;
  path?: ConfigPaths14025;
}

const HeavyComponent14025 = memo(function HeavyComponent14025({ config }: HeavyProps14025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14025.displayName = 'HeavyComponent14025';
export default HeavyComponent14025;

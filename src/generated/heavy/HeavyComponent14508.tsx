'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14508<T> = T extends (infer U)[]
  ? DeepReadonlyArray14508<U>
  : T extends object
  ? DeepReadonlyObject14508<T>
  : T;

interface DeepReadonlyArray14508<T> extends ReadonlyArray<DeepReadonly14508<T>> {}

type DeepReadonlyObject14508<T> = {
  readonly [P in keyof T]: DeepReadonly14508<T[P]>;
};

type UnionToIntersection14508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14508<T> = UnionToIntersection14508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14508<T extends unknown[], V> = [...T, V];

type TuplifyUnion14508<T, L = LastOf14508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14508<TuplifyUnion14508<Exclude<T, L>>, L>;

type DeepPartial14508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14508<T[P]> }
  : T;

type Paths14508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14508<K, Paths14508<T[K], Prev14508[D]>> : never }[keyof T]
  : never;

type Prev14508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14508 {
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

type ConfigPaths14508 = Paths14508<NestedConfig14508>;

interface HeavyProps14508 {
  config: DeepPartial14508<NestedConfig14508>;
  path?: ConfigPaths14508;
}

const HeavyComponent14508 = memo(function HeavyComponent14508({ config }: HeavyProps14508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14508.displayName = 'HeavyComponent14508';
export default HeavyComponent14508;

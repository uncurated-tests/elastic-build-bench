'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14083<T> = T extends (infer U)[]
  ? DeepReadonlyArray14083<U>
  : T extends object
  ? DeepReadonlyObject14083<T>
  : T;

interface DeepReadonlyArray14083<T> extends ReadonlyArray<DeepReadonly14083<T>> {}

type DeepReadonlyObject14083<T> = {
  readonly [P in keyof T]: DeepReadonly14083<T[P]>;
};

type UnionToIntersection14083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14083<T> = UnionToIntersection14083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14083<T extends unknown[], V> = [...T, V];

type TuplifyUnion14083<T, L = LastOf14083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14083<TuplifyUnion14083<Exclude<T, L>>, L>;

type DeepPartial14083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14083<T[P]> }
  : T;

type Paths14083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14083<K, Paths14083<T[K], Prev14083[D]>> : never }[keyof T]
  : never;

type Prev14083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14083 {
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

type ConfigPaths14083 = Paths14083<NestedConfig14083>;

interface HeavyProps14083 {
  config: DeepPartial14083<NestedConfig14083>;
  path?: ConfigPaths14083;
}

const HeavyComponent14083 = memo(function HeavyComponent14083({ config }: HeavyProps14083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14083.displayName = 'HeavyComponent14083';
export default HeavyComponent14083;

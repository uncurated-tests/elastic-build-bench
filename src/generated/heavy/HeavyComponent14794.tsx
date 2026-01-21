'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14794<T> = T extends (infer U)[]
  ? DeepReadonlyArray14794<U>
  : T extends object
  ? DeepReadonlyObject14794<T>
  : T;

interface DeepReadonlyArray14794<T> extends ReadonlyArray<DeepReadonly14794<T>> {}

type DeepReadonlyObject14794<T> = {
  readonly [P in keyof T]: DeepReadonly14794<T[P]>;
};

type UnionToIntersection14794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14794<T> = UnionToIntersection14794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14794<T extends unknown[], V> = [...T, V];

type TuplifyUnion14794<T, L = LastOf14794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14794<TuplifyUnion14794<Exclude<T, L>>, L>;

type DeepPartial14794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14794<T[P]> }
  : T;

type Paths14794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14794<K, Paths14794<T[K], Prev14794[D]>> : never }[keyof T]
  : never;

type Prev14794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14794 {
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

type ConfigPaths14794 = Paths14794<NestedConfig14794>;

interface HeavyProps14794 {
  config: DeepPartial14794<NestedConfig14794>;
  path?: ConfigPaths14794;
}

const HeavyComponent14794 = memo(function HeavyComponent14794({ config }: HeavyProps14794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14794.displayName = 'HeavyComponent14794';
export default HeavyComponent14794;

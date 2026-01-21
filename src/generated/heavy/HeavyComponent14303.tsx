'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14303<T> = T extends (infer U)[]
  ? DeepReadonlyArray14303<U>
  : T extends object
  ? DeepReadonlyObject14303<T>
  : T;

interface DeepReadonlyArray14303<T> extends ReadonlyArray<DeepReadonly14303<T>> {}

type DeepReadonlyObject14303<T> = {
  readonly [P in keyof T]: DeepReadonly14303<T[P]>;
};

type UnionToIntersection14303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14303<T> = UnionToIntersection14303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14303<T extends unknown[], V> = [...T, V];

type TuplifyUnion14303<T, L = LastOf14303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14303<TuplifyUnion14303<Exclude<T, L>>, L>;

type DeepPartial14303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14303<T[P]> }
  : T;

type Paths14303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14303<K, Paths14303<T[K], Prev14303[D]>> : never }[keyof T]
  : never;

type Prev14303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14303 {
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

type ConfigPaths14303 = Paths14303<NestedConfig14303>;

interface HeavyProps14303 {
  config: DeepPartial14303<NestedConfig14303>;
  path?: ConfigPaths14303;
}

const HeavyComponent14303 = memo(function HeavyComponent14303({ config }: HeavyProps14303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14303.displayName = 'HeavyComponent14303';
export default HeavyComponent14303;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14903<T> = T extends (infer U)[]
  ? DeepReadonlyArray14903<U>
  : T extends object
  ? DeepReadonlyObject14903<T>
  : T;

interface DeepReadonlyArray14903<T> extends ReadonlyArray<DeepReadonly14903<T>> {}

type DeepReadonlyObject14903<T> = {
  readonly [P in keyof T]: DeepReadonly14903<T[P]>;
};

type UnionToIntersection14903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14903<T> = UnionToIntersection14903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14903<T extends unknown[], V> = [...T, V];

type TuplifyUnion14903<T, L = LastOf14903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14903<TuplifyUnion14903<Exclude<T, L>>, L>;

type DeepPartial14903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14903<T[P]> }
  : T;

type Paths14903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14903<K, Paths14903<T[K], Prev14903[D]>> : never }[keyof T]
  : never;

type Prev14903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14903 {
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

type ConfigPaths14903 = Paths14903<NestedConfig14903>;

interface HeavyProps14903 {
  config: DeepPartial14903<NestedConfig14903>;
  path?: ConfigPaths14903;
}

const HeavyComponent14903 = memo(function HeavyComponent14903({ config }: HeavyProps14903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14903.displayName = 'HeavyComponent14903';
export default HeavyComponent14903;

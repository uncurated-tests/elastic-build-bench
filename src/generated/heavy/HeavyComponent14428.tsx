'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14428<T> = T extends (infer U)[]
  ? DeepReadonlyArray14428<U>
  : T extends object
  ? DeepReadonlyObject14428<T>
  : T;

interface DeepReadonlyArray14428<T> extends ReadonlyArray<DeepReadonly14428<T>> {}

type DeepReadonlyObject14428<T> = {
  readonly [P in keyof T]: DeepReadonly14428<T[P]>;
};

type UnionToIntersection14428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14428<T> = UnionToIntersection14428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14428<T extends unknown[], V> = [...T, V];

type TuplifyUnion14428<T, L = LastOf14428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14428<TuplifyUnion14428<Exclude<T, L>>, L>;

type DeepPartial14428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14428<T[P]> }
  : T;

type Paths14428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14428<K, Paths14428<T[K], Prev14428[D]>> : never }[keyof T]
  : never;

type Prev14428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14428 {
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

type ConfigPaths14428 = Paths14428<NestedConfig14428>;

interface HeavyProps14428 {
  config: DeepPartial14428<NestedConfig14428>;
  path?: ConfigPaths14428;
}

const HeavyComponent14428 = memo(function HeavyComponent14428({ config }: HeavyProps14428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14428.displayName = 'HeavyComponent14428';
export default HeavyComponent14428;

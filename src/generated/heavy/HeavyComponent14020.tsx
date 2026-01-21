'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14020<T> = T extends (infer U)[]
  ? DeepReadonlyArray14020<U>
  : T extends object
  ? DeepReadonlyObject14020<T>
  : T;

interface DeepReadonlyArray14020<T> extends ReadonlyArray<DeepReadonly14020<T>> {}

type DeepReadonlyObject14020<T> = {
  readonly [P in keyof T]: DeepReadonly14020<T[P]>;
};

type UnionToIntersection14020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14020<T> = UnionToIntersection14020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14020<T extends unknown[], V> = [...T, V];

type TuplifyUnion14020<T, L = LastOf14020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14020<TuplifyUnion14020<Exclude<T, L>>, L>;

type DeepPartial14020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14020<T[P]> }
  : T;

type Paths14020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14020<K, Paths14020<T[K], Prev14020[D]>> : never }[keyof T]
  : never;

type Prev14020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14020 {
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

type ConfigPaths14020 = Paths14020<NestedConfig14020>;

interface HeavyProps14020 {
  config: DeepPartial14020<NestedConfig14020>;
  path?: ConfigPaths14020;
}

const HeavyComponent14020 = memo(function HeavyComponent14020({ config }: HeavyProps14020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14020.displayName = 'HeavyComponent14020';
export default HeavyComponent14020;

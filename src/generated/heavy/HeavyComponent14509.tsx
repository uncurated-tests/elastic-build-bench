'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14509<T> = T extends (infer U)[]
  ? DeepReadonlyArray14509<U>
  : T extends object
  ? DeepReadonlyObject14509<T>
  : T;

interface DeepReadonlyArray14509<T> extends ReadonlyArray<DeepReadonly14509<T>> {}

type DeepReadonlyObject14509<T> = {
  readonly [P in keyof T]: DeepReadonly14509<T[P]>;
};

type UnionToIntersection14509<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14509<T> = UnionToIntersection14509<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14509<T extends unknown[], V> = [...T, V];

type TuplifyUnion14509<T, L = LastOf14509<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14509<TuplifyUnion14509<Exclude<T, L>>, L>;

type DeepPartial14509<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14509<T[P]> }
  : T;

type Paths14509<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14509<K, Paths14509<T[K], Prev14509[D]>> : never }[keyof T]
  : never;

type Prev14509 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14509<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14509 {
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

type ConfigPaths14509 = Paths14509<NestedConfig14509>;

interface HeavyProps14509 {
  config: DeepPartial14509<NestedConfig14509>;
  path?: ConfigPaths14509;
}

const HeavyComponent14509 = memo(function HeavyComponent14509({ config }: HeavyProps14509) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14509) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14509 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14509: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14509.displayName = 'HeavyComponent14509';
export default HeavyComponent14509;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14609<T> = T extends (infer U)[]
  ? DeepReadonlyArray14609<U>
  : T extends object
  ? DeepReadonlyObject14609<T>
  : T;

interface DeepReadonlyArray14609<T> extends ReadonlyArray<DeepReadonly14609<T>> {}

type DeepReadonlyObject14609<T> = {
  readonly [P in keyof T]: DeepReadonly14609<T[P]>;
};

type UnionToIntersection14609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14609<T> = UnionToIntersection14609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14609<T extends unknown[], V> = [...T, V];

type TuplifyUnion14609<T, L = LastOf14609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14609<TuplifyUnion14609<Exclude<T, L>>, L>;

type DeepPartial14609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14609<T[P]> }
  : T;

type Paths14609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14609<K, Paths14609<T[K], Prev14609[D]>> : never }[keyof T]
  : never;

type Prev14609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14609 {
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

type ConfigPaths14609 = Paths14609<NestedConfig14609>;

interface HeavyProps14609 {
  config: DeepPartial14609<NestedConfig14609>;
  path?: ConfigPaths14609;
}

const HeavyComponent14609 = memo(function HeavyComponent14609({ config }: HeavyProps14609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14609.displayName = 'HeavyComponent14609';
export default HeavyComponent14609;

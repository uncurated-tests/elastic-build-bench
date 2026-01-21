'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14664<T> = T extends (infer U)[]
  ? DeepReadonlyArray14664<U>
  : T extends object
  ? DeepReadonlyObject14664<T>
  : T;

interface DeepReadonlyArray14664<T> extends ReadonlyArray<DeepReadonly14664<T>> {}

type DeepReadonlyObject14664<T> = {
  readonly [P in keyof T]: DeepReadonly14664<T[P]>;
};

type UnionToIntersection14664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14664<T> = UnionToIntersection14664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14664<T extends unknown[], V> = [...T, V];

type TuplifyUnion14664<T, L = LastOf14664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14664<TuplifyUnion14664<Exclude<T, L>>, L>;

type DeepPartial14664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14664<T[P]> }
  : T;

type Paths14664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14664<K, Paths14664<T[K], Prev14664[D]>> : never }[keyof T]
  : never;

type Prev14664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14664 {
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

type ConfigPaths14664 = Paths14664<NestedConfig14664>;

interface HeavyProps14664 {
  config: DeepPartial14664<NestedConfig14664>;
  path?: ConfigPaths14664;
}

const HeavyComponent14664 = memo(function HeavyComponent14664({ config }: HeavyProps14664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14664.displayName = 'HeavyComponent14664';
export default HeavyComponent14664;

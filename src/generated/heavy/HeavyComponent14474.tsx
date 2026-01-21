'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14474<T> = T extends (infer U)[]
  ? DeepReadonlyArray14474<U>
  : T extends object
  ? DeepReadonlyObject14474<T>
  : T;

interface DeepReadonlyArray14474<T> extends ReadonlyArray<DeepReadonly14474<T>> {}

type DeepReadonlyObject14474<T> = {
  readonly [P in keyof T]: DeepReadonly14474<T[P]>;
};

type UnionToIntersection14474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14474<T> = UnionToIntersection14474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14474<T extends unknown[], V> = [...T, V];

type TuplifyUnion14474<T, L = LastOf14474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14474<TuplifyUnion14474<Exclude<T, L>>, L>;

type DeepPartial14474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14474<T[P]> }
  : T;

type Paths14474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14474<K, Paths14474<T[K], Prev14474[D]>> : never }[keyof T]
  : never;

type Prev14474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14474 {
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

type ConfigPaths14474 = Paths14474<NestedConfig14474>;

interface HeavyProps14474 {
  config: DeepPartial14474<NestedConfig14474>;
  path?: ConfigPaths14474;
}

const HeavyComponent14474 = memo(function HeavyComponent14474({ config }: HeavyProps14474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14474.displayName = 'HeavyComponent14474';
export default HeavyComponent14474;

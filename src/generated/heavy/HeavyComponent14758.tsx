'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14758<T> = T extends (infer U)[]
  ? DeepReadonlyArray14758<U>
  : T extends object
  ? DeepReadonlyObject14758<T>
  : T;

interface DeepReadonlyArray14758<T> extends ReadonlyArray<DeepReadonly14758<T>> {}

type DeepReadonlyObject14758<T> = {
  readonly [P in keyof T]: DeepReadonly14758<T[P]>;
};

type UnionToIntersection14758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14758<T> = UnionToIntersection14758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14758<T extends unknown[], V> = [...T, V];

type TuplifyUnion14758<T, L = LastOf14758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14758<TuplifyUnion14758<Exclude<T, L>>, L>;

type DeepPartial14758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14758<T[P]> }
  : T;

type Paths14758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14758<K, Paths14758<T[K], Prev14758[D]>> : never }[keyof T]
  : never;

type Prev14758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14758 {
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

type ConfigPaths14758 = Paths14758<NestedConfig14758>;

interface HeavyProps14758 {
  config: DeepPartial14758<NestedConfig14758>;
  path?: ConfigPaths14758;
}

const HeavyComponent14758 = memo(function HeavyComponent14758({ config }: HeavyProps14758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14758.displayName = 'HeavyComponent14758';
export default HeavyComponent14758;

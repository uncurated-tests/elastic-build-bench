'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14081<T> = T extends (infer U)[]
  ? DeepReadonlyArray14081<U>
  : T extends object
  ? DeepReadonlyObject14081<T>
  : T;

interface DeepReadonlyArray14081<T> extends ReadonlyArray<DeepReadonly14081<T>> {}

type DeepReadonlyObject14081<T> = {
  readonly [P in keyof T]: DeepReadonly14081<T[P]>;
};

type UnionToIntersection14081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14081<T> = UnionToIntersection14081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14081<T extends unknown[], V> = [...T, V];

type TuplifyUnion14081<T, L = LastOf14081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14081<TuplifyUnion14081<Exclude<T, L>>, L>;

type DeepPartial14081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14081<T[P]> }
  : T;

type Paths14081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14081<K, Paths14081<T[K], Prev14081[D]>> : never }[keyof T]
  : never;

type Prev14081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14081 {
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

type ConfigPaths14081 = Paths14081<NestedConfig14081>;

interface HeavyProps14081 {
  config: DeepPartial14081<NestedConfig14081>;
  path?: ConfigPaths14081;
}

const HeavyComponent14081 = memo(function HeavyComponent14081({ config }: HeavyProps14081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14081.displayName = 'HeavyComponent14081';
export default HeavyComponent14081;

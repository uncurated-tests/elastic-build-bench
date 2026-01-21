'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14739<T> = T extends (infer U)[]
  ? DeepReadonlyArray14739<U>
  : T extends object
  ? DeepReadonlyObject14739<T>
  : T;

interface DeepReadonlyArray14739<T> extends ReadonlyArray<DeepReadonly14739<T>> {}

type DeepReadonlyObject14739<T> = {
  readonly [P in keyof T]: DeepReadonly14739<T[P]>;
};

type UnionToIntersection14739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14739<T> = UnionToIntersection14739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14739<T extends unknown[], V> = [...T, V];

type TuplifyUnion14739<T, L = LastOf14739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14739<TuplifyUnion14739<Exclude<T, L>>, L>;

type DeepPartial14739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14739<T[P]> }
  : T;

type Paths14739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14739<K, Paths14739<T[K], Prev14739[D]>> : never }[keyof T]
  : never;

type Prev14739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14739 {
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

type ConfigPaths14739 = Paths14739<NestedConfig14739>;

interface HeavyProps14739 {
  config: DeepPartial14739<NestedConfig14739>;
  path?: ConfigPaths14739;
}

const HeavyComponent14739 = memo(function HeavyComponent14739({ config }: HeavyProps14739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14739.displayName = 'HeavyComponent14739';
export default HeavyComponent14739;

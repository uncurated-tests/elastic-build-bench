'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14504<T> = T extends (infer U)[]
  ? DeepReadonlyArray14504<U>
  : T extends object
  ? DeepReadonlyObject14504<T>
  : T;

interface DeepReadonlyArray14504<T> extends ReadonlyArray<DeepReadonly14504<T>> {}

type DeepReadonlyObject14504<T> = {
  readonly [P in keyof T]: DeepReadonly14504<T[P]>;
};

type UnionToIntersection14504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14504<T> = UnionToIntersection14504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14504<T extends unknown[], V> = [...T, V];

type TuplifyUnion14504<T, L = LastOf14504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14504<TuplifyUnion14504<Exclude<T, L>>, L>;

type DeepPartial14504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14504<T[P]> }
  : T;

type Paths14504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14504<K, Paths14504<T[K], Prev14504[D]>> : never }[keyof T]
  : never;

type Prev14504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14504 {
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

type ConfigPaths14504 = Paths14504<NestedConfig14504>;

interface HeavyProps14504 {
  config: DeepPartial14504<NestedConfig14504>;
  path?: ConfigPaths14504;
}

const HeavyComponent14504 = memo(function HeavyComponent14504({ config }: HeavyProps14504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14504.displayName = 'HeavyComponent14504';
export default HeavyComponent14504;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14786<T> = T extends (infer U)[]
  ? DeepReadonlyArray14786<U>
  : T extends object
  ? DeepReadonlyObject14786<T>
  : T;

interface DeepReadonlyArray14786<T> extends ReadonlyArray<DeepReadonly14786<T>> {}

type DeepReadonlyObject14786<T> = {
  readonly [P in keyof T]: DeepReadonly14786<T[P]>;
};

type UnionToIntersection14786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14786<T> = UnionToIntersection14786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14786<T extends unknown[], V> = [...T, V];

type TuplifyUnion14786<T, L = LastOf14786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14786<TuplifyUnion14786<Exclude<T, L>>, L>;

type DeepPartial14786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14786<T[P]> }
  : T;

type Paths14786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14786<K, Paths14786<T[K], Prev14786[D]>> : never }[keyof T]
  : never;

type Prev14786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14786 {
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

type ConfigPaths14786 = Paths14786<NestedConfig14786>;

interface HeavyProps14786 {
  config: DeepPartial14786<NestedConfig14786>;
  path?: ConfigPaths14786;
}

const HeavyComponent14786 = memo(function HeavyComponent14786({ config }: HeavyProps14786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14786.displayName = 'HeavyComponent14786';
export default HeavyComponent14786;

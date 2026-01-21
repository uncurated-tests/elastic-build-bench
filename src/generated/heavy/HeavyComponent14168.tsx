'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14168<T> = T extends (infer U)[]
  ? DeepReadonlyArray14168<U>
  : T extends object
  ? DeepReadonlyObject14168<T>
  : T;

interface DeepReadonlyArray14168<T> extends ReadonlyArray<DeepReadonly14168<T>> {}

type DeepReadonlyObject14168<T> = {
  readonly [P in keyof T]: DeepReadonly14168<T[P]>;
};

type UnionToIntersection14168<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14168<T> = UnionToIntersection14168<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14168<T extends unknown[], V> = [...T, V];

type TuplifyUnion14168<T, L = LastOf14168<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14168<TuplifyUnion14168<Exclude<T, L>>, L>;

type DeepPartial14168<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14168<T[P]> }
  : T;

type Paths14168<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14168<K, Paths14168<T[K], Prev14168[D]>> : never }[keyof T]
  : never;

type Prev14168 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14168<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14168 {
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

type ConfigPaths14168 = Paths14168<NestedConfig14168>;

interface HeavyProps14168 {
  config: DeepPartial14168<NestedConfig14168>;
  path?: ConfigPaths14168;
}

const HeavyComponent14168 = memo(function HeavyComponent14168({ config }: HeavyProps14168) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14168) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14168 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14168: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14168.displayName = 'HeavyComponent14168';
export default HeavyComponent14168;

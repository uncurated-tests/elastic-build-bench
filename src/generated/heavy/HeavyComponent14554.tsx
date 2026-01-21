'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14554<T> = T extends (infer U)[]
  ? DeepReadonlyArray14554<U>
  : T extends object
  ? DeepReadonlyObject14554<T>
  : T;

interface DeepReadonlyArray14554<T> extends ReadonlyArray<DeepReadonly14554<T>> {}

type DeepReadonlyObject14554<T> = {
  readonly [P in keyof T]: DeepReadonly14554<T[P]>;
};

type UnionToIntersection14554<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14554<T> = UnionToIntersection14554<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14554<T extends unknown[], V> = [...T, V];

type TuplifyUnion14554<T, L = LastOf14554<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14554<TuplifyUnion14554<Exclude<T, L>>, L>;

type DeepPartial14554<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14554<T[P]> }
  : T;

type Paths14554<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14554<K, Paths14554<T[K], Prev14554[D]>> : never }[keyof T]
  : never;

type Prev14554 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14554<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14554 {
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

type ConfigPaths14554 = Paths14554<NestedConfig14554>;

interface HeavyProps14554 {
  config: DeepPartial14554<NestedConfig14554>;
  path?: ConfigPaths14554;
}

const HeavyComponent14554 = memo(function HeavyComponent14554({ config }: HeavyProps14554) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14554) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14554 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14554: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14554.displayName = 'HeavyComponent14554';
export default HeavyComponent14554;

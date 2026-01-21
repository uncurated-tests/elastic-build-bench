'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14056<T> = T extends (infer U)[]
  ? DeepReadonlyArray14056<U>
  : T extends object
  ? DeepReadonlyObject14056<T>
  : T;

interface DeepReadonlyArray14056<T> extends ReadonlyArray<DeepReadonly14056<T>> {}

type DeepReadonlyObject14056<T> = {
  readonly [P in keyof T]: DeepReadonly14056<T[P]>;
};

type UnionToIntersection14056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14056<T> = UnionToIntersection14056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14056<T extends unknown[], V> = [...T, V];

type TuplifyUnion14056<T, L = LastOf14056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14056<TuplifyUnion14056<Exclude<T, L>>, L>;

type DeepPartial14056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14056<T[P]> }
  : T;

type Paths14056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14056<K, Paths14056<T[K], Prev14056[D]>> : never }[keyof T]
  : never;

type Prev14056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14056 {
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

type ConfigPaths14056 = Paths14056<NestedConfig14056>;

interface HeavyProps14056 {
  config: DeepPartial14056<NestedConfig14056>;
  path?: ConfigPaths14056;
}

const HeavyComponent14056 = memo(function HeavyComponent14056({ config }: HeavyProps14056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14056.displayName = 'HeavyComponent14056';
export default HeavyComponent14056;
